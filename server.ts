import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "data.json");

// Initialize data if not exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({
    profiles: [],
    needs: [],
    swaps: [],
    trustScores: {} // userId -> score
  }));
}

function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeData(data: any) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // API Routes
  app.get("/api/data", (req, res) => {
    res.json(readData());
  });

  app.post("/api/profiles", (req, res) => {
    const data = readData();
    const newProfile = req.body;
    // Simple check: if name exists, update it, else add
    const index = data.profiles.findIndex((p: any) => p.name === newProfile.name);
    if (index > -1) {
      data.profiles[index] = { ...data.profiles[index], ...newProfile };
    } else {
      data.profiles.push(newProfile);
      data.trustScores[newProfile.name] = (data.trustScores[newProfile.name] || 0);
    }
    writeData(data);
    res.json(newProfile);
  });

  app.post("/api/needs", (req, res) => {
    const data = readData();
    const newNeed = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
      status: "open"
    };
    data.needs.push(newNeed);
    writeData(data);
    res.json(newNeed);
  });

  app.post("/api/swaps", (req, res) => {
    const data = readData();
    const newSwap = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
      status: "pending"
    };
    data.swaps.push(newSwap);
    writeData(data);
    res.json(newSwap);
  });

  app.post("/api/swaps/confirm", (req, res) => {
    const { swapId, confirmerName } = req.body;
    const data = readData();
    const swap = data.swaps.find((s: any) => s.id === swapId);
    
    if (swap) {
      if (swap.offerer === confirmerName) swap.offererConfirmed = true;
      if (swap.requester === confirmerName) swap.requesterConfirmed = true;

      if (swap.offererConfirmed && swap.requesterConfirmed) {
        swap.status = "completed";
        // Award points and trust scores
        data.trustScores[swap.offerer] = (data.trustScores[swap.offerer] || 0) + 1;
        data.trustScores[swap.requester] = (data.trustScores[swap.requester] || 0) + 1;
        
        // Update the need status
        const need = data.needs.find((n: any) => n.id === swap.needId);
        if (need) need.status = "completed";
      }
      writeData(data);
      res.json(swap);
    } else {
      res.status(404).json({ error: "Swap not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

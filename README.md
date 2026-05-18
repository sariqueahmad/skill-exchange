# 🤝 Skill-Exchange — Rural Barter Economy Platform

> **MindMatrix VTU Internship Program** | **Project Title:** 25
> *An AI-augmented Android ecosystem engineered for rural technicians and artisans to trade manual skills, negotiate service swaps, and build self-reliant local economies without cash dependencies.*

---

## 📱 Features

* **🛠️ Skill Profiler & Directory:** A highly visual registration layout where local technicians (plumbers, electricians, carpenters) list their expertise and build a recognized identity.
* **📋 Filterable Skill Board:** A localized notice board where "Need Posts" can be instantly filtered by specific skill categories to help artisans quickly find relevant work matches.
* **💬 Chat-Driven Swap Negotiation:** A simple, intuitive chat interface built specifically for non-technical users to negotiate trade details and confirm mutually beneficial swaps.
* **⏱️ Skill Point Ledger:** A structured balancing system based on a "1 Hour = 1 Point" economic logic to ensure fair, transparent, and structured service exchanges.
* **⭐ Peer-Verified Trust Score:** A community rating mechanism that dynamically increases an artisan's trust profile only after both parties mutually confirm a successful swap.

---

## 🏗️ Technical Stack Breakdown

| Layer | Technology Used | Purpose |
| --- | --- | --- |
| **Core Languages** | `Kotlin` + `Java` | Drives native Android system workflows, background routines, and real-time ledger logic. |
| **Frontend UI** | `Jetpack Compose` / `XML` | Renders a friendly, clean, and community-focused interface optimized for effortless navigation. |
| **Real-time Database** | `Cloud Firestore` | Hosts the active "Skill Board" with real-time updates for instantly synchronizing posts and offers. |
| **Local Cache Storage** | `Room Database` | Structurally caches offline profile details, incoming swap requests, and historical chat logs. |
| **AI / ML Integration** | `Gemini 1.5 Flash` | Powers intelligent text-to-speech entry pipelines and local translation assists for creating swap posts. |
| **Architecture Pattern** | `MVVM (Model-View-ViewModel)` | Guarantees clear separation of concerns, maintaining strict isolation between data layers and views. |
| **Dependency Injection** | `Hilt / Dagger` | Optimizes repository instantiation and clean provision of Firestore network clients. |

---

## 🚀 How to Run

**open terminal then**
`cd (file name)`
`npm install`
`npm run dev`

> 💡 **System Note:** Launch your local browser instance and map to `http://localhost:3000`. Toggle or verify layout components to inspect standard responsive breakpoints and Kannada string file adjustments.

---

## 📂 Project Structure

```text
Skill-Exchange/
├── 📁 app/
│   └── 📁 src/
│       ├── 📁 main/
│       │   ├── 📁 java/com/skillexchange/barter/
│       │   │   ├── 📁 data/             # Firestore Repositories, Room DAOs, & Skill Entities
│       │   │   ├── 📁 ui/               # Friendly, Community-Focused Layout Modules
│       │   │   │   ├── 📁 profile/      # Artisan Registration & Skill Point Counter Views
│       │   │   │   ├── 📁 board/        # Category-Filtered "Need Posts" & Skill Boards
│       │   │   │   └── 📁 chat/         # Negotiation Interface & Completion Triggers
│       │   │   └── 📁 viewmodel/        # Score Calculations, Filters, & GenAI Pipelines
│       │   └── AndroidManifest.xml      # Network Settings, Device Permissions, & App Metadata
├── google-services.json                 # Secured Firebase & Firestore Infrastructure Config Key
├── build.gradle.kts                     # App Build Configurations, SDK Limits, & Target Dependencies
├── local.properties                     # Target Environment Variables & Protected API Credentials
└── PROJECT_REQUIREMENTS.md              # Internship Compliance Guidelines & Project Scope Checklists

```

---

## 🎯 Impact Goals

* **🌾 Building Self-Reliant Communities:** Reducing immediate dependency on external urban services by keeping professional technical assistance circular within the village.
* **🛠️ Skill Valorization & Dignity:** Giving tangible value, respect, and economic power to traditional manual labor and vocational expertises.
* **🌱 Enhancing Local Social Capital:** Fostering systemic trust, cross-trade friendships, and deep mutual cooperation among neighborhood technicians.

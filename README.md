# pokemon

# Pokémon Explorer 🌟

A responsive and visually appealing web app built with **Next.js 14**, **TypeScript**, and **TailwindCSS**. This project fetches data from the [PokeAPI](https://pokeapi.co/) and allows users to search and view details about the first 151 Pokémon.

## ✨ Live Demo

> *(Optional: Add GitHub Pages or Vercel link here)*

---

## 📌 Features

### ✅ Homepage (`/`)
- Fetches and displays the first 151 Pokémon from the PokeAPI.
- Search bar to filter Pokémon by name (case-insensitive).
- Responsive grid layout using TailwindCSS.
- Clean UI with soft shadows, hover effects, and badges.

### ✅ Pokémon Detail Page (`/pokemon/[id]`)
- Dynamically fetches detailed data based on Pokémon ID.
- Shows:
  - Official Pokémon artwork
  - Types (styled badges)
  - Abilities
  - Base stats
  - List of available moves
- Responsive layout and optimized image handling.

### ✅ Routing
- Uses **Next.js dynamic routing** to navigate to `/pokemon/[id]`.

---

## 🛠️ Tech Stack

| Tech            | Usage                         |
|-----------------|-------------------------------|
| **Next.js**     | Framework with built-in SSR   |
| **TypeScript**  | Type-safe React development   |
| **TailwindCSS** | Utility-first styling         |
| **PokeAPI**     | Public Pokémon API            |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer
npm intall
npm run dev

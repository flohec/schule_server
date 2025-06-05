# Schule Server Shop – Fullstack Projekt (Laravel + React + Tailwind + Docker)

## 🔧 Voraussetzungen

- Docker + Docker Compose
- Git
- Node.js (nur für lokale React-Entwicklung, optional)

## 🚀 Projekt lokal starten

```bash
git clone https://github.com/dein-benutzername/schule-server.git
cd schule-server

# Container starten
docker-compose up --build

# Zugriff
docker-compose exec backend php artisan ... 
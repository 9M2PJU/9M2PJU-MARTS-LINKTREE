<p align="center">
  <img src="public/marts-logo.png" alt="MARTS Logo" width="120" />
</p>

<h1 align="center">MARTS Linktree</h1>

<p align="center">
  <strong>A Modern Link-in-Bio Page for the Malaysian Amateur Radio Transmitters Society</strong>
</p>

<p align="center">
  <a href="https://marts.hamradio.my">
    <img src="https://img.shields.io/badge/🌐_Live_Site-marts.hamradio.my-1B365D?style=for-the-badge&labelColor=FFD700" alt="Live Site" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## ✨ Features

- **🎨 Glassmorphism Design** — Modern frosted-glass aesthetic with smooth blur effects
- **🌈 Brand Colors** — Official MARTS blue (#1B365D) and gold (#FFD700) color scheme
- **⚡ Lightning Fast** — Built with Vite for instant page loads
- **📱 Fully Responsive** — Looks great on all devices
- **🎭 Micro-interactions** — Hover animations and smooth transitions
- **🌙 Dark Mode** — Easy on the eyes with a deep space-themed background

---

## 🔗 Quick Links

This page provides easy access to all MARTS resources:

| Category | Links |
|----------|-------|
| 📋 **Membership** | Portal, Registration, Renewal |
| 📚 **Resources** | Licensing Guide, Band Plans, Exam Schedules |
| 📻 **Ham Radio** | Callbook, Repeater List, WebSDR |
| 💬 **Community** | Facebook, Instagram, TikTok, WhatsApp |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/9m2pju/9M2PJU-MARTS-LINKTREE.git
cd 9M2PJU-MARTS-LINKTREE

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build to /docs folder
npm run build

# Preview the build
npm run preview
```

---

## 🏗️ Project Structure

```
├── public/
│   ├── CNAME              # Custom domain configuration
│   └── marts-logo.png     # Brand logo
├── src/
│   ├── components/
│   │   ├── LinkTree.jsx   # Main container component
│   │   └── LinkButton.jsx # Individual link button
│   ├── data/
│   │   └── links.js       # Centralized link data
│   ├── App.jsx            # App entry with background effects
│   └── index.css          # Global styles & Tailwind
├── docs/                   # Production build output
└── vite.config.js         # Vite configuration
```

---

## 🎨 Customization

### Adding New Links

Edit `src/data/links.js`:

```javascript
{
  title: "Your Link Title",
  url: "https://example.com",
  icon: Globe, // Lucide React icon
  description: "Optional description"
}
```

### Changing Brand Colors

Update `tailwind.config.js`:

```javascript
colors: {
  marts: {
    blue: '#1B365D',
    yellow: '#FFD700',
  }
}
```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

<p align="center">
  Made with ❤️ for <img src="public/marts-logo.png" alt="MARTS" width="20" style="vertical-align: middle;" /> by <a href="https://hamradio.my">9M2PJU</a>
</p>

<p align="center">
  <strong>Connect • Communicate • Serve</strong>
</p>

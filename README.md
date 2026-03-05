# Winvite - Bengali Wedding Invitation Website

A beautiful, customizable Bengali/Indian wedding invitation website. Free to host on GitHub Pages. No coding required — just edit one config file.

## Features

- **Bengali/Indian Aesthetic** — Alpona motifs, lotus & fish symbols, red & gold theme
- **Bilingual** — English + Bengali (বাংলা) throughout
- **Fully Customizable** — Single `config.js` file controls everything
- **Responsive** — Works on mobile, tablet, and desktop
- **Lightweight** — No frameworks, pure HTML/CSS/JS
- **Free Hosting** — GitHub Pages (no server costs)
- **Countdown Timer** — Live countdown to the wedding date
- **Love Story Timeline** — Milestone-based couple story
- **Photo Gallery** — Grid layout with lightbox viewer
- **RSVP** — Google Forms integration (free, no backend)
- **Background Music** — Toggle button with shehnai/sitar audio
- **Scroll Animations** — Elegant fade-in reveals
- **BEM CSS** — Clean, maintainable stylesheet architecture

## Quick Start

1. **Clone or download** this repository
2. **Edit `config.js`** — change names, dates, venue, photos, colors
3. **Open `index.html`** in your browser — done!

## Deploy to GitHub Pages (Free)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new **Public** repository
3. Upload all files
4. Go to **Settings > Pages** > set branch to `main`
5. Your site is live at `https://username.github.io/repo-name/`

See [docs/SETUP.md](docs/SETUP.md) for detailed step-by-step instructions.

## Customization

Edit `config.js` to change:

| What | Where in config.js |
|------|-------------------|
| Couple names & bios | `couple.bride` / `couple.groom` |
| Wedding date | `wedding.date` |
| Events (Biye, Reception) | `events[]` |
| Love story milestones | `loveStory[]` |
| Gallery photos | `gallery.photos[]` |
| RSVP form | `rsvp.googleFormUrl` |
| Color theme | `theme.*` |
| Background music | `music.src` |
| Footer & social links | `footer.*` |

See [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) for the complete guide.

## File Structure

```
winvite/
├── index.html          # Main page
├── config.js           # All customization here
├── css/                # BEM-structured stylesheets
├── js/                 # Modular vanilla JavaScript
├── assets/
│   ├── images/         # Photos (bride, groom, gallery)
│   ├── icons/          # SVG icons
│   ├── patterns/       # Bengali Alpona SVG patterns
│   └── audio/          # Background music
└── docs/               # Setup & deployment guides
```

## Documentation

- [Setup Guide](docs/SETUP.md) — GitHub account, repository setup, file upload
- [Customization Guide](docs/CUSTOMIZATION.md) — Field-by-field config reference
- [Deployment Guide](docs/DEPLOYMENT.md) — GitHub Pages, custom domain, QR codes

## Browser Support

Chrome, Firefox, Safari, Edge — all modern versions.

## License

MIT License — free to use, modify, and distribute.

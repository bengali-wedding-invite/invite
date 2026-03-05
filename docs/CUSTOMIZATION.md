# Customization Guide — Winvite Wedding Invitation

Everything you need to personalize your wedding invitation website. All changes are made in **one file**: `config.js`.

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Couple Details](#2-couple-details)
3. [Wedding Date & Tagline](#3-wedding-date--tagline)
4. [Events](#4-events)
5. [Love Story Timeline](#5-love-story-timeline)
6. [Gallery Photos](#6-gallery-photos)
7. [RSVP Setup (Google Forms)](#7-rsvp-setup-google-forms)
8. [Background Music](#8-background-music)
9. [Theme & Colors](#9-theme--colors)
10. [Footer & Social Links](#10-footer--social-links)
11. [Navigation](#11-navigation)
12. [Adding Your Photos](#12-adding-your-photos)

---

## 1. Quick Start

1. Open `config.js` in any text editor (Notepad, VS Code, etc.)
2. Change the values inside the quotes `" "` — do NOT change the key names
3. Save the file
4. Refresh your browser to see changes

**Example — Changing the bride's name:**
```js
// Before
nameEn: "Ananya",

// After
nameEn: "Priya",
```

> **Important:** Always keep the quotes, commas, and brackets intact. Only change the text between the quotes.

---

## 2. Couple Details

```js
couple: {
  bride: {
    nameEn: "Ananya",              // English name
    nameBn: "অনন্যা",              // Bengali name (use Google Translate if needed)
    lastName: "Roy",               // Last name
    photo: "assets/images/bride.jpg",  // Photo path
    bio: "A passionate artist...", // Short bio (1-2 sentences)
    parents: "Daughter of Mr. Subrata Roy & Mrs. Mita Roy"
  },
  groom: {
    nameEn: "Arjun",
    nameBn: "অর্জুন",
    lastName: "Sen",
    photo: "assets/images/groom.jpg",
    bio: "A software engineer...",
    parents: "Son of Mr. Debashis Sen & Mrs. Rina Sen"
  }
}
```

### Tips:
- For Bengali text, use [Google Translate](https://translate.google.com/?sl=en&tl=bn) (English to Bengali)
- Photos should be square or portrait orientation (recommended: 400x500px)
- Keep bios short — 1-2 sentences work best

---

## 3. Wedding Date & Tagline

```js
wedding: {
  taglineEn: "Two souls, one journey",
  taglineBn: "দুটি প্রাণ, একটি পথ",
  date: "2026-12-12T17:00:00+05:30",     // ISO format — YYYY-MM-DDTHH:MM:SS+05:30
  displayDateEn: "Saturday, December 12, 2026",
  displayDateBn: "শনিবার, ১২ই ডিসেম্বর, ২০২৬"
}
```

### Date Format Explained:
The `date` field uses ISO 8601 format for the countdown timer:
```
2026-12-12T17:00:00+05:30
│    │  │  │  │  │   │
│    │  │  │  │  │   └── IST timezone offset
│    │  │  │  │  └────── seconds
│    │  │  │  └───────── minutes
│    │  │  └──────────── hours (24-hour format)
│    │  └─────────────── day
│    └────────────────── month
└─────────────────────── year
```

### Tagline Ideas:
- "Written in the stars" / "তারায় লেখা"
- "Forever begins here" / "চিরকালের শুরু এখানে"
- "Two hearts, one love" / "দুটি হৃদয়, একটি ভালোবাসা"

---

## 4. Events

```js
events: [
  {
    id: "wedding",                    // Unique ID (no spaces)
    nameEn: "Biye",                   // Event name in English
    nameBn: "বিয়ে",                   // Event name in Bengali
    subtitleEn: "Wedding Ceremony",
    date: "December 12, 2026",
    dateBn: "১২ই ডিসেম্বর, ২০২৬",
    time: "5:00 PM - 9:00 PM",
    timeBn: "বিকাল ৫টা - রাত ৯টা",
    venue: "Rabindra Sadan Banquet Hall",
    address: "1/1 AJC Bose Road, Kolkata 700020",
    mapLink: "https://maps.google.com/?q=...",   // Google Maps link
    description: "Traditional Bengali wedding ceremony..."
  }
  // Add more events by copying the block above
]
```

### How to Get a Google Maps Link:
1. Go to [Google Maps](https://maps.google.com)
2. Search for the venue
3. Click **"Share"** > **"Copy link"**
4. Paste the link in `mapLink`

### Adding More Events:
Copy an existing event block and paste it after the comma. Example for adding Gaye Holud:
```js
{
  id: "gaye-holud",
  nameEn: "Gaye Holud",
  nameBn: "গায়ে হলুদ",
  subtitleEn: "Turmeric Ceremony",
  date: "December 11, 2026",
  // ... rest of details
}
```

---

## 5. Love Story Timeline

```js
loveStory: [
  {
    year: "2020",
    titleEn: "First Meeting",
    titleBn: "প্রথম দেখা",
    description: "We met at a college reunion..."
  },
  // Add more milestones...
]
```

### Milestone Ideas:
- First Meeting / First Date / First Trip Together
- The Proposal / Engagement / Meeting the Parents
- Moving In Together / Getting a Pet

You can add as many milestones as you like. 3-5 works best.

---

## 6. Gallery Photos

```js
gallery: {
  photos: [
    { src: "assets/images/gallery-1.jpg", alt: "Engagement photo" },
    { src: "assets/images/gallery-2.jpg", alt: "Pre-wedding shoot" },
    // Add more photos...
  ]
}
```

### Tips:
- Recommended: 6-12 photos
- Upload photos to `assets/images/` folder
- Use descriptive `alt` text (helps with accessibility)
- Recommended resolution: 800x600px or larger
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

---

## 7. RSVP Setup (Google Forms)

### Step 1: Create a Google Form

1. Go to [Google Forms](https://docs.google.com/forms)
2. Click **"+ Blank"** to create a new form
3. Set the form title: `Wedding RSVP - Ananya & Arjun`
4. Add these questions:

   | Question | Type | Required? |
   |----------|------|-----------|
   | Full Name | Short answer | Yes |
   | Email or Phone | Short answer | Yes |
   | Number of Guests | Dropdown (1, 2, 3, 4, 5) | Yes |
   | Will you attend? | Multiple choice (Yes / No / Maybe) | Yes |
   | Dietary preferences | Checkboxes (Veg / Non-veg / Vegan) | No |
   | Message for the couple | Paragraph | No |

5. Click **"Send"** button (top right)
6. Click the **link icon** (middle tab)
7. Check **"Shorten URL"** and copy the link

### Step 2: Get the Embed URL

1. From the Google Form editor, click the **three dots** menu (top right)
2. Click **"Get pre-filled link"** — actually, use this method:
3. Click **"Send"** > click the **`< >`** embed icon (third tab)
4. Copy the URL from the `src="..."` attribute in the iframe code
5. It looks like: `https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true`

### Step 3: Add to config.js

```js
rsvp: {
  googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
  messageEn: "We would be honored by your presence.",
  messageBn: "আপনার উপস্থিতিতে আমরা ধন্য হবো।"
}
```

### Step 4: View Responses
- Open your Google Form
- Click the **"Responses"** tab
- Click the **Google Sheets icon** to view responses in a spreadsheet

---

## 8. Background Music

```js
music: {
  src: "assets/audio/wedding-music.mp3"
}
```

### How to Add Music:
1. Get a royalty-free shehnai, sitar, or wedding music file (.mp3)
2. Name it something simple (e.g., `wedding-music.mp3`)
3. Place it in the `assets/audio/` folder
4. Update the `src` path in config.js

### Free Music Sources:
- [Pixabay Music](https://pixabay.com/music/) — search "Indian wedding" or "shehnai"
- [Free Music Archive](https://freemusicarchive.org)
- [YouTube Audio Library](https://studio.youtube.com/channel/UC/music) (requires YouTube account)

> **Note:** Keep the file size under 5MB for fast loading. The music plays only when the user clicks the music button.

---

## 9. Theme & Colors

```js
theme: {
  primaryColor: "#B22222",       // Main color (buttons, accents)
  primaryLight: "#D4453A",       // Lighter shade of primary
  secondaryColor: "#DAA520",     // Gold accents, decorations
  secondaryLight: "#F0D060",     // Lighter gold
  accentColor: "#8B0000",        // Deep accent (hero background)
  backgroundColor: "#FFF8F0",    // Page background
  textColor: "#3B1F0E",          // Main text color
  textLight: "#6B4226",          // Secondary text color
  fontEnglish: "'Cormorant Garamond', serif",
  fontBengali: "'Noto Serif Bengali', serif",
  fontBody: "'Lora', serif"
}
```

### Pre-made Color Themes:

**Classic Bengali (Default) — Red & Gold:**
```js
primaryColor: "#B22222",
secondaryColor: "#DAA520",
backgroundColor: "#FFF8F0"
```

**Royal Purple & Gold:**
```js
primaryColor: "#4A0E4E",
primaryLight: "#7B2D8E",
secondaryColor: "#C9A84C",
secondaryLight: "#E8D48B",
accentColor: "#2D0A30",
backgroundColor: "#FFF8F5",
textColor: "#2D0A30",
textLight: "#5C3D5E"
```

**Sage Green & Blush:**
```js
primaryColor: "#5F7161",
primaryLight: "#7D9B7F",
secondaryColor: "#D4A373",
secondaryLight: "#E8C9A0",
accentColor: "#3A4A3C",
backgroundColor: "#FEFAF6",
textColor: "#2C3E2D",
textLight: "#5F7161"
```

**Navy & Rose Gold:**
```js
primaryColor: "#1B2A4A",
primaryLight: "#2C4278",
secondaryColor: "#B76E79",
secondaryLight: "#D4A0A8",
accentColor: "#0F1A30",
backgroundColor: "#FBF8F5",
textColor: "#1B2A4A",
textLight: "#4A5568"
```

### How to Find Custom Colors:
- Use [Coolors.co](https://coolors.co) to generate color palettes
- Use [ColorHunt.co](https://colorhunt.co) for curated palettes
- Colors must be in **hex format** (e.g., `#B22222`)

---

## 10. Footer & Social Links

```js
footer: {
  messageEn: "With love and blessings",
  messageBn: "ভালোবাসা ও আশীর্বাদের সাথে",
  hashtag: "#AnanyaWedArjun",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/your-handle" },
    { platform: "facebook", url: "https://facebook.com/your-page" }
  ]
}
```

### Supported Platforms:
- `instagram`
- `facebook`
- `youtube`
- `twitter`

To remove social links entirely, set: `socialLinks: []`

---

## 11. Navigation

```js
nav: {
  items: [
    { labelEn: "Home", labelBn: "হোম", href: "#hero" },
    { labelEn: "Couple", labelBn: "আমরা", href: "#couple" },
    // ...
  ]
}
```

The `href` must match the section `id` in the HTML (prefixed with `#`). You can reorder or remove items as needed.

---

## 12. Adding Your Photos

### Required Photos:

| Photo | Path | Recommended Size |
|-------|------|-----------------|
| Bride | `assets/images/bride.jpg` | 400x500px (portrait) |
| Groom | `assets/images/groom.jpg` | 400x500px (portrait) |
| Hero Background | `assets/images/hero-bg.jpg` | 1920x1080px (landscape) |
| Gallery (6+) | `assets/images/gallery-1.jpg` etc. | 800x600px or larger |

### Photo Tips:
- Use `.jpg` for photos (smaller file size)
- Compress photos using [TinyPNG](https://tinypng.com) before uploading
- Keep each photo under **500KB** for fast loading
- Hero background should be a wide, atmospheric shot (couple silhouette, venue, etc.)
- Total image size should ideally be under **5MB** for the whole site

---

*This guide is part of the Winvite — Bengali Wedding Invitation Website project.*

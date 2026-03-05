# Deployment Guide — Winvite Wedding Invitation

How to deploy your wedding invitation website to GitHub Pages and keep it updated.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Deploy to GitHub Pages](#2-deploy-to-github-pages)
3. [Verify Your Deployment](#3-verify-your-deployment)
4. [Custom Domain Setup](#4-custom-domain-setup)
5. [Updating Your Site](#5-updating-your-site)
6. [QR Code for Invitation Cards](#6-qr-code-for-invitation-cards)
7. [Performance Tips](#7-performance-tips)
8. [Taking the Site Down](#8-taking-the-site-down)

---

## 1. Prerequisites

- A [GitHub account](https://github.com) (free) — see [SETUP.md](SETUP.md) for instructions
- Your customized wedding site files (see [CUSTOMIZATION.md](CUSTOMIZATION.md))
- A modern web browser (Chrome, Firefox, Edge, Safari)

---

## 2. Deploy to GitHub Pages

### Method 1: GitHub Web Interface (No Software Needed)

1. **Create a repository** on GitHub (Public, with README)
2. Go to your repository page
3. Click **"Add file"** > **"Upload files"**
4. Drag and drop ALL your project files:
   ```
   index.html
   config.js
   css/
   js/
   assets/
   ```
5. Write a commit message: `Initial wedding site upload`
6. Click **"Commit changes"**
7. Go to **Settings** > **Pages**
8. Set Source: `Deploy from a branch`
9. Set Branch: `main` / Folder: `/ (root)`
10. Click **Save**
11. Wait 1-3 minutes — your site is live!

### Method 2: GitHub Desktop

1. Install [GitHub Desktop](https://desktop.github.com)
2. Sign in with your GitHub account
3. Create a new repository or clone an existing one
4. Copy all wedding files into the repository folder
5. In GitHub Desktop:
   - Review the changes
   - Write commit message: `Add wedding invitation site`
   - Click **"Commit to main"**
   - Click **"Push origin"**
6. Enable GitHub Pages in repository Settings (same as Method 1, steps 7-10)

### Method 3: Git Command Line

```bash
# Option A: New repository
mkdir wedding && cd wedding
git init
# Copy all wedding files here
git add .
git commit -m "Initial wedding site"
git remote add origin https://github.com/USERNAME/wedding.git
git branch -M main
git push -u origin main

# Option B: Existing repository
git clone https://github.com/USERNAME/wedding.git
cd wedding
# Copy all wedding files here
git add .
git commit -m "Add wedding invitation site"
git push origin main
```

Then enable GitHub Pages in Settings > Pages.

---

## 3. Verify Your Deployment

### Check Deployment Status:
1. Go to your repository on GitHub
2. Click **"Actions"** tab
3. Look for a green checkmark next to the latest workflow run
4. If it shows a red X, click on it to see the error

### Access Your Site:
Your site URL follows this pattern:
```
https://USERNAME.github.io/REPO_NAME/
```

### Quick Checklist:
- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] Navigation links scroll to correct sections
- [ ] Countdown timer is counting down
- [ ] Music button works (plays/pauses)
- [ ] Gallery lightbox opens and closes
- [ ] RSVP form loads (if Google Form URL is set)
- [ ] Site looks good on mobile (test with phone or browser DevTools)
- [ ] Bengali text renders correctly

---

## 4. Custom Domain Setup

### Step 1: Purchase a Domain
Recommended registrars:
- [Namecheap](https://www.namecheap.com) — affordable, easy DNS management
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) — at-cost pricing
- [Google Domains](https://domains.google) — simple interface

### Step 2: Configure DNS Records

Add these DNS records at your registrar:

**A Records (for root domain):**
```
Type: A    Host: @    Value: 185.199.108.153
Type: A    Host: @    Value: 185.199.109.153
Type: A    Host: @    Value: 185.199.110.153
Type: A    Host: @    Value: 185.199.111.153
```

**CNAME Record (for www):**
```
Type: CNAME    Host: www    Value: USERNAME.github.io
```

### Step 3: Configure in GitHub
1. Repository **Settings** > **Pages**
2. Enter your custom domain in the **"Custom domain"** field
3. Click **Save**
4. Wait for DNS check to pass
5. Enable **"Enforce HTTPS"** checkbox

### Step 4: Verify
- DNS propagation takes 15 minutes to 48 hours
- Check status at [dnschecker.org](https://dnschecker.org)
- After propagation, both `yourdomain.com` and `www.yourdomain.com` should work

---

## 5. Updating Your Site

### Update Config (Names, Dates, Text):
1. Go to your repository on GitHub
2. Click `config.js`
3. Click the **pencil icon** to edit
4. Make changes
5. Click **"Commit changes"**
6. Site updates automatically in 1-2 minutes

### Update Photos:
1. Go to `assets/images/` in your repository
2. To replace: delete old file, upload new file with same name
3. To add: upload new files and update `config.js` gallery array
4. Commit changes

### Update Styles:
1. Edit files in `css/` folder
2. Commit changes
3. Site updates automatically

### Force Refresh:
If changes don't appear, try:
- **Hard refresh:** `Ctrl + Shift + R` (Windows) / `Cmd + Shift + R` (Mac)
- **Clear cache:** Browser Settings > Clear browsing data > Cached images and files

---

## 6. QR Code for Invitation Cards

Generate a QR code to print on physical invitation cards:

### Free QR Code Generators:
1. [QR Code Generator](https://www.qr-code-generator.com) — simple, free
2. [QRCode Monkey](https://www.qrcode-monkey.com) — customizable colors and logo

### Steps:
1. Copy your site URL: `https://username.github.io/wedding/`
2. Paste into any QR code generator
3. Customize colors to match your wedding theme (red & gold)
4. Download as PNG (300+ DPI for print)
5. Add to your physical invitation card design

### Recommended QR Code Size:
- Minimum: 2cm x 2cm (for scanning reliability)
- Recommended: 3cm x 3cm
- Include text below: "Scan to view our wedding invitation"

---

## 7. Performance Tips

### Optimize Images:
- Compress all images using [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
- Use `.webp` format for better compression (with `.jpg` fallback)
- Keep hero image under 300KB
- Keep gallery images under 200KB each

### Optimize Audio:
- Compress MP3 to 128kbps (sufficient quality for background music)
- Keep audio file under 3MB
- Use [Online Audio Converter](https://online-audio-converter.com) if needed

### Total Site Size:
- Target: under 5MB total for fast loading on mobile networks
- Check: Repository Settings > your repo size is shown on the main page

---

## 8. Taking the Site Down

After the wedding, you may want to take the site down:

### Option A: Disable GitHub Pages (Keeps Files)
1. Repository **Settings** > **Pages**
2. Under Source, select **"None"**
3. Click **Save**
4. The site goes offline but files remain in the repository

### Option B: Make Repository Private
1. Repository **Settings** > **General**
2. Scroll to **"Danger Zone"**
3. Click **"Change visibility"**
4. Select **"Private"**
5. This disables free GitHub Pages (requires GitHub Pro for private repo Pages)

### Option C: Delete Repository
1. Repository **Settings** > **General**
2. Scroll to **"Danger Zone"**
3. Click **"Delete this repository"**
4. Confirm by typing the repository name
5. **Warning:** This permanently deletes all files and cannot be undone

### Recommendation:
Keep the repository as a memory! Option A (disabling Pages) lets you keep the code while taking the site offline. You can always re-enable it later for anniversaries.

---

*This guide is part of the Winvite — Bengali Wedding Invitation Website project.*

# GitHub Pages Setup Guide — Winvite Wedding Invitation

A complete step-by-step guide to create a **free** GitHub account, set up your wedding invitation site, and make it live on the internet.

---

## Table of Contents

1. [Create a GitHub Account](#1-create-a-github-account)
2. [Create a New Repository](#2-create-a-new-repository)
3. [Upload Your Wedding Site Files](#3-upload-your-wedding-site-files)
4. [Enable GitHub Pages](#4-enable-github-pages)
5. [Access Your Live Site](#5-access-your-live-site)
6. [Set Up a Custom Domain (Optional)](#6-set-up-a-custom-domain-optional)
7. [Update Your Site Later](#7-update-your-site-later)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Create a GitHub Account

> If you already have a GitHub account, skip to [Step 2](#2-create-a-new-repository).

### Steps:

1. Go to **[https://github.com](https://github.com)**
2. Click the **"Sign up"** button (top right)
3. Enter the following details:
   - **Email address** — use your personal or client email
   - **Password** — choose a strong password
   - **Username** — choose something memorable (e.g., `ananya-arjun-wedding`)
     - This will be part of your site URL: `username.github.io`
     - Keep it clean and professional
4. Complete the **CAPTCHA verification**
5. Click **"Create account"**
6. GitHub will send a **verification email** — open your email and click the verification link
7. Choose the **Free plan** (no payment needed)
8. Skip any personalization questions (click "Skip this step")

### You're done! You now have a free GitHub account.

---

## 2. Create a New Repository

A "repository" (repo) is like a folder on GitHub that holds your website files.

### Steps:

1. After logging in, click the **"+"** icon in the top-right corner
2. Select **"New repository"**
3. Fill in the details:

   | Field | What to Enter |
   |-------|--------------|
   | **Repository name** | `wedding` (or `our-wedding`, `ananya-arjun-wedding`, etc.) |
   | **Description** | `Our Wedding Invitation Website` (optional) |
   | **Visibility** | Select **Public** (required for free GitHub Pages) |
   | **Initialize with README** | Check this box |

4. Click **"Create repository"**

### Important Notes:
- The repo **must be Public** for free GitHub Pages hosting
- The repo name will be part of your URL: `username.github.io/wedding`
- If you name the repo `username.github.io` (replacing `username` with your actual GitHub username), your site will be at `username.github.io` directly (without `/wedding`)

---

## 3. Upload Your Wedding Site Files

### Option A: Upload via GitHub Website (Easiest — No Software Needed)

1. Open your repository on GitHub
2. Click the **"Add file"** button (top of the file list)
3. Select **"Upload files"**
4. **Drag and drop** ALL the wedding site files and folders:
   ```
   index.html
   config.js
   css/ (entire folder)
   js/ (entire folder)
   assets/ (entire folder)
   ```
5. In the "Commit changes" section at the bottom:
   - Type a message like: `Upload wedding invitation site`
6. Click **"Commit changes"**

> **Folder Upload Tip:** GitHub's web upload supports folders. Simply drag the entire project folder contents into the upload area. All subfolders (css/, js/, assets/) will be preserved.

### Option B: Upload via GitHub Desktop (Better for Multiple Updates)

1. Download **GitHub Desktop** from [https://desktop.github.com](https://desktop.github.com)
2. Install and sign in with your GitHub account
3. Clone your repository:
   - Click **"Clone a repository from the Internet"**
   - Select your wedding repository
   - Choose where to save it on your computer
4. Copy all wedding site files into the cloned folder
5. In GitHub Desktop:
   - You'll see all the new files listed as "Changes"
   - Type a commit message: `Add wedding invitation site`
   - Click **"Commit to main"**
   - Click **"Push origin"** (uploads to GitHub)

### Option C: Upload via Git Command Line (For Developers)

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/wedding.git

# Navigate into the repository
cd wedding

# Copy all wedding site files into this folder
# Then add, commit, and push:
git add .
git commit -m "Add wedding invitation site"
git push origin main
```

---

## 4. Enable GitHub Pages

This is what makes your site live on the internet — for **free**!

### Steps:

1. Go to your repository on GitHub
2. Click **"Settings"** (gear icon in the top menu bar)
3. In the left sidebar, scroll down and click **"Pages"**
4. Under **"Build and deployment"**:

   | Setting | Select |
   |---------|--------|
   | **Source** | `Deploy from a branch` |
   | **Branch** | `main` |
   | **Folder** | `/ (root)` |

5. Click **"Save"**
6. Wait **1-3 minutes** for GitHub to build your site

### Verify Deployment:
- Go back to **Settings > Pages**
- You should see a green banner: **"Your site is live at https://username.github.io/wedding"**
- Click the link to view your wedding invitation!

---

## 5. Access Your Live Site

Your site is now live at:

```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**Examples:**
- Username: `ananya-arjun` / Repo: `wedding` → `https://ananya-arjun.github.io/wedding/`
- Username: `ananya-arjun` / Repo: `ananya-arjun.github.io` → `https://ananya-arjun.github.io/`

### Share With Guests:
- Copy the URL and share via **WhatsApp, email, or print on physical cards** as a QR code
- Use a **URL shortener** like [bit.ly](https://bit.ly) for a cleaner link
- Generate a **QR code** at [qr-code-generator.com](https://www.qr-code-generator.com) to print on physical invitation cards

---

## 6. Set Up a Custom Domain (Optional)

Want your site at `www.ananya-arjun-wedding.com` instead of `username.github.io`?

### Step 1: Buy a Domain
Purchase a domain from a registrar:
- [Namecheap](https://www.namecheap.com) (~$8-12/year)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Step 2: Configure DNS
In your domain registrar's DNS settings, add these records:

**For root domain (ananya-arjun-wedding.com):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For www subdomain:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_USERNAME.github.io |

### Step 3: Configure in GitHub
1. Go to **Settings > Pages** in your repository
2. Under **"Custom domain"**, enter your domain: `www.ananya-arjun-wedding.com`
3. Click **"Save"**
4. Check **"Enforce HTTPS"** (may take up to 24 hours to become available)

### Step 4: Wait for DNS
- DNS changes can take **15 minutes to 48 hours** to propagate
- Your site should be accessible at your custom domain after propagation

---

## 7. Update Your Site Later

### To change wedding details:

1. Go to your repository on GitHub
2. Click on `config.js`
3. Click the **pencil icon** (Edit this file)
4. Make your changes (names, dates, venue, photos, etc.)
5. Click **"Commit changes"**
6. Your site will automatically update within **1-2 minutes**

### To update photos:

1. Go to `assets/images/` in your repository
2. Click **"Add file" > "Upload files"**
3. Upload your new photos (use the same filenames to replace existing ones)
4. Commit the changes

### To replace music:

1. Go to `assets/audio/` in your repository
2. Upload your new audio file
3. Update the filename in `config.js` if it's different

---

## 8. Troubleshooting

### Site shows 404 error
- Make sure `index.html` is in the **root** of your repository (not inside a subfolder)
- Check **Settings > Pages** — ensure the branch is set to `main` and folder is `/ (root)`
- Wait 2-3 minutes after enabling Pages

### Site looks broken (no styles/images)
- Ensure all folders (`css/`, `js/`, `assets/`) are uploaded correctly
- Check that file paths in `index.html` match the actual file locations
- File names are **case-sensitive** — `Image.jpg` is different from `image.jpg`

### Google Form RSVP not loading
- Make sure you're using the **embed URL** (ends with `?embedded=true`)
- The form must be set to **"Anyone with the link"** can respond

### Music not playing
- Browsers require **user interaction** before playing audio — the music button handles this
- Make sure the audio file is uploaded to `assets/audio/`
- Supported formats: `.mp3`, `.ogg`, `.wav`

### Changes not showing up
- GitHub Pages can take **1-3 minutes** to update after a commit
- Try **hard refresh**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache if needed

### Custom domain not working
- DNS propagation can take up to **48 hours**
- Verify DNS records using [https://dnschecker.org](https://dnschecker.org)
- Make sure there's a `CNAME` file in your repository root (GitHub creates this automatically)

---

## Need Help?

- **GitHub Pages Documentation:** [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
- **GitHub Desktop Guide:** [https://docs.github.com/en/desktop](https://docs.github.com/en/desktop)
- **DNS Setup Help:** Contact your domain registrar's support

---

*This guide is part of the Winvite — Bengali Wedding Invitation Website project.*

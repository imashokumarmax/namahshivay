# NCR Dream Homes - Hostinger cPanel Deployment Guide

## 🚀 Deployment Package Contents

This package contains your production-ready website for deployment to Hostinger cPanel.

---

## 📦 What's Included

1. **build/** - Production React build (optimized, minified)
2. **.htaccess** - Apache configuration for React Router
3. **php/api-proxy.php** - Backend API proxy (if needed)
4. **README.md** - This file
5. **deployment-instructions.txt** - Step-by-step guide

---

## ⚠️ IMPORTANT: Hostinger Limitations

Your current app is **Full-Stack** (React + FastAPI + MongoDB + AI Agent).

**Hostinger cPanel typically supports:**
- ✅ Static HTML/CSS/JavaScript files
- ✅ PHP applications
- ⚠️ Limited Node.js (some plans only)
- ❌ No Python/FastAPI support
- ❌ No MongoDB support

---

## 🎯 Deployment Options

### **Option 1: Static Frontend Only** (Recommended for cPanel)

**What works:**
- ✅ All landing pages (Noida, Ghaziabad, etc.)
- ✅ Property display with mock data
- ✅ UI/UX, design, navigation
- ✅ SEO optimization

**What WON'T work:**
- ❌ Contact forms (no backend)
- ❌ AI property generation
- ❌ Admin panel functionality
- ❌ Database operations
- ❌ Real-time data

**Best for:** Brochure website, lead generation with phone/WhatsApp

---

### **Option 2: Hybrid Setup** (Best Solution!)

**Frontend on Hostinger + Backend on Emergent**

1. Upload static build to Hostinger cPanel
2. Keep backend running on Emergent (free)
3. Use CORS to connect them

**What works:**
- ✅ Everything! Full functionality
- ✅ Custom domain (ncr-dreamhomes.com)
- ✅ Contact forms work
- ✅ AI agent works
- ✅ Admin panel works
- ✅ Database operations

---

## 📋 Deployment Steps for Hostinger cPanel

### Step 1: Access cPanel
1. Login to Hostinger
2. Go to cPanel dashboard
3. Open **File Manager**

### Step 2: Navigate to public_html
1. Click on `public_html` folder
2. Delete all existing files (backup first!)
3. Or create subfolder for new site

### Step 3: Upload Build Files
1. Click **Upload** button
2. Upload the `build.zip` file from this package
3. Extract the ZIP file in public_html
4. Move all files from `build/` to root of `public_html/`

### Step 4: Upload .htaccess
1. Upload the `.htaccess` file to `public_html/`
2. This enables React Router to work properly

### Step 5: Test Your Site
1. Visit https://ncr-dreamhomes.com
2. Check all pages load correctly
3. Test navigation

---

## 🔧 Configuration Files Explained

### .htaccess (Already configured for you)
```apache
# React Router support
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 🌐 For Full Functionality (Hybrid Setup)

If you want contact forms, AI agent, and admin panel to work:

### Option A: Backend on Subdomain
1. Point `api.ncr-dreamhomes.com` to Emergent server
2. Update CORS in backend to allow `ncr-dreamhomes.com`
3. Frontend will call `api.ncr-dreamhomes.com`

### Option B: Backend on Different Port
1. If Hostinger supports Node.js apps (check your plan)
2. Deploy backend separately
3. Configure properly

### Option C: Keep Everything on Emergent
1. Point `ncr-dreamhomes.com` DNS to Emergent
2. Full functionality works
3. Easiest option!

---

## 📞 Contact Forms Alternative (Without Backend)

Since contact forms need backend, you can:

1. **Use Formspree** (free)
   - Add to contact form: `action="https://formspree.io/f/YOUR_ID"`
   
2. **Use Google Forms**
   - Embed Google Form

3. **Use WhatsApp Direct Link**
   - Already implemented: `https://wa.me/918287873037`

4. **Use Email Link**
   - `mailto:ncr.dreamhomes@gmail.com`

---

## 🔐 Security Notes

- ✅ HTTPS forced via .htaccess
- ✅ No sensitive data in frontend build
- ✅ All API keys remain on backend
- ✅ Environment variables not exposed

---

## 📊 File Structure After Upload

```
public_html/
├── index.html
├── .htaccess
├── manifest.json
├── robots.txt
├── static/
│   ├── css/
│   │   └── main.3b3756fc.css
│   └── js/
│       └── main.cd3796dd.js
└── asset-manifest.json
```

---

## 🆘 Troubleshooting

**Problem:** Pages show 404 error
**Solution:** Make sure `.htaccess` is uploaded and mod_rewrite is enabled

**Problem:** Styles not loading
**Solution:** Check file permissions (644 for files, 755 for folders)

**Problem:** Contact form doesn't work
**Solution:** This is expected. Use Option 2 (Hybrid) or form alternatives

**Problem:** Admin panel not working
**Solution:** Admin panel needs backend. Deploy on Emergent or use hybrid setup

---

## 📞 Support

**Website:** https://ncr-dreamhomes.com  
**Phone:** 8287873037  
**Email:** ncr.dreamhomes@gmail.com

---

## ✅ Quick Checklist

- [ ] Backup existing website
- [ ] Upload build files to public_html
- [ ] Upload .htaccess file
- [ ] Test main pages (/, /noida, /ghaziabad, etc.)
- [ ] Check mobile responsiveness
- [ ] Verify HTTPS is working
- [ ] Test WhatsApp contact button
- [ ] Submit sitemap to Google Search Console

---

**Deployment Date:** January 2026  
**Version:** 1.0.0  
**Built with:** React 19 + Tailwind CSS + Shadcn UI

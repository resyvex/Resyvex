# Resyvex Master Brand Website - Setup Guide

## 📋 Project Overview

The Resyvex Master Brand website is now complete with all HTML, CSS, and JavaScript files. This is a **static frontend** with form handling ready for Formspree integration.

### ✅ What's Built

**Pages (8 total):**
1. ✓ Home - Hero, trust metrics, divisions overview, testimonials
2. ✓ About - Company story, mission, vision, values, journey
3. ✓ Our Divisions - Institute vs Projects comparison
4. ✓ Franchise - Partnership opportunity with application form
5. ✓ Careers - Job opportunities with application form
6. ✓ Contact - Enquiry forms and callback requests
7. ✓ Privacy Policy - Data protection and privacy terms
8. ✓ Terms & Conditions - Website usage and legal terms

**Technical:**
- ✓ Professional CSS styling (variables, responsive, mobile-friendly)
- ✓ JavaScript for form handling and basic interactions
- ✓ Form placeholders ready for Formspree
- ✓ Consistent branding across all pages
- ✓ Footer with links and contact info
- ✓ Navigation menu on all pages

---

## 🔧 Next Steps: Formspree Integration

### Step 1: Create Formspree Account
1. Go to https://formspree.io
2. Sign up with your email
3. Add your email address to receive form submissions

### Step 2: Update Form Action URLs
All form files contain placeholder URLs. Replace `YOUR_FORM_ID` with your Formspree IDs:

**In franchise.html (line ~220):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
→ Change to:
```html
<form action="https://formspree.io/f/xxxx_your_franchise_form_id_xxxx" method="POST">
```

**In careers.html (line ~235):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
→ Repeat for careers form

**In contact.html (line ~115 for enquiry and line ~200 for callback):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
→ Create separate forms in Formspree for:
- General Enquiries
- Callback Requests

### Step 3: Get Your Form IDs from Formspree
1. In Formspree dashboard, click "Settings" on each form
2. Copy the endpoint URL: `https://formspree.io/f/xxxx_form_id_xxxx`
3. Paste the form ID into the HTML files

### Step 4: Test Forms
1. Open each page in your browser
2. Fill and submit a test form
3. Verify you receive the submission in your Formspree dashboard

---

## 🚀 Deployment: Vercel

### Step 1: Prepare for Vercel
Vercel automatically detects static websites. No special configuration needed!

### Step 2: Push to Git
```bash
# In your project folder
git init
git add .
git commit -m "Initial Resyvex website"
git remote add origin https://github.com/yourusername/resyvex-website.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up or log in
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Vercel automatically builds and deploys your static site

### Step 4: Custom Domain (Optional)
1. In Vercel dashboard, go to project settings
2. Add your custom domain (resyvex.com)
3. Point your DNS to Vercel nameservers

---

## 📝 Placeholders to Update

### Email Addresses
- `hello@resyvex.com` - General enquiries
- `franchise@resyvex.com` - Franchise inquiries
- `careers@resyvex.com` - Career applications

**Update in these files:**
- contact.html (phone numbers, email)
- franchise.html (phone, email)
- careers.html (phone, email)
- divisions.html (footer email)
- All footer sections

### Phone Numbers
- `+91 90000 00000` - Main line
- `+91 90000 00001` - Student support
- `+91 90000 00002` - Business inquiries

**Update in:** contact.html, franchise.html, careers.html, footer (all pages)

### Location/Address
- `[Your City]` - Replace with your actual city
- `[Your Address]` - Replace with actual address

**Update in:** contact.html (multiple places), footer (all pages)

### External Links
**Divisions page (lines ~130, ~200):**
- `<a href="#" class="btn btn-primary">Visit Resyvex Institute →</a>`
- `<a href="#" class="btn btn-secondary">Visit Resyvex Projects →</a>`

Replace `#` with actual URLs when sub-sites are ready:
- `https://institute.resyvex.com`
- `https://projects.resyvex.com`

---

## 🎨 Customization Guide

### Brand Colors
Edit in `css/style.css` (lines 8-22):
```css
:root {
    --primary-color: #1e3a8a;  /* Dark blue */
    --secondary-color: #0ea5e9;  /* Sky blue */
    --accent-color: #f97316;  /* Orange */
    ...
}
```

### Font Changes
Edit body font in `css/style.css` (line 25):
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Content Updates
Simply open each `.html` file and edit text directly. No build process needed!

---

## 📊 File Structure

```
Resyvex-Master-Website/
├── index.html              (Home page)
├── about.html              (About page)
├── divisions.html          (Our Divisions)
├── franchise.html          (Franchise with form)
├── careers.html            (Careers with form)
├── contact.html            (Contact with 2 forms)
├── privacy.html            (Privacy Policy)
├── terms.html              (Terms & Conditions)
├── css/
│   └── style.css          (All styling)
├── js/
│   └── script.js          (JavaScript interactions)
├── images/                (Add images here when needed)
└── README.md              (This file)
```

---

## ✨ Features Implemented

### Frontend
- Responsive design (mobile, tablet, desktop)
- Smooth scrolling
- Form validation ready
- Active navigation highlighting
- Professional color scheme
- Accessible HTML structure
- SEO-friendly meta tags

### Forms (Ready for Formspree)
- Franchise Application Form
- Career Application Form
- General Enquiry Form
- Callback Request Form

### Brand Identity
- Consistent messaging
- Trust-building tone
- Professional imagery (ready for placeholders)
- Clear value propositions
- Student & business-focused

---

## 🔐 Security & Best Practices

### Implemented
- No sensitive data stored client-side
- Form submissions via Formspree (secure third-party)
- HTTPS recommended for deployment
- Privacy Policy included
- Terms & Conditions included

### Before Going Live
- [ ] Replace all placeholder email addresses
- [ ] Replace all placeholder phone numbers
- [ ] Add real location and address
- [ ] Create Formspree accounts and update form IDs
- [ ] Set up domain DNS (if using custom domain)
- [ ] Test all forms before launch
- [ ] Review Privacy Policy for compliance
- [ ] Enable HTTPS (Vercel does this automatically)

---

## 📞 Contact Information

Once you're live, update these email addresses to receive submissions:

**Email Routing:**
- hello@resyvex.com → General Support
- franchise@resyvex.com → Franchise Team
- careers@resyvex.com → HR Team

Set up email forwarding in Formspree dashboard or your email service.

---

## 🚀 Launch Checklist

- [ ] All placeholder text updated
- [ ] Formspree integration complete
- [ ] Domain configured (if custom domain)
- [ ] Deployed to Vercel
- [ ] All links tested
- [ ] Forms tested and working
- [ ] Mobile responsiveness verified
- [ ] SEO settings configured
- [ ] Analytics setup (Google Analytics recommended)
- [ ] Email notifications configured

---

## 📌 Additional Resources

**Formspree Setup:**
- Docs: https://formspree.io/docs
- Form submission testing

**Vercel Deployment:**
- Docs: https://vercel.com/docs
- Automatic CI/CD with Git

**Next Steps for Content:**
1. Sanity CMS integration (for dynamic content)
2. Sub-site setup (Institute & Projects)
3. Analytics tracking
4. Email marketing integration

---

**Status:** Frontend complete ✓ | Waiting for: Formspree IDs, Domain, Vercel deployment

Created: April 2026
Ready for: Production launch
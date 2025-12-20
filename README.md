# AVL Website - Autonomous Vehicle Laboratory

A modern, responsive static website for the Autonomous Vehicle Laboratory at Cal Poly Pomona.

## Project Structure

```
avl-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── data.js         # EDIT THIS FILE to update content
│   └── main.js         # JavaScript functionality
└── images/             # Logo and image assets
```

---

## HOW TO UPDATE CONTENT

### Updating Team Members

1. Open `js/data.js`
2. Find the `TEAM_MEMBERS` section
3. Add, remove, or modify team members:

```javascript
// To add a new researcher:
researchers: [
    {
        name: "John Doe",
        role: "Software Engineer",
        image: "images/team/john.jpg",  // or "placeholder" for auto-avatar
        bio: "Working on path planning algorithms.",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        email: "john@example.com"
    },
    // ... more team members
]
```

### Adding Team Photos

1. Create a `images/team/` folder
2. Add photos (recommended: square, 400x400px)
3. Update the `image` field in `data.js` to point to the photo

### Updating Research Areas

Find `RESEARCH_AREAS` in `data.js`:

```javascript
const RESEARCH_AREAS = [
    {
        title: "New Research Area",
        icon: "🔬",  // Any emoji
        description: "Description of the research...",
        projects: ["Project 1", "Project 2", "Project 3"]
    },
    // ...
];
```

### Updating Job Openings

Find `HIRING_INFO` in `data.js`:

```javascript
const HIRING_INFO = {
    isHiring: true,  // Set to false to hide the entire section
    positions: [
        {
            title: "Position Title",
            type: "Research Position",  // or "Club Member"
            description: "What the role involves...",
            requirements: ["Requirement 1", "Requirement 2"],
            applyLink: "https://forms.google.com/your-form"
        }
    ]
};
```

### Updating Contact Info

Find `SITE_INFO` in `data.js`:

```javascript
const SITE_INFO = {
    contact: {
        email: "avl@cpp.edu",
        location: "Building XX, Room XXX, Cal Poly Pomona",
        discord: "https://discord.gg/your-invite",
        instagram: "https://instagram.com/avl_cpp",
        github: "https://github.com/avl-cpp"
    }
};
```

---

## 🚀 FREE HOSTING OPTIONS

### Option 1: GitHub Pages (Recommended - avlteam.github.io)

1. **Create a GitHub account** at github.com (free)

2. **Create a new repository**
   - Name it `avlteam.github.io` (this becomes your URL!)
   - Or name it anything and use the `gh-pages` branch

3. **Upload your files**
   - Drag and drop all files from the `avl-website` folder
   - Or use git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/avlteam.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`)
   - Click Save

5. **Your site will be live at:** `https://avlteam.github.io`

### Option 2: Netlify (Easy drag-and-drop)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Drag and drop your `avl-website` folder
3. Get a free URL like `avl-team.netlify.app`
4. Optional: Connect a custom domain

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Import from GitHub or drag-and-drop
3. Get a free URL like `avl-team.vercel.app`

### Option 4: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Free hosting with excellent performance

---

## CUSTOM DOMAIN (www.AVLTeam.com)

To use a custom domain like `www.avlteam.com`:

1. **Purchase the domain** (~$10-15/year)
   - Namecheap: [namecheap.com](https://namecheap.com)
   - Google Domains: [domains.google](https://domains.google)
   - Cloudflare: [cloudflare.com/products/registrar](https://cloudflare.com/products/registrar)

2. **Configure DNS** (example for GitHub Pages):
   - Add a CNAME record: `www` → `avlteam.github.io`
   - Add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Add CNAME file** to your repository:
   - Create a file named `CNAME` (no extension)
   - Contents: `www.avlteam.com`

4. **Enable HTTPS** in GitHub Pages settings

---

## CUSTOMIZATION

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --avl-deep-blue: #1a0dab;     /* Primary brand color */
    --avl-cyber-blue: #0066ff;    /* Secondary blue */
    --avl-accent-cyan: #00d4ff;   /* Accent color */
    --avl-dark: #0a0520;          /* Dark background */
    --avl-darker: #050210;        /* Darker background */
}
```

### Changing Fonts

The site uses Google Fonts. To change:

1. Visit [fonts.google.com](https://fonts.google.com)
2. Select fonts and copy the embed link
3. Replace the font link in `index.html`
4. Update font variables in `css/styles.css`

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add styling in `css/styles.css`
3. If dynamic content, add data in `data.js` and rendering in `main.js`

---

## 📝 MAKING IT SEARCHABLE ON GOOGLE

1. **Submit to Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your site
   - Verify ownership
   - Submit your sitemap

2. **Create a sitemap.xml** (add to root folder):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
           <loc>https://www.avlteam.com/</loc>
           <lastmod>2024-12-19</lastmod>
           <priority>1.0</priority>
       </url>
   </urlset>
   ```

3. **Create robots.txt** (add to root folder):
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.avlteam.com/sitemap.xml
   ```

---

## TROUBLESHOOTING

**Images not loading?**
- Check file paths are correct
- Ensure filenames match exactly (case-sensitive)

**Content not updating?**
- Clear browser cache (Ctrl+Shift+R)
- Check for JavaScript errors in browser console (F12)

**Mobile menu not working?**
- Ensure `main.js` is loaded after `data.js`

---

## SUPPORT

For questions or issues, check:
- GitHub Pages docs: [docs.github.com/pages](https://docs.github.com/pages)
- Netlify docs: [docs.netlify.com](https://docs.netlify.com)

---

Built with for AVL at Cal Poly Pomona... and ryan

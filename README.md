# AVL Website - Autonomous Vehicle Laboratory

A modern, responsive website for the Autonomous Vehicle Laboratory at Cal Poly Pomona.

**Live Site:** [https://autovehiclelab.com/](https://autovehiclelab.com/)

**Official CPP Page:** [Cal Poly Pomona AVL Team](https://www.cpp.edu/engineering/autonomous-systems/avl-team.shtml)

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Quick Start](#quick-start)
3. [Editing Content (data.js)](#editing-content-datajs)
   - [Team Members](#team-members)
   - [Research Areas](#research-areas)
   - [Impact Stats & Achievements](#impact-stats--achievements)
   - [Hiring / Job Postings](#hiring--job-postings)
   - [Learning Resources & Lecture Series](#learning-resources--lecture-series)
   - [Hardware & Equipment](#hardware--equipment)
   - [Sponsors & Partners](#sponsors--partners)
   - [Media Content](#media-content)
   - [Site Information](#site-information)
4. [Editing Images](#editing-images)
   - [Gallery Photos](#gallery-photos)
   - [Team Photos](#team-photos)
   - [Logo & Brand Assets](#logo--brand-assets)
   - [Sponsor Logos](#sponsor-logos)
5. [Editing Styles (styles.css)](#editing-styles-stylescss)
   - [Brand Colors](#brand-colors)
   - [Fonts](#fonts)
   - [Spacing & Layout](#spacing--layout)
6. [Editing Page Structure (index.html)](#editing-page-structure-indexhtml)
7. [Editing Functionality (main.js)](#editing-functionality-mainjs)
8. [Deployment](#deployment)
9. [SEO & Social Media](#seo--social-media)
10. [Troubleshooting](#troubleshooting)
11. [Quick Reference](#quick-reference)
12. [Contact](#contact)

---

## Project Structure

```
avl-website/
├── index.html              # Main HTML page structure
├── CNAME                   # Custom domain configuration
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # Site map for SEO
├── README.md               # This documentation file
│
├── css/
│   └── styles.css          # All styling (2300+ lines)
│
├── js/
│   ├── data.js             # ⭐ CONTENT DATA - Edit this for most changes
│   └── main.js             # JavaScript functionality (advanced)
│
├── images/
│   ├── gallery/            # Photo slideshow images
│   │   ├── vehicles-team.jpg
│   │   ├── team-presentation.jpg
│   │   ├── kellogg-presentation.jpg
│   │   └── team-photo.jpg
│   │
│   ├── team/               # Team member headshots
│   │   ├── AVL_Dr_Bahr.jpg
│   │   ├── AVL_Aspen_Knox.jpg
│   │   ├── AVL_Ryan_Simpson.jpg
│   │   └── ... (more team photos)
│   │
│   ├── sponsors/           # Partner/sponsor logos
│   │   └── AVL_RoboDK_Logo.png
│   │
│   ├── instagram/          # Instagram section images
│   │   └── AVL_Instagram_Post1.JPG
│   │
│   └── (brand assets)      # Logo variants
│       ├── AVL_Text_No_Background_400px-115px.png   # Navbar logo
│       ├── AVL_Text_No_Background_800px-250px.png   # Hero logo
│       ├── AVL_Logo_Blue_Dots.png                   # Favicon
│       ├── AVL_Blue_Text_1200px-630px.jpg           # Social media preview
│       └── AVL_Video_Poster.png                     # Video thumbnail
│
└── videos/
    └── AVL_Video_9-10-25.mp4   # Featured video
```

---

## Quick Start

### Making Simple Content Changes

1. **Open `js/data.js`** - This contains all editable content
2. **Find the section** you want to edit (use Ctrl+F to search)
3. **Edit the text** between the quotes `"like this"`
4. **Save the file** and refresh your browser

### Testing Locally

1. Download the repository as a ZIP
2. Extract and open `index.html` in any browser
3. Make your changes
4. Refresh the browser to see updates

### Deploying Changes

1. Commit your changes to GitHub
2. GitHub Pages will automatically deploy within 1-2 minutes
3. Hard refresh (`Ctrl+Shift+R`) to see changes on the live site

---

## Editing Content (data.js)

**Location:** `js/data.js`

This is the primary file for content changes. It contains all text, team members, research areas, and more.

---

### Team Members

**Section:** `TEAM_MEMBERS` (~line 30)

The team is organized into three categories:
- `leadership` - Executive board and officers
- `researchers` - Research assistants and lab hires  
- `members` - General club members and legacy members

```javascript
const TEAM_MEMBERS = {
    leadership: [
        {
            name: "Full Name",                    // Required
            role: "Title - Department",           // Required
            image: "images/team/photo.jpg",       // Or "placeholder" for auto-generated avatar
            bio: "Short description of role.",    // 1-2 sentences
            linkedin: "https://linkedin.com/in/username",  // Optional - use "" if none
            github: "https://github.com/username",         // Optional - use "" if none
            email: "email@cpp.edu"                         // Optional - use "" if none
        },
        // More members...
    ],
    
    researchers: [
        // Same format as above
    ],
    
    members: [
        // Same format as above
    ]
};
```

**To add a new member:**
1. Copy an existing member block (from `{` to `},`)
2. Paste it in the appropriate category
3. Update all fields
4. Add team photo to `images/team/` folder

**To remove a member:**
Delete the entire block from `{` to `},` including the trailing comma

**Placeholder avatars:**
If `image: "placeholder"`, the site auto-generates an avatar using the member's initials.

---

### Research Areas

**Section:** `RESEARCH_AREAS` (~line 200)

```javascript
const RESEARCH_AREAS = [
    {
        title: "Research Area Name",
        icon: "🔬",                              // Any emoji
        description: "Detailed description of the research...",
        projects: ["Project 1", "Project 2", "Project 3"],
        docLink: "https://example.com/docs"     // Click opens this link (use "" for no link)
    },
];
```

**Clickable cards:** Add a URL to `docLink` to make the card clickable.

---

### Impact Stats & Achievements

**Section:** `IMPACT_STATS` and `ACHIEVEMENTS` (~line 340)

```javascript
const IMPACT_STATS = [
    { number: "5+", label: "Active Research Papers" },
    { number: "4", label: "Autonomous Vehicle Platforms" },
    { number: "5+", label: "Active Projects" },
    { number: "15+", label: "Lab Members" }
];

const ACHIEVEMENTS = [
    {
        title: "Achievement Title",
        description: "What was accomplished and its significance.",
        year: "2024",
        docLink: ""    // Optional link to paper or documentation
    },
];
```

**Animated counters:** Numbers with `+` suffix animate when scrolled into view.

---

### Hiring / Job Postings

**Section:** `HIRING_INFO` (~line 308)

```javascript
const HIRING_INFO = {
    isHiring: true,     // Set to false to hide entire section
    description: "Join our team and work on cutting-edge autonomous vehicle technology!",
    positions: [
        {
            title: "Position Title",
            type: "Research Position",           // Or "Club Member"
            description: "What the role involves...",
            requirements: ["Requirement 1", "Requirement 2", "Requirement 3"],
            applyLink: "https://forms.google.com/..."  // Apply button URL
        },
    ]
};
```

**To hide hiring section:** Change `isHiring: true` to `isHiring: false`

---

### Learning Resources & Lecture Series

**Section:** `LEARNING_RESOURCES` (~line 376)

This section includes the official CPP Lecture Series with video modules.

```javascript
const LEARNING_RESOURCES = [
    {
        title: "Vehicle Dynamics",
        type: "Lecture Series",                  // Or "Hands-on Lab", "Workshop Series", "Technical Deep-Dive"
        description: "Comprehensive vehicle dynamics covering...",
        level: "Intermediate",                   // "Beginner", "Intermediate", or "Advanced"
        docLink: "https://www.cpp.edu/engineering/autonomous-systems/activities.shtml",
        modules: [
            { title: "Module 1 – Introduction", url: "https://streaming.cpp.edu/..." },
            { title: "Module 2 – Quarter Car Model", url: "https://streaming.cpp.edu/..." },
            // More modules...
        ]
    },
];
```

**Current Lecture Series:**

| Series | Modules | Level |
|--------|---------|-------|
| Vehicle Dynamics | 12 modules | Intermediate |
| Electric Vehicle & Energy Storage | 12 modules | Intermediate |
| Practical Application of Electric Motors | 8 modules | Intermediate |
| Computer Vision and Image Processing | 29 modules | Advanced |

**Adding modules:** Copy the format `{ title: "Module X – Name", url: "https://..." }` and add to the modules array.

**Empty URLs:** Use `url: ""` for modules not yet available - they'll display but won't be clickable.

---

### Hardware & Equipment

**Section:** `EQUIPMENT` (~line 543)

```javascript
const EQUIPMENT = [
    { 
        name: "Velodyne VLP-16 LiDAR", 
        description: "360° 3D scanning", 
        docLink: "https://ouster.com/products/hardware/vlp-16" 
    },
    // More equipment...
];
```

---

### Sponsors & Partners

**Section:** `SPONSORS` (~line 558)

```javascript
const SPONSORS = [
    {
        name: "RoboDK",
        type: "industry",                        // "industry", "university", "organization", "faculty"
        logo: "images/sponsors/AVL_RoboDK_Logo.png",
        url: "https://robodk.com/",
        description: "Simulation and offline programming software"
    },
];
```

**Adding sponsors:**
1. Add logo image to `images/sponsors/` folder
2. Add entry to SPONSORS array
3. Logo displays at 280px width - use transparent PNG for best results

---

### Media Content

**Section:** `MEDIA_CONTENT` (~line 582)

```javascript
const MEDIA_CONTENT = {
    // YouTube embed (use video ID from URL)
    featuredVideoId: "",                         // e.g., "dQw4w9WgXcQ"
    
    // Or direct video file
    featuredVideoUrl: "videos/AVL_Video_9-10-25.mp4",
    
    // Video metadata
    videoTitle: "AVL Autonomous Driving Demo",
    videoDescription: "Watch our autonomous vehicles navigate campus roads",
    
    // Instagram
    instagramHandle: "autovehiclelab",
    instagramUrl: "https://www.instagram.com/autovehiclelab/"
};
```

**YouTube vs Direct Video:**
- If `featuredVideoId` has a value, it takes priority
- Otherwise, `featuredVideoUrl` is used
- Leave `featuredVideoId: ""` to use a local video file

---

### Site Information

**Section:** `SITE_INFO` (~line 512)

```javascript
const SITE_INFO = {
    labName: "Autonomous Vehicle Laboratory",
    shortName: "AVL",
    university: "Cal Poly Pomona",
    tagline: "Advancing autonomous vehicle research through hands-on innovation",
    
    about: {
        mission: "The Autonomous Vehicle Laboratory...",
        vision: "We envision a future...",
        approach: "True to Cal Poly Pomona's 'Learn by Doing' philosophy..."
    },
    
    contact: {
        email: "autovehiclelab@gmail.com",
        location: "Building 9, Room 101, Cal Poly Pomona",
        discord: "https://discord.gg/2D5fEg94eM",
        instagram: "https://www.instagram.com/autovehiclelab/",
        github: "https://github.com/Cal-Poly-Pomona-Autonomous-Vehicle-Lab"
    }
};
```

---

## Editing Images

### Gallery Photos

**Location:** `images/gallery/`

Current slideshow images (in display order):
1. `vehicles-team.jpg` - Team with AVL-001 and AVL-002
2. `team-presentation.jpg` - SCAIR presentation
3. `kellogg-presentation.jpg` - Kellogg House event
4. `team-photo.jpg` - Group photo

**Replacing a photo:**
1. Name your new image the SAME as the one being replaced
2. Upload to `images/gallery/`, overwriting the old file
3. Recommended: 1200x800px landscape, under 500KB

**Adding more photos to slideshow:**

1. Add image to `images/gallery/`
2. In `index.html`, find the gallery section (~line 215)
3. Add a new slide:
```html
<div class="slide">
    <img src="images/gallery/new-photo.jpg" alt="Description" loading="lazy">
    <div class="slide-caption">Caption text here</div>
</div>
```
4. Add a navigation dot:
```html
<span class="dot" onclick="goToSlide(4)"></span>  <!-- Index starts at 0 -->
```

---

### Team Photos

**Location:** `images/team/`

**Specifications:**
- Format: JPG or PNG
- Size: 400x400px square recommended
- Naming: `AVL_FirstName_LastName.jpg`

**Adding a photo:**
1. Add image to `images/team/`
2. In `data.js`, update the member's `image` field:
```javascript
image: "images/team/AVL_John_Doe.jpg"
```

---

### Logo & Brand Assets

**Location:** `images/`

| File | Size | Usage |
|------|------|-------|
| `AVL_Text_No_Background_400px-115px.png` | 400x115 | Navbar, footer |
| `AVL_Text_No_Background_800px-250px.png` | 800x250 | Hero section |
| `AVL_Logo_Blue_Dots.png` | 64x64+ | Browser favicon |
| `AVL_Blue_Text_1200px-630px.jpg` | 1200x630 | Social media preview |
| `AVL_Video_Poster.png` | 1920x1080 | Video thumbnail |

---

### Sponsor Logos

**Location:** `images/sponsors/`

**Specifications:**
- Format: PNG with transparent background
- Width: 280px minimum (displays at 280px)
- Height: 120px or less

---

## Editing Styles (styles.css)

**Location:** `css/styles.css`

### Brand Colors

Find the `:root` section at the top (~line 7):

```css
:root {
    /* Primary Colors */
    --avl-deep-blue: #1a0dab;      /* Main brand blue */
    --avl-cyber-blue: #0066ff;     /* Secondary blue */
    --avl-accent-cyan: #00d4ff;    /* Accent/highlight */
    
    /* Background Colors */
    --avl-dark: #0a0520;           /* Section backgrounds */
    --avl-darker: #050210;         /* Darker backgrounds */
    
    /* Text Colors */
    --white: #ffffff;
    --light-gray: #a8b2c1;
}
```

Use a [color picker](https://htmlcolorcodes.com/color-picker/) to find hex codes.

---

### Fonts

Three fonts are used:

| Variable | Font | Usage |
|----------|------|-------|
| `--font-display` | Orbitron | Large titles, hero text |
| `--font-heading` | Rajdhani | Section headers, cards |
| `--font-body` | Inter | Body text, paragraphs |

**Changing fonts:**
1. Go to [Google Fonts](https://fonts.google.com)
2. Select new fonts and copy the embed link
3. Replace the link in `index.html` (~line 24)
4. Update the CSS variables in `:root`

---

### Spacing & Layout

Key spacing variables:

```css
:root {
    --section-padding: clamp(4rem, 10vw, 8rem);  /* Vertical section spacing */
    --container-max: 1400px;                      /* Maximum content width */
}
```

---

## Editing Page Structure (index.html)

**Location:** `index.html`

### Section Map

| Lines | Section ID | Description |
|-------|-----------|-------------|
| 33-79 | - | Navigation bar |
| 84-130 | `#home` | Hero section |
| 132-195 | `#about` | About the lab |
| 197-215 | `#equipment` | Hardware equipment |
| 217-260 | `#gallery` | Photo slideshow |
| 262-295 | `#impact` | Impact stats & achievements |
| 297-315 | `#team` | Team members |
| 317-340 | `#research` | Research areas |
| 342-380 | `#hiring` | Job postings |
| 382-410 | `#learn` | Learning resources |
| 412-430 | `#media` | Video & Instagram |
| 432-445 | `#sponsors` | Partners section |
| 447-455 | `#gratitude` | Gratitude section |
| 460-555 | - | Footer |

### Navigation Links

```html
<ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <!-- href matches the section's id attribute -->
</ul>
```

---

## Editing Functionality (main.js)

**Location:** `js/main.js`

⚠️ **Only edit if you know JavaScript!**

### Key Functions

| Function | Purpose |
|----------|---------|
| `initNavigation()` | Scroll effects, mobile menu |
| `renderTeamSection()` | Builds team cards from data |
| `renderResearchSection()` | Builds research cards |
| `renderImpactSection()` | Builds stats and achievements |
| `renderLearnSection()` | Builds lecture modules |
| `renderSponsorsSection()` | Builds sponsor cards |
| `initSlideshow()` | Gallery auto-rotation |
| `initAnimatedCounters()` | Number animations |

### Slideshow Speed

Find `initSlideshow()` (~line 460):

```javascript
slideInterval = setInterval(() => {
    changeSlide(1);
}, 5000);  // Milliseconds between slides (5000 = 5 seconds)
```

---

## Deployment

### GitHub Pages (Current Setup)

The site automatically deploys when changes are pushed to the `main` branch.

1. Make changes locally
2. Commit: `git add . && git commit -m "Description"`
3. Push: `git push origin main`
4. Wait 1-2 minutes for deployment
5. Hard refresh (`Ctrl+Shift+R`) to see changes

### Custom Domain

The `CNAME` file contains: `autovehiclelab.com`

DNS is configured to point to GitHub Pages servers.

---

## SEO & Social Media

### Meta Tags (index.html)

```html
<meta name="description" content="Autonomous Vehicle Laboratory at Cal Poly Pomona...">
<meta name="keywords" content="autonomous vehicles, self-driving cars, LiDAR...">

<!-- Social Media Preview -->
<meta property="og:title" content="Autonomous Vehicle Laboratory | Cal Poly Pomona">
<meta property="og:description" content="Advancing autonomous vehicle research...">
<meta property="og:image" content="images/AVL_Blue_Text_1200px-630px.jpg">
```

### robots.txt

Allows all search engines to crawl the site.

### sitemap.xml

Lists all pages for search engine indexing.

---

## Troubleshooting

### Sections Not Rendering (Empty Team/Research/etc.)

**Cause:** JavaScript files not loading or syntax error in data.js

**Fix:**
1. Open browser Developer Tools (F12)
2. Check Console tab for errors
3. Verify `index.html` ends with:
```html
    <script src="js/data.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

### Changes Not Appearing

1. **Hard refresh:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear cache:** Browser settings → Clear browsing data
3. **Check deployment:** GitHub Actions tab for build status

### Images Not Loading

1. Check file path matches exactly (case-sensitive)
2. Verify file exists in correct folder
3. Check file extension matches (.jpg vs .JPG)

### Broken Layout

1. Check for missing closing tags in HTML
2. Validate CSS syntax (missing semicolons, braces)
3. Check browser console for errors

### Email Links Show "[email protected]"

**Cause:** Cloudflare email obfuscation

**Fix:** Replace obfuscated links with proper mailto:
```html
<a href="mailto:autovehiclelab@gmail.com">autovehiclelab@gmail.com</a>
```

### Slideshow Not Working

1. Verify all images exist in `images/gallery/`
2. Check that `main.js` is loaded
3. Ensure slide count matches dot count

---

## Quick Reference

| Task | File | Section/Location |
|------|------|------------------|
| Add team member | `js/data.js` | `TEAM_MEMBERS` |
| Add research area | `js/data.js` | `RESEARCH_AREAS` |
| Update stats | `js/data.js` | `IMPACT_STATS` |
| Add job posting | `js/data.js` | `HIRING_INFO` |
| Add lecture module | `js/data.js` | `LEARNING_RESOURCES` |
| Add sponsor | `js/data.js` | `SPONSORS` |
| Change contact info | `js/data.js` | `SITE_INFO.contact` |
| Add gallery photo | `images/gallery/` + `index.html` |
| Add team photo | `images/team/` + `js/data.js` |
| Change colors | `css/styles.css` | `:root` variables |
| Change fonts | `css/styles.css` + `index.html` |
| Edit navigation | `index.html` | `.nav-links` |
| Edit hero text | `index.html` | `.hero` section |
| Edit footer | `index.html` | `.footer` section |
| Change slideshow speed | `js/main.js` | `initSlideshow()` |

---

## Tips & Best Practices

1. **Always backup** - Download repo as ZIP before major changes
2. **Test locally** - Open `index.html` in browser before pushing
3. **Keep images small** - Under 500KB for fast loading
4. **Use descriptive commits** - "Added new team member John Doe"
5. **Check mobile** - Test responsive design on phone/tablet
6. **Validate JSON** - Ensure proper commas in data.js arrays

---

## Contact

**Website Issues:** Ryan Simpson - [rmsimpson@cpp.edu](mailto:rmsimpson@cpp.edu) or [1143RMS@gmail.com](mailto:1143RMS@gmail.com)

**Lab General:** [autovehiclelab@gmail.com](mailto:autovehiclelab@gmail.com)

**Discord:** [https://discord.gg/2D5fEg94eM](https://discord.gg/2D5fEg94eM)

---

*Last updated: January 2025*

*Built with 💙 by the AVL Team*

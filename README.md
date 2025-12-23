# AVL Website - Autonomous Vehicle Laboratory

A modern, responsive website for the Autonomous Vehicle Laboratory at Cal Poly Pomona.

**Live Site:** https://ryan-simpson.github.io/avlteam.github.io/

---

## 📁 Project Structure

```
avl-website/
├── index.html          # Main page structure (sections, navigation, footer)
├── css/
│   └── styles.css      # All styling (colors, fonts, layouts, animations)
├── js/
│   ├── data.js         # ⭐ EASIEST TO EDIT - All content lives here
│   └── main.js         # JavaScript functionality (don't edit unless you know JS)
└── images/
    ├── gallery/        # Photo slideshow images
    └── ...             # Logo and brand assets
```

---

## ✏️ EDITING CONTENT (data.js)

**Location:** `js/data.js`

This is the easiest file to edit. All team members, research areas, job postings, and other content is stored here. Just edit the text between the quotes.

### Adding/Removing Team Members

Find the `TEAM_MEMBERS` section (~line 30):

```javascript
const TEAM_MEMBERS = {
    leadership: [
        {
            name: "Person's Name",           // Their full name
            role: "Their Title",             // e.g., "Club President"
            image: "placeholder",            // Use "placeholder" or path like "images/team/photo.jpg"
            bio: "Short description.",       // 1-2 sentences about them
            linkedin: "https://linkedin.com/in/username",  // Leave "" if none
            github: "https://github.com/username",         // Leave "" if none
            email: "email@cpp.edu"           // Leave "" if none
        },
        // Add more people by copying the block above
    ],
    
    researchers: [
        // Same format as above
    ],
    
    members: [
        // Legacy members - same format
    ]
};
```

**To add someone:** Copy an existing block (including the curly braces `{}`) and paste it after a comma.

**To remove someone:** Delete their entire block from `{` to `}` including the comma before or after.

---

### Adding/Editing Research Areas

Find the `RESEARCH_AREAS` section (~line 158):

```javascript
const RESEARCH_AREAS = [
    {
        title: "Research Area Name",
        icon: "🔴",                          // Any emoji
        description: "What this research involves...",
        projects: ["Project 1", "Project 2", "Project 3"],
        docLink: "https://docs.google.com/..."  // Link opened when card is clicked (leave "" for no link)
    },
    // Add more research areas here
];
```

**To make a research card clickable:** Add a URL to the `docLink` field. When someone clicks the card, it opens that link.

---

### Editing Job Postings / Hiring Section

Find the `HIRING_INFO` section (~line 210):

```javascript
const HIRING_INFO = {
    isHiring: true,      // Set to false to hide the entire hiring section
    positions: [
        {
            title: "Position Title",
            type: "Research Position",       // or "Club Member"
            description: "What the role involves...",
            requirements: ["Requirement 1", "Requirement 2", "Requirement 3"],
            applyLink: "https://forms.google.com/..."  // Link for Apply button
        },
    ]
};
```

**To hide hiring section entirely:** Change `isHiring: true` to `isHiring: false`

---

### Editing Impact Stats & Achievements

Find `IMPACT_STATS` (~line 244):

```javascript
const IMPACT_STATS = [
    { number: "300K+", label: "Points Processed Per Second" },
    { number: "15+", label: "FPS LiDAR Visualization" },
    // Add or edit stats here
];

const ACHIEVEMENTS = [
    {
        title: "Achievement Title",
        description: "What was accomplished",
        year: "2024"
    },
];
```

---

### Editing Workshops / Learn Section

Find `LEARNING_RESOURCES` (~line 275):

```javascript
const LEARNING_RESOURCES = [
    {
        title: "Workshop Name",
        type: "Workshop Series",             // or "Hands-on Lab", "Technical Deep-Dive"
        description: "What participants learn...",
        level: "Beginner"                    // "Beginner", "Intermediate", or "Advanced"
    },
];
```

---

### Editing Contact Info & Social Links

Find `SITE_INFO` (~line 313):

```javascript
const SITE_INFO = {
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

## 🖼️ EDITING IMAGES

### Replacing Gallery Photos

**Location:** `images/gallery/`

The slideshow displays these 4 images in order:
1. `vehicles-team.jpg` - Team with autonomous vehicles
2. `team-presentation.jpg` - Presentation at showcase
3. `kellogg-presentation.jpg` - Kellogg House presentation  
4. `team-photo.jpg` - Team group photo

**To replace a photo:**
1. Name your new image the SAME as the one you're replacing (e.g., `team-photo.jpg`)
2. Upload it to `images/gallery/`, overwriting the old one
3. For best results, use landscape images around 1200x800 pixels

**To add MORE photos to slideshow:**
1. Add the image to `images/gallery/`
2. Edit `index.html` and find the gallery section (~line 215)
3. Copy an existing slide block and update the image path and caption:
```html
<div class="slide">
    <img src="images/gallery/your-new-image.jpg" alt="Description" loading="lazy">
    <div class="slide-caption">Your caption here</div>
</div>
```
4. Add another dot in the dots section:
```html
<span class="dot" onclick="goToSlide(4)"></span>  <!-- Number = position starting from 0 -->
```

---

### Replacing Logo Images

**Location:** `images/`

| File | Where It's Used |
|------|-----------------|
| `AVL_Text_No_Background.PNG` | Navbar logo, hero section, footer |
| `AVL_Logo_Blue_Dots.PNG` | Browser tab favicon |
| `AVL_Blue_Text.jpg` | Social media preview (when shared) |

**To replace:** Upload new image with the SAME filename to overwrite.

---

### Adding Team Member Photos

1. Create a folder: `images/team/` (if it doesn't exist)
2. Add headshot photos (recommended: square, 400x400 pixels)
3. In `data.js`, update the member's `image` field:
```javascript
{
    name: "Person Name",
    image: "images/team/person-name.jpg",  // Instead of "placeholder"
    // ...
}
```

---

## 🎨 EDITING STYLES (styles.css)

**Location:** `css/styles.css`

### Changing Brand Colors

Find the `:root` section at the top (~line 7):

```css
:root {
    --avl-deep-blue: #1a0dab;      /* Primary brand color */
    --avl-cyber-blue: #0066ff;     /* Secondary blue */
    --avl-accent-cyan: #00d4ff;    /* Accent/highlight color */
    --avl-dark: #0a0520;           /* Dark background */
    --avl-darker: #050210;         /* Darker background */
}
```

Change the hex codes (e.g., `#1a0dab`) to any color you want. Use a [color picker](https://htmlcolorcodes.com/color-picker/) to find hex codes.

---

### Changing Fonts

Fonts are loaded from Google Fonts. To change:

1. Go to [fonts.google.com](https://fonts.google.com)
2. Select your fonts
3. Copy the embed link
4. Replace the font link in `index.html` (~line 24)
5. Update font variables in `css/styles.css` (~line 29):
```css
:root {
    --font-display: 'Orbitron', sans-serif;    /* Titles */
    --font-heading: 'Rajdhani', sans-serif;    /* Section headers */
    --font-body: 'Inter', sans-serif;          /* Body text */
}
```

---

### Changing Section Sizes/Spacing

Find `--section-padding` in `:root`:
```css
--section-padding: clamp(4rem, 10vw, 8rem);  /* Space above/below sections */
```

Or edit specific sections by searching for their class name (e.g., `.hero`, `.about`, `.gallery`).

---

## 📄 EDITING PAGE STRUCTURE (index.html)

**Location:** `index.html`

This file controls the overall page layout. Main sections:

| Lines | Section |
|-------|---------|
| 33-93 | Navigation bar |
| 95-145 | Hero (top banner) |
| 147-210 | About the Lab |
| 212-260 | Photo Gallery |
| 262-295 | Impact & Achievements |
| 297-315 | Team |
| 317-335 | Research Areas |
| 337-360 | Hiring / Join Us |
| 362-390 | Learn by Doing |
| 392-480 | Footer |

### Changing Navigation Links

Find the `nav-links` section (~line 40):
```html
<ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <!-- Add or remove links here -->
</ul>
```

The `href="#about"` links to the section with `id="about"`.

---

### Changing Hero Text

Find the hero section (~line 95):
```html
<h1 class="hero-title">AUTONOMOUS VEHICLE LABORATORY</h1>

<p class="hero-subtitle">
    Advancing autonomous vehicle research through hands-on innovation. 
    From LiDAR processing to digital twins, we're building the future of mobility.
</p>
```

---

### Changing Footer Content

Find the footer section (~line 392). You can edit:
- Quick links
- Research links  
- Contact information
- Copyright text

---

## 🔧 EDITING FUNCTIONALITY (main.js)

**Location:** `js/main.js`

⚠️ **Only edit if you know JavaScript!**

This file handles:
- Navigation scroll effects
- Mobile menu toggle
- Rendering team cards from data.js
- Rendering research cards from data.js
- Photo slideshow auto-rotation
- Scroll animations

### Changing Slideshow Speed

Find `initSlideshow` function (~line 380):
```javascript
slideInterval = setInterval(() => {
    changeSlide(1);
}, 5000);  // 5000 = 5 seconds between slides
```

Change `5000` to your desired milliseconds (1000 = 1 second).

---

## 📋 QUICK REFERENCE

| I want to... | Edit this file | Find this section |
|--------------|----------------|-------------------|
| Add/remove team member | `js/data.js` | `TEAM_MEMBERS` |
| Add/edit research area | `js/data.js` | `RESEARCH_AREAS` |
| Add/remove job posting | `js/data.js` | `HIRING_INFO` |
| Update stats | `js/data.js` | `IMPACT_STATS` |
| Change contact info | `js/data.js` | `SITE_INFO` |
| Replace gallery photo | `images/gallery/` | Upload same filename |
| Change colors | `css/styles.css` | `:root` variables |
| Edit page text | `index.html` | Find the section |
| Change slideshow speed | `js/main.js` | `initSlideshow` |

---

## 💡 Tips

1. **Always back up** before making changes - download the repo as a zip first
2. **Test locally** - open `index.html` in your browser before pushing to GitHub
3. **Clear cache** - if changes don't appear, press `Ctrl+Shift+R` to hard refresh
4. **Image sizes** - keep images under 500KB for fast loading
5. **Quotes matter** - make sure text stays inside `"quotes"` in data.js

---

Built with ❤️ for AVL at Cal Poly Pomona

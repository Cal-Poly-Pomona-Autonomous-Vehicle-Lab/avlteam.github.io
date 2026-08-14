# AVL Website — autovehiclelab.com

Official website for the **Autonomous Vehicle Laboratory (AVL)** at Cal Poly Pomona. Built as a static site hosted on GitHub Pages — no build tools, no frameworks, no server required. Everything runs in plain HTML, CSS, and JavaScript.

**Live Site:** [autovehiclelab.com](https://autovehiclelab.com)  
**Repository:** [Cal-Poly-Pomona-Autonomous-Vehicle-Lab/avlteam.github.io](https://github.com/Cal-Poly-Pomona-Autonomous-Vehicle-Lab/avlteam.github.io)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Site Structure](#site-structure)
3. [How It Works](#how-it-works)
4. [File Reference](#file-reference)
   - [HTML Pages](#html-pages)
   - [js/data.js — Content Layer](#jsdatajs--content-layer)
   - [js/components.js — Shared UI](#jscomponentsjs--shared-ui)
   - [js/main.js — Rendering Engine](#jsmainjs--rendering-engine)
   - [css/styles.css — Design System](#cssstylescss--design-system)
   - [images/](#images)
5. [How to Make Common Changes](#how-to-make-common-changes)
   - [Add or Update a Team Member](#add-or-update-a-team-member)
   - [Add a Publication](#add-a-publication)
   - [Add a New Sponsor](#add-a-new-sponsor)
   - [Update the Hero Image](#update-the-hero-image)
   - [Add a Gallery Photo](#add-a-gallery-photo)
   - [Add a New Page](#add-a-new-page)
6. [Dark Mode](#dark-mode)
7. [Local Development](#local-development)
8. [Deploying to GitHub Pages](#deploying-to-github-pages)
9. [Contributing Guidelines](#contributing-guidelines)

---

## Project Overview

The AVL website is a **6-page static site** that presents the lab's research, projects, people, and lecture series to prospective students, faculty, and industry partners.

**Design philosophy:** White and blue minimalist academic aesthetic. No JavaScript frameworks. Content is data-driven — most updates are made by editing a single file (`js/data.js`) rather than touching HTML.

**Key features:**
- Data-driven team, publications, equipment, and positions via `js/data.js`
- Shared navbar and footer injected by `js/components.js` (edit once, applies everywhere)
- Dark mode with `localStorage` persistence
- Fully responsive with a slide-in mobile hamburger menu
- Smooth scroll-reveal animations via IntersectionObserver
- No npm, no build step, no dependencies — works by opening any `.html` file in a browser

---

## Site Structure

```
avlteam.github.io/
│
├── index.html          # Home page
├── research.html       # Research areas & publications
├── projects.html       # Active vehicle platforms (MARVIN, AV2, Carl)
├── people.html         # Team directory
├── lecture.html        # Lecture series & workshops
├── join.html           # Open positions & how to apply
│
├── css/
│   └── styles.css      # All styles — design tokens, components, dark mode, responsive
│
├── js/
│   ├── data.js         # ← EDIT THIS to update content (team, pubs, equipment, etc.)
│   ├── components.js   # Navbar + footer HTML; injected into every page on load
│   └── main.js         # Renders data.js content into the DOM; handles scroll/animations
│
├── images/
│   ├── gallery/        # Slideshow & project photos
│   ├── team/           # Headshot photos (named AVL_Firstname_Lastname.jpg)
│   ├── sponsors/       # Sponsor logos
│   └── instagram/      # Instagram preview image
│
├── videos/             # Lab video files (referenced in index.html)
├── CNAME               # Custom domain: autovehiclelab.com
├── sitemap.xml         # SEO sitemap
└── robots.txt          # SEO crawl rules
```

---

## How It Works

The site uses a simple three-layer architecture:

```
data.js  →  main.js  →  DOM
  ↑            ↑
Content     Renderer

components.js  →  navbar + footer HTML (same on every page)
```

1. **`data.js`** defines JavaScript arrays/objects for all dynamic content: team members, research areas, publications, equipment, open positions, lab stats, etc.
2. **`main.js`** reads those arrays and builds the HTML (cards, grids, lists) and inserts it into placeholder `<div id="...">` elements in each HTML page.
3. **`components.js`** generates the navbar and footer HTML and injects it into `<nav id="navbar">` and `<footer id="footer">` on every page — so editing the nav or footer in one place updates all 6 pages.

Each HTML page loads all three scripts at the bottom, then calls the renderers:

```html
<script src="js/data.js"></script>
<script src="js/components.js"></script>
<script src="js/main.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        renderNavbar('index.html');   // pass current filename for active nav link
        renderFooterHtml();
    });
</script>
```

---

## File Reference

### HTML Pages

Each page shares the same skeleton:

```html
<nav class="navbar" id="navbar"></nav>   <!-- filled by components.js -->

<!-- Page-specific content here -->

<footer class="footer" id="footer"></footer>   <!-- filled by components.js -->
```

Dynamic sections use empty containers that `main.js` populates:

| Container ID | What gets rendered there | Page |
|---|---|---|
| `#team-container` | Team member cards | people.html |
| `#stats-container` | Stats numbers bar | index.html, projects.html |
| `#positions-container` | Open position cards | join.html |
| `#equipment-container` | Lab equipment cards | projects.html |
| `#achievements-container` | Key achievement cards | projects.html |
| `#learn-container` | Workshop cards | lecture.html |
| `#research-container` | Research area cards | research.html |

**To add a static section** (one that doesn't come from data.js), just write standard HTML inside the page. Look at how `projects.html` or `lecture.html` handle their non-dynamic sections for reference.

---

### js/data.js — Content Layer

> **This is the file you'll edit most.** It contains all site content in structured JavaScript objects. The website automatically reflects any changes here after a page refresh.

#### `TEAM_MEMBERS`

Organized into three groups: `leadership`, `researchers`, `members`.

```js
const TEAM_MEMBERS = {
    leadership: [
        {
            name: "Full Name",
            role: "Title - Major",
            image: "images/team/AVL_Firstname_Lastname.jpg",  // or "placeholder"
            bio: "One or two sentences describing their work.",
            linkedin: "https://linkedin.com/in/...",   // use "" if none
            github: "https://github.com/...",           // use "" if none
            email: "email@cpp.edu"                      // use "" if none
        }
    ],
    researchers: [ ... ],
    members: [ ... ]
};
```

**To add a member:**
1. Upload their headshot to `images/team/` — name it `AVL_Firstname_Lastname.jpg`
2. Copy any existing member object and fill in the fields
3. Paste it into the correct group (`leadership`, `researchers`, or `members`)

**To remove a member:** Delete their entire `{ ... }` object. Make sure to also remove the trailing comma on the object before it.

**Using `"placeholder"`** for `image` generates a grey avatar with their initials automatically — useful before a headshot is available.

---

#### `RESEARCH_AREAS`

Powers the research cards on `research.html`.

```js
const RESEARCH_AREAS = [
    {
        title: "LiDAR Point Cloud Processing",
        description: "One paragraph describing the research area.",
        icon: "lidar",          // see available icons below
        tags: ["ROS2", "PCL", "C++"]
    }
];
```

Available `icon` values: `"lidar"`, `"vision"`, `"planning"`, `"slam"`, `"control"`, `"simulation"`, `"embedded"`, `"fusion"`. To add a new icon, add a `case` in the `getResearchIcon()` function in `main.js`.

---

#### `PUBLICATIONS`

Powers the publications list and filter tabs on `research.html`.

```js
const PUBLICATIONS = [
    {
        title: "Paper or Poster Title",
        authors: "Last, F., Last, F., and Last, F.",
        venue: "Conference or Journal Name, Year",
        type: "poster",         // "poster", "presentation", or "paper"
        link: "https://..."     // URL to PDF or abstract — use "" if none
    }
];
```

The filter buttons ("All", "Posters", "Presentations") on the research page automatically sort by the `type` field. No code changes needed when you add a new publication.

---

#### `EQUIPMENT`

Powers the hardware grid on `projects.html`.

```js
const EQUIPMENT = [
    {
        name: "Velodyne VLP-16",
        category: "LiDAR",
        description: "16-channel rotating LiDAR sensor.",
        specs: ["16 channels", "100m range", "10Hz rotation"]
    }
];
```

---

#### `OPEN_POSITIONS`

Powers the position cards on `join.html`.

```js
const OPEN_POSITIONS = [
    {
        title: "Position Title",
        type: "Research Assistant",     // shown as the badge label
        description: "What this role involves.",
        requirements: ["Requirement one", "Requirement two"],
        applyLink: "https://forms.google.com/..."  // use "" to hide the Apply button
    }
];
```

---

#### `LAB_STATS` and `IMPACT_STATS`

```js
const LAB_STATS = [
    { number: "25+", label: "Active Members" },
    { number: "3",   label: "Vehicle Platforms" },
    { number: "4",   label: "Years Active" }
];
```

`LAB_STATS` populates the stats bar on the homepage. `IMPACT_STATS` populates the milestone numbers on `projects.html`.

---

#### `WORKSHOPS`

Powers the workshop cards on `lecture.html`.

```js
const WORKSHOPS = [
    {
        title: "Intro to ROS2",
        level: "Beginner",
        duration: "2 hours",
        description: "Overview of ROS2 nodes, topics, and launch files.",
        topics: ["Nodes & Topics", "ROS2 CLI", "Launch Files"]
    }
];
```

---

### js/components.js — Shared UI

Contains two functions called on every page load:

#### `renderNavbar(currentPage)`

Injects the full navbar HTML into `<nav id="navbar">`. Pass the current filename (e.g. `'index.html'`, `'research.html'`) so the correct nav link gets the `.active` underline highlight.

Also handles:
- Dark mode toggle button (moon/sun icon in the nav)
- Restoring dark mode preference from `localStorage` on page load
- Mobile hamburger menu click handler (attached after injection so the button exists in the DOM)

**To add a nav link:** Find the `<ul class="nav-links">` inside the template literal in `renderNavbar()` and add a new `<li><a href="newpage.html">Label</a></li>`. Also add a matching condition in the `active` detection block above it.

**To change logos:** Update the `src` attributes for `.nav-cpp-logo` (CPP Engineering logo) and the AVL logo `<img>` inside `.nav-logo-group`.

#### `renderFooterHtml()`

Injects the footer HTML into `<footer id="footer">`. Edit the template literal to update footer links, contact info, social icons, or copyright text. Changes apply to all 6 pages automatically.

---

### js/main.js — Rendering Engine

Reads from `data.js` and writes HTML into the DOM. You generally don't need to edit this unless you're changing how a section is laid out (not just its content).

**Key functions:**

| Function | What it renders |
|---|---|
| `renderTeamSection()` | Team member cards grid on people.html |
| `renderResearchSection()` | Research area cards on research.html |
| `renderPublications()` | Publication list + filter tabs on research.html |
| `renderEquipmentSection()` | Equipment grid on projects.html |
| `renderStats()` | Stats bar numbers on index.html and projects.html |
| `renderPositions()` | Job cards on join.html |
| `renderWorkshops()` | Workshop cards on lecture.html |
| `initNavigation()` | Scroll-based navbar styling, smooth scroll anchors |
| `initSlideshow()` | Auto-advancing gallery slideshow on index.html |
| `initFadeIn()` | IntersectionObserver scroll-reveal for `.fade-in` elements |

**To change a card layout** — for example, to add a new field to team cards — find the corresponding render function and edit the HTML template literal it returns. The class names used there map directly to CSS classes in `styles.css`.

---

### css/styles.css — Design System

All styling lives in this one file, organized in labeled sections:

```
1.  CSS Variables (design tokens)
2.  Dark mode overrides
3.  Reset & base styles
4.  Typography
5.  Navbar & mobile menu
6.  Buttons
7.  Hero section
8.  Tech strip ticker
9.  Gallery slideshow
10. Stats bar
11. Section-specific styles (research, projects, team, hiring, lecture...)
12. Footer
13. Responsive / media queries (@media max-width: 1024px, 768px, 480px)
```

#### Design Tokens

The top of the file defines CSS custom properties used throughout:

```css
:root {
    --blue-primary:   #1900ad;  /* Main brand blue — buttons, active states */
    --blue-accent:    #4422cc;  /* Hover states */
    --blue-light:     #EDEAFF;  /* Badge backgrounds, tinted surfaces */
    --blue-mid:       #C5BDFF;  /* Card borders on hover */
    --blue-dark:      #10007a;  /* Darker variant */

    --white:          #ffffff;  /* Page background */
    --surface:        #F4F7FB;  /* Alternate section background */
    --border:         #E5E7EB;  /* Card and divider borders */
    --text-primary:   #111827;  /* Headings */
    --text-secondary: #374151;  /* Body paragraphs */
    --text-muted:     #6B7280;  /* Labels, captions */
}
```

**To change the brand color** across the entire site, update `--blue-primary`. Every button, underline, badge, and active nav state inherits from it automatically.

#### Dark Mode CSS

Dark mode is activated by the class `body.dark-mode`. The overrides section reassigns the variables:

```css
body.dark-mode {
    --white:          #111111;
    --surface:        #1a1a1a;
    --border:         #2e2e2e;
    --text-primary:   #ffffff;
    --text-secondary: #e0e0e0;
    --text-muted:     #a0a0a0;
}
```

Additional targeted overrides follow for elements that use hardcoded colors (e.g. text on blue backgrounds that must stay white regardless of theme). If you add a new element that looks wrong in dark mode, add a `body.dark-mode .your-class { ... }` rule in the dark mode section.

#### Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `max-width: 1024px` | Tablets — tighter grids, smaller type |
| `max-width: 768px` | Mobile — hamburger menu, stacked layouts |
| `max-width: 480px` | Small phones — further font and spacing reduction |

---

### images/

| Folder | Contents | Naming Convention |
|---|---|---|
| `images/` (root) | Logos, banners, OG social images | `AVL_*.png/jpg` |
| `images/gallery/` | Slideshow and project photos | Descriptive filenames |
| `images/team/` | Member headshots | `AVL_Firstname_Lastname.jpg` |
| `images/sponsors/` | Sponsor logos | `AVL_Sponsor_Name.png` |
| `images/instagram/` | Instagram feed preview | `AVL_Instagram_Post1.JPG` |

**Headshot requirements:** Square crop recommended, minimum 400×400px. Cards display at a 1:1 aspect ratio with `object-fit: cover`.

**Image compression:** Keep images under 500KB. Use [squoosh.app](https://squoosh.app) to compress before committing — large images slow the site and inflate the repo.

---

## How to Make Common Changes

### Add or Update a Team Member

1. Add their headshot to `images/team/AVL_Firstname_Lastname.jpg`
2. Open `js/data.js`
3. Find the right group (`leadership`, `researchers`, or `members`)
4. Copy an existing member block and update the fields
5. Save → commit → push

```js
{
    name: "Jane Doe",
    role: "Research Assistant - Computer Science",
    image: "images/team/AVL_Jane_Doe.jpg",
    bio: "Working on LiDAR-based obstacle detection for AVL-002.",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    email: "janedoe@cpp.edu"
}
```

---

### Add a Publication

Open `js/data.js`, find the `PUBLICATIONS` array, and add an entry:

```js
{
    title: "Real-Time Obstacle Detection Using YOLOPv2",
    authors: "Doe, J., Smith, A., and Bahr, B.",
    venue: "SCAIR Conference, 2025",
    type: "poster",
    link: "https://link-to-paper.pdf"
}
```

---

### Add a New Sponsor

1. Add the logo to `images/sponsors/AVL_Sponsor_Name.png` (transparent PNG preferred)
2. Open `index.html`, find the `.sponsors-grid` section
3. Copy an existing `<a class="sponsor-card">` block and update the `href`, `src`, `alt`, and name text

---

### Update the Hero Image

In `css/styles.css`, find:

```css
.hero-image {
    background-image: url('../images/gallery/AVL_AV2_LDB.jpg');
```

Replace the filename with your new image (place it in `images/gallery/`). Adjust `background-position` if needed to frame the subject correctly.

---

### Add a Gallery Photo

Open `index.html` and find the `.slideshow-container`. Add a new slide at the end of the list:

```html
<div class="slide">
    <img src="images/gallery/your-photo.jpg" alt="Description of the photo">
    <div class="slide-caption">Caption text shown at the bottom of the slide</div>
</div>
```

Then add a matching dot in the `.slide-dots` section directly below:

```html
<span class="dot" onclick="goToSlide(N)"></span>
```

Where `N` is the zero-based index of your new slide (e.g. if it's the 10th slide, `N = 9`).

---

### Add a New Page

1. Copy the closest existing page as a template (e.g. `lecture.html`)
2. Rename the file and update `<title>`, `<meta>` description/keywords, and the page-hero text
3. In the inline `<script>` at the bottom, change `renderNavbar('lecture.html')` to `renderNavbar('yourpage.html')`
4. In `js/components.js`, add a new `<li><a>` inside the `<ul class="nav-links">` template, and add its filename to the active-link detection logic
5. Add the new URL to `sitemap.xml`

---

## Dark Mode

The dark mode toggle (moon/sun icon) is in the top-right of the navbar. It:

- Adds or removes the `body.dark-mode` CSS class
- Saves the user's preference to `localStorage` under the key `avl-dark-mode`
- Restores that preference automatically on every page load

All dark mode CSS overrides are at the top of `css/styles.css` in the `/* DARK MODE */` block. When adding new elements, test them in both modes and add targeted overrides as needed.

---

## Local Development

No build tools needed. Two options:

**Option 1 — Open directly in browser:**
Double-click any `.html` file. Works for most editing but some paths may behave differently than on a server.

**Option 2 — Local server (recommended):**

Using Python (available on most systems):
```bash
# From the project root folder:
python -m http.server 3000
# Then open: http://localhost:3000
```

Using Node.js:
```bash
npx serve .
```

Using VS Code: Install the **Live Server** extension → right-click `index.html` → "Open with Live Server".

---

## Deploying to GitHub Pages

The site deploys automatically on every push to `main`. GitHub Pages serves the repository root as `autovehiclelab.com` (configured via the `CNAME` file).

**Standard deploy workflow:**

```bash
# Stage your changed files (be specific — avoid git add -A)
git add js/data.js images/team/AVL_Jane_Doe.jpg

# Write a clear commit message
git commit -m "Add Jane Doe to research team"

# Push — GitHub Pages rebuilds automatically (takes ~1-2 minutes)
git push origin main
```

After pushing, you can verify the deployment finished at:  
`https://github.com/Cal-Poly-Pomona-Autonomous-Vehicle-Lab/avlteam.github.io/actions`

> ⚠️ **Do not delete or rename `CNAME`.** It maps the GitHub Pages URL to `autovehiclelab.com`. Removing it will break the custom domain and make the site unreachable at that address.

---

## Contributing Guidelines

**For most contributors (content updates):**

- The only file you need to edit for team/publication/position updates is `js/data.js`
- Always preview locally before pushing
- Use specific, descriptive commit messages: `"Add Jane Doe to team"` not `"update stuff"`
- Keep headshot images under 500KB — compress at [squoosh.app](https://squoosh.app)
- Do not commit `.claude/`, `.DS_Store`, `Thumbs.db`, or other system/editor files

**For structural changes (new pages, CSS changes, JS refactoring):**

Create a branch rather than pushing directly to `main`:

```bash
git checkout -b feature/your-feature-name
# make and test your changes
git push origin feature/your-feature-name
# open a pull request on GitHub for review
```

**File size limits:**

GitHub Pages has a 1GB soft limit per repository. Keep images compressed and avoid committing large video files — host videos on YouTube or Google Drive and embed them instead.

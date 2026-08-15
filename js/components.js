/**
 * AVL Website — Shared Components
 * Injects navbar and footer into every page to eliminate copy-paste.
 * Usage: include this script, then call renderNavbar() and renderFooter()
 * from main.js or directly in each page's DOMContentLoaded handler.
 */

// ============================================================================
// NAVBAR
// ============================================================================

function renderNavbar(activePage) {
    const navEl = document.querySelector('.navbar');
    if (!navEl) return;

    const pages = [
        { href: 'index.html',    label: 'Home' },
        { href: 'research.html', label: 'Research' },
        { href: 'projects.html', label: 'Projects' },
        { href: 'people.html',   label: 'People' },
        { href: 'lecture.html',  label: 'Lecture Series' },
        { href: 'join.html',     label: 'Join Us' },
    ];

    const navItems = pages.map(p => {
        const isActive = p.href === activePage;
        return `<li><a href="${p.href}"${isActive ? ' class="active"' : ''}>${p.label}</a></li>`;
    }).join('');

    const discordSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>`;

    const instagramSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>`;

    const githubSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`;

    navEl.innerHTML = `
        <div class="container">
            <div class="nav-logo-group">
                <img src="images/AVL_CPPENG_Logo.png" alt="Cal Poly Pomona College of Engineering" class="nav-cpp-logo">
                <div class="nav-logo-divider"></div>
                <a href="index.html" class="nav-logo">
                    <img src="images/AVL_Blue_Logo.png" alt="AVL Logo">
                </a>
            </div>

            <ul class="nav-links">
                ${navItems}
            </ul>

            <div class="nav-social">
                <a href="https://discord.gg/2D5fEg94eM" target="_blank" aria-label="Discord" title="Join our Discord">
                    ${discordSvg}
                </a>
                <a href="https://www.instagram.com/autovehiclelab/" target="_blank" aria-label="Instagram" title="Follow us on Instagram">
                    ${instagramSvg}
                </a>
                <a href="https://github.com/Cal-Poly-Pomona-Autonomous-Vehicle-Lab" target="_blank" aria-label="GitHub" title="Check out our code on GitHub">
                    ${githubSvg}
                </a>
                <button class="dark-mode-toggle" id="dark-mode-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                    <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                </button>
            </div>

            <a href="join.html" class="btn btn-primary" style="font-size:0.82rem; padding:0.55rem 1.1rem; display:none;" id="nav-join-btn">Join Us</a>

            <button class="mobile-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    `;

    // Init dark mode now that the button exists
    const btn = document.getElementById('dark-mode-toggle');
    if (btn) {
        const moon = btn.querySelector('.icon-moon');
        const sun  = btn.querySelector('.icon-sun');

        function applyDark(isDark) {
            document.body.classList.toggle('dark-mode', isDark);
            moon.style.display = isDark ? 'none' : '';
            sun.style.display  = isDark ? ''     : 'none';
        }

        applyDark(localStorage.getItem('avl-dark-mode') === 'true');

        btn.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            localStorage.setItem('avl-dark-mode', isDark);
            applyDark(isDark);
        });
    }

    // Wire up mobile hamburger menu now that the navbar is in the DOM
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// ============================================================================
// FOOTER
// ============================================================================

function renderFooterHtml() {
    const footerEl = document.querySelector('.footer');
    if (!footerEl) return;

    const discordSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>`;

    const instagramSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>`;

    const githubSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`;

    const emailSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
    </svg>`;

    const locationSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>`;

    const linkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>`;

    footerEl.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <img src="images/AVL_Text_No_Background_400px-115px.png" alt="AVL Logo">
                    <p>Autonomous Vehicle Laboratory at Cal Poly Pomona, advancing autonomous systems research through hands-on innovation.</p>
                    <div class="footer-social">
                        <a href="https://discord.gg/2D5fEg94eM" target="_blank" aria-label="Discord">${discordSvg}</a>
                        <a href="https://www.instagram.com/autovehiclelab/" target="_blank" aria-label="Instagram">${instagramSvg}</a>
                        <a href="https://github.com/Cal-Poly-Pomona-Autonomous-Vehicle-Lab" target="_blank" aria-label="GitHub">${githubSvg}</a>
                    </div>
                </div>

                <div class="footer-links">
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="research.html">Research</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="people.html">People</a></li>
                        <li><a href="lecture.html">Lecture Series</a></li>
                        <li><a href="join.html">Join Us</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Research Areas</h4>
                    <ul>
                        <li><a href="research.html">LiDAR Processing</a></li>
                        <li><a href="research.html">Computer Vision</a></li>
                        <li><a href="research.html">Path Planning</a></li>
                        <li><a href="research.html">Sensor Fusion</a></li>
                        <li><a href="research.html">Digital Twins</a></li>
                        <li><a href="research.html#publications">Publications</a></li>
                    </ul>
                </div>

                <div class="footer-links footer-contact">
                    <h4>Contact</h4>
                    <p>${emailSvg}<span><a href="mailto:autovehiclelab@gmail.com">autovehiclelab@gmail.com</a></span></p>
                    <p>${locationSvg}<span>Building 9, Room 101, Cal Poly Pomona</span></p>
                    <p>${linkSvg}<a href="https://www.cpp.edu/engineering/autonomous-systems/avl-team.shtml" target="_blank">CPP Official Page</a></p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <span id="current-year">${new Date().getFullYear()}</span> Autonomous Vehicle Laboratory. All rights reserved.</p>
                <p>Built with care by the AVL Team</p>
            </div>
        </div>
    `;
}

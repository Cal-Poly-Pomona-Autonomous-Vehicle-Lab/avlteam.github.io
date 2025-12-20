/**
 * AVL Website - Main JavaScript
 * Handles dynamic content rendering, navigation, and animations
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderTeamSection();
    renderResearchSection();
    renderImpactSection();
    renderHiringSection();
    renderLearnSection();
    renderFooter();
    initScrollAnimations();
    initParticles();
});

// ============================================================================
// NAVIGATION
// ============================================================================

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================================================
// TEAM SECTION RENDERING
// ============================================================================

function renderTeamSection() {
    const teamContainer = document.getElementById('team-container');
    if (!teamContainer) return;

    let html = '';

    // Leadership section
    if (TEAM_MEMBERS.leadership && TEAM_MEMBERS.leadership.length > 0) {
        html += `
            <div class="team-category">
                <h3>Leadership & Executive Board</h3>
                <div class="team-grid">
                    ${TEAM_MEMBERS.leadership.map(member => createTeamCard(member)).join('')}
                </div>
            </div>
        `;
    }

    // Researchers section
    if (TEAM_MEMBERS.researchers && TEAM_MEMBERS.researchers.length > 0) {
        html += `
            <div class="team-category">
                <h3>Research Staff</h3>
                <div class="team-grid">
                    ${TEAM_MEMBERS.researchers.map(member => createTeamCard(member)).join('')}
                </div>
            </div>
        `;
    }

    // General members section
    if (TEAM_MEMBERS.members && TEAM_MEMBERS.members.length > 0) {
        html += `
            <div class="team-category">
                <h3>Team Members</h3>
                <div class="team-grid">
                    ${TEAM_MEMBERS.members.map(member => createTeamCard(member)).join('')}
                </div>
            </div>
        `;
    }

    teamContainer.innerHTML = html;
}

function createTeamCard(member) {
    const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const imageHtml = member.image === 'placeholder' 
        ? `<div class="placeholder-avatar">${initials}</div>`
        : `<img src="${member.image}" alt="${member.name}">`;

    let linksHtml = '';
    if (member.linkedin || member.github || member.email) {
        linksHtml = '<div class="team-card-links">';
        if (member.linkedin) {
            linksHtml += `<a href="${member.linkedin}" target="_blank" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </a>`;
        }
        if (member.github) {
            linksHtml += `<a href="${member.github}" target="_blank" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>`;
        }
        if (member.email) {
            linksHtml += `<a href="mailto:${member.email}" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
            </a>`;
        }
        linksHtml += '</div>';
    }

    return `
        <div class="team-card fade-in">
            <div class="team-card-image">
                ${imageHtml}
            </div>
            <div class="team-card-content">
                <h4>${member.name}</h4>
                <p class="team-card-role">${member.role}</p>
                <p class="team-card-bio">${member.bio}</p>
                ${linksHtml}
            </div>
        </div>
    `;
}

// ============================================================================
// RESEARCH SECTION RENDERING
// ============================================================================

function renderResearchSection() {
    const researchContainer = document.getElementById('research-container');
    if (!researchContainer) return;

    const html = RESEARCH_AREAS.map(area => `
        <div class="research-card fade-in">
            <div class="research-card-icon">${area.icon || '🔬'}</div>
            <h3>${area.title}</h3>
            <p>${area.description}</p>
            <div class="research-projects">
                ${area.projects.map(project => `<span>${project}</span>`).join('')}
            </div>
        </div>
    `).join('');

    researchContainer.innerHTML = html;
}

// ============================================================================
// IMPACT SECTION RENDERING
// ============================================================================

function renderImpactSection() {
    // Render stats
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
        const statsHtml = IMPACT_STATS.map(stat => `
            <div class="stat-card fade-in">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
        statsContainer.innerHTML = statsHtml;
    }

    // Render achievements
    const achievementsContainer = document.getElementById('achievements-container');
    if (achievementsContainer) {
        const achievementsHtml = ACHIEVEMENTS.map(achievement => `
            <div class="achievement-card fade-in">
                <div class="achievement-year">${achievement.year}</div>
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            </div>
        `).join('');
        achievementsContainer.innerHTML = achievementsHtml;
    }
}

// ============================================================================
// HIRING SECTION RENDERING
// ============================================================================

function renderHiringSection() {
    const hiringSection = document.getElementById('hiring-section');
    if (!hiringSection) return;

    if (!HIRING_INFO.isHiring) {
        hiringSection.style.display = 'none';
        return;
    }

    const positionsHtml = HIRING_INFO.positions.map(position => `
        <div class="position-card fade-in">
            <span class="position-type">${position.type}</span>
            <h3>${position.title}</h3>
            <p>${position.description}</p>
            <div class="position-requirements">
                <h4>Requirements</h4>
                <ul>
                    ${position.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            ${position.applyLink ? `<a href="${position.applyLink}" class="btn btn-secondary" target="_blank">Apply Now</a>` : ''}
        </div>
    `).join('');

    const positionsContainer = document.getElementById('positions-container');
    if (positionsContainer) {
        positionsContainer.innerHTML = positionsHtml;
    }
}

// ============================================================================
// LEARN BY DOING SECTION RENDERING
// ============================================================================

function renderLearnSection() {
    const learnContainer = document.getElementById('learn-container');
    if (!learnContainer) return;

    const workshopsHtml = LEARNING_RESOURCES.map(workshop => `
        <div class="workshop-card fade-in">
            <span class="workshop-level ${workshop.level.toLowerCase()}">${workshop.level}</span>
            <p class="workshop-type">${workshop.type}</p>
            <h3>${workshop.title}</h3>
            <p>${workshop.description}</p>
        </div>
    `).join('');

    learnContainer.innerHTML = workshopsHtml;
}

// ============================================================================
// FOOTER RENDERING
// ============================================================================

function renderFooter() {
    // Update contact info
    const emailEl = document.getElementById('footer-email');
    const locationEl = document.getElementById('footer-location');
    
    if (emailEl && SITE_INFO.contact.email) {
        emailEl.innerHTML = `<a href="mailto:${SITE_INFO.contact.email}">${SITE_INFO.contact.email}</a>`;
    }
    if (locationEl && SITE_INFO.contact.location) {
        locationEl.textContent = SITE_INFO.contact.location;
    }

    // Update social links
    const socialContainer = document.querySelector('.footer-social');
    if (socialContainer) {
        let socialHtml = '';
        if (SITE_INFO.contact.github) {
            socialHtml += `<a href="${SITE_INFO.contact.github}" target="_blank" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>`;
        }
        if (SITE_INFO.contact.discord) {
            socialHtml += `<a href="${SITE_INFO.contact.discord}" target="_blank" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
            </a>`;
        }
        if (SITE_INFO.contact.instagram) {
            socialHtml += `<a href="${SITE_INFO.contact.instagram}" target="_blank" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>`;
        }
        if (socialHtml) {
            socialContainer.innerHTML = socialHtml;
        }
    }

    // Update year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }, 100);
}

// ============================================================================
// PARTICLE EFFECTS
// ============================================================================

function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

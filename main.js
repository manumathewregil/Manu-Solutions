document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if(navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
        });
    }

    // 3. Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    // 4. Update Navigation Active State automatically based on page
    const links = document.querySelectorAll('.nav-links a');
    const currentUrl = window.location.href;
    
    links.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href')) && link.getAttribute('href') !== '#') {
            link.classList.add('active');
        }
    });

    // 5. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateThemeIcon(currentTheme);
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark-theme');
                updateThemeIcon('dark-theme');
            } else {
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light-theme');
                updateThemeIcon('light-theme');
            }
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        const icon = themeToggleBtn.querySelector('i');
        if (theme === 'light-theme') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // 6. Page Loader Logic
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader-wrapper');
        if (loader) {
            // Small delay to ensure smooth layout render before removing loader
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 300);
        }
    });
});

/* ⚙️ ANIMATIONS JAVASCRIPT - JSV */

(function() {
    'use strict';

    const config = {
        throttleDelay: 10,
        observerThreshold: 0.1,
        scrollSpeedMultiplier: 0.5,
        scrollTopButtonThreshold: 300
    };

    function throttle(func, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = Date.now();
            if (now - lastCall >= delay) {
                lastCall = now;
                return func(...args);
            }
        };
    }

    function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    }

    // 1. Intersection Observer - Animations au scroll
    function initIntersectionObserver() {
        const observerOptions = {
            threshold: config.observerThreshold,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!entry.target.classList.contains('fade-in-down') &&
                        !entry.target.classList.contains('fade-in-left') &&
                        !entry.target.classList.contains('fade-in-right') &&
                        !entry.target.classList.contains('scale-in') &&
                        !entry.target.classList.contains('slide-up')) {
                        entry.target.classList.add('fade-in-up');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // 2. Parallax Effect
    function initParallax() {
        const parallaxElement = document.querySelector('.image-accueil');
        if (!parallaxElement) return;

        const handleParallax = throttle(function() {
            const scrollPosition = window.pageYOffset;
            const parallaxOffset = scrollPosition * config.scrollSpeedMultiplier;
            parallaxElement.style.transform = `translateY(${parallaxOffset}px)`;
        }, config.throttleDelay);

        window.addEventListener('scroll', handleParallax);
    }

    // 3. Scroll To Top Button
    function initScrollToTopButton() {
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.id = 'scrollTopBtn';
        scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollTopBtn.setAttribute('title', 'Retour au top');
        document.body.appendChild(scrollTopBtn);

        const handleScroll = throttle(function() {
            if (window.pageYOffset > config.scrollTopButtonThreshold) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }, config.throttleDelay);

        window.addEventListener('scroll', handleScroll);

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Smooth Scroll
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // 5. Active Link Highlight
    function initActiveLinkHighlight() {
        const sections = document.querySelectorAll('[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        const handleScroll = throttle(function() {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === '#' + current) {
                    link.classList.add('active');
                }
            });
        }, config.throttleDelay);

        window.addEventListener('scroll', handleScroll);
    }

    // 6. Ripple Effect
    function initRippleEffect() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.width = '0';
                ripple.style.height = '0';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.pointerEvents = 'none';
                ripple.style.transform = 'translate(-50%, -50%)';

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                const size = Math.max(rect.width, rect.height);
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
                ripple.style.animation = 'ripple 0.6s ease-out';

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // 7. Card Animations
    function initCardAnimations() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animationDelay = (index * 0.15) + 's';
            if (!card.classList.contains('animate-on-scroll')) {
                card.classList.add('animate-on-scroll', 'fade-in-up');
            }
        });
    }

    // 8. Navbar Animation
    function initNavbarAnimation() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const handleNavbarScroll = throttle(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 119, 182, 0.2)';
            } else {
                navbar.style.boxShadow = '0 2px 8px rgba(0, 119, 182, 0.08)';
            }
        }, config.throttleDelay);

        window.addEventListener('scroll', handleNavbarScroll);
    }

    // 9. Initialize All
    function initAll() {
        initIntersectionObserver();
        initParallax();
        initScrollToTopButton();
        initSmoothScroll();
        initActiveLinkHighlight();
        initRippleEffect();
        initCardAnimations();
        initNavbarAnimation();
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

})();

// Helper function
window.animateElement = function(element, animationClass, delay = 0) {
    setTimeout(() => {
        element.classList.add('animate-on-scroll', animationClass);
    }, delay);
};

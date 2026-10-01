/* ==========================================================================
   ⚙️ ANIMATIONS JAVASCRIPT & INTERACTIONS - JSV
   ========================================================================== */

(function() {
    'use strict';

    const config = {
        throttleDelay: 16,
        observerThreshold: 0.15,
        scrollTopButtonThreshold: 280
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

    // 1. Intersection Observer - Animations au scroll
    function initIntersectionObserver() {
        if (!('IntersectionObserver' in window)) {
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                el.classList.add('fade-in-up');
            });
            return;
        }

        const observerOptions = {
            threshold: config.observerThreshold,
            rootMargin: '0px 0px -40px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    if (!el.classList.contains('fade-in-down') &&
                        !el.classList.contains('fade-in-left') &&
                        !el.classList.contains('fade-in-right') &&
                        !el.classList.contains('scale-in') &&
                        !el.classList.contains('slide-up')) {
                        el.classList.add('fade-in-up');
                    }
                    observer.unobserve(el);
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // 2. Parallax Effect doux sur Hero
    function initParallax() {
        const bgImg = document.querySelector('.hero-bg-img');
        if (!bgImg) return;

        const handleParallax = throttle(function() {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollY < 700) {
                bgImg.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        }, config.throttleDelay);

        window.addEventListener('scroll', handleParallax, { passive: true });
    }

    // 3. Scroll To Top Button
    function initScrollToTopButton() {
        if (document.getElementById('scrollTopBtn')) return;

        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.id = 'scrollTopBtn';
        scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollTopBtn.setAttribute('title', 'Retour en haut');
        scrollTopBtn.setAttribute('aria-label', 'Retour en haut de page');
        document.body.appendChild(scrollTopBtn);

        const handleScroll = throttle(function() {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollY > config.scrollTopButtonThreshold) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }, config.throttleDelay);

        window.addEventListener('scroll', handleScroll, { passive: true });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Smooth Scroll avec compensation de la barre de navigation fixe
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (!href || href === '#' || href.startsWith('#modal')) return;

                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    const nav = document.querySelector('.navbar');
                    const navHeight = nav ? nav.offsetHeight : 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Fermeture automatique du menu déroulant sur mobile
                    const navbarCollapse = document.getElementById('navbarNavDropdown');
                    if (navbarCollapse && navbarCollapse.classList.contains('show') && window.jQuery) {
                        window.jQuery('#navbarNavDropdown').collapse('hide');
                    }
                }
            });
        });
    }

    // 5. Active Link Highlight sur sections réelles
    function initActiveLinkHighlight() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        if (!sections.length) return;

        const handleScroll = throttle(function() {
            let current = '';
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === '#' + current || href === 'index.html#' + current) {
                        link.classList.add('active');
                    } else if (href && href.startsWith('#')) {
                        link.classList.remove('active');
                    }
                });
            }
        }, config.throttleDelay);

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // 6. Ripple Effect sur les boutons
    function initRippleEffect() {
        document.querySelectorAll('.btn-sport, .btn-cta').forEach(btn => {
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
                ripple.style.background = 'rgba(255, 255, 255, 0.45)';
                ripple.style.pointerEvents = 'none';
                ripple.style.transform = 'translate(-50%, -50%)';

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                const size = Math.max(rect.width, rect.height) * 2;
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
                ripple.style.animation = 'ripple 0.5s ease-out';

                setTimeout(() => ripple.remove(), 500);
            });
        });
    }

    // 7. Initialisation globale
    function initAll() {
        initIntersectionObserver();
        initParallax();
        initScrollToTopButton();
        initSmoothScroll();
        initActiveLinkHighlight();
        initRippleEffect();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();

window.animateElement = function(element, animationClass, delay = 0) {
    setTimeout(() => {
        element.classList.add('animate-on-scroll', animationClass);
    }, delay);
};

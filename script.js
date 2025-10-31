// Mobile Menu Toggle
(function() {
    'use strict';

    // Mobile Navigation Toggle
    var mobileToggle = document.getElementById('mobileToggle');
    var navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            var spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Close menu when clicking on links
        var navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                var spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    // Smooth Scrolling for Anchor Links
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var navbarHeight = 80;
                var targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Link on Scroll
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        var scrollPosition = window.scrollY + 100;

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            var sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // Navbar Background Change on Scroll
    var navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }

    window.addEventListener('scroll', updateNavbar);

    // Scroll Reveal Animation - DISABLED for static design
    // Animations during scroll can cause shifts during zoom
    // Elements are now always visible with opacity: 1
    function reveal() {
        // Disabled for static design compliance
    }

    // Initialize reveal elements with opacity 1 (always visible)
    document.addEventListener('DOMContentLoaded', function() {
        var revealElements = document.querySelectorAll('.feature-card, .destination-card, .tour-card');
        revealElements.forEach(function(element) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'none'; // No transitions for static design
        });
    });

    window.addEventListener('scroll', reveal);
    reveal(); // Call once on load

    // Prevent default zoom behavior for static design
    document.addEventListener('DOMContentLoaded', function() {
        // Disable pinch zoom on touch devices
        document.addEventListener('touchstart', function(event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, { passive: false });

        var lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            var now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);

        // Prevent text selection on double-click (for cleaner static design)
        document.addEventListener('selectstart', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                // Allow text selection for specific elements
            }
        });
    });

    // Image Lazy Loading (Native)
    if ('loading' in HTMLImageElement.prototype) {
        var images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(function(img) {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // Form Validation (if contact form exists)
    var contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var name = this.querySelector('input[name="name"]');
            var email = this.querySelector('input[name="email"]');
            var message = this.querySelector('textarea[name="message"]');

            var isValid = true;
            var errors = [];

            if (!name || name.value.trim() === '') {
                errors.push('Name is required');
                isValid = false;
            }

            if (!email || email.value.trim() === '') {
                errors.push('Email is required');
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                errors.push('Please enter a valid email');
                isValid = false;
            }

            if (!message || message.value.trim() === '') {
                errors.push('Message is required');
                isValid = false;
            }

            if (isValid) {
                // Submit form (you can add AJAX submission here)
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fix the following errors:\n' + errors.join('\n'));
            }
        });
    }

    // Destination Cards - Add Click Event
    var destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var link = this.querySelector('.destination-link');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });

    // Tour Cards - Click Effect DISABLED for static design
    // Transform animations can cause shifts during zoom
    var tourCards = document.querySelectorAll('.tour-card');
    tourCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            // Disabled for static design - no transform animations
        });

        card.addEventListener('mouseleave', function() {
            // Disabled for static design - no transform animations
        });
    });

    // Prevent Right Click on Images (optional - for static design protection)
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('contextmenu', function(e) {
            // Uncomment to prevent right-click
            // e.preventDefault();
            // return false;
        });
    });

    // Back to Top Button (optional)
    function createBackToTop() {
        var backToTop = document.createElement('button');
        backToTop.innerHTML = '↑';
        backToTop.className = 'back-to-top';
        backToTop.style.cssText = 'position: fixed; bottom: 40px; right: 40px; width: 60px; height: 60px; border-radius: 50%; background: #2563eb; color: white; border: none; font-size: 28px; cursor: pointer; opacity: 0; transition: opacity 0.3s, transform 0.3s; z-index: 999; box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);';
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'scale(1)';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.transform = 'scale(0.8)';
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        backToTop.addEventListener('mouseenter', function() {
            // Disabled for static design - no transform animations
        });

        backToTop.addEventListener('mouseleave', function() {
            // Disabled for static design - no transform animations
        });
    }

    createBackToTop();

    // Console Log for Static Design Verification
    console.log('Central Asia Tours - Static Design Loaded');
    console.log('Viewport Width:', window.innerWidth);
    console.log('Viewport Height:', window.innerHeight);
    console.log('Device Pixel Ratio:', window.devicePixelRatio);

    // ========================================
    // STATIC DESIGN ENFORCEMENT
    // ========================================
    // Force fixed width regardless of browser zoom or Windows DPI
    function enforceStaticDesign() {
        var html = document.documentElement;
        var body = document.body;

        // Force 1920px width
        html.style.width = '1920px';
        html.style.minWidth = '1920px';
        html.style.maxWidth = '1920px';
        body.style.width = '1920px';
        body.style.minWidth = '1920px';
        body.style.maxWidth = '1920px';

        // Reset any zoom scaling
        html.style.zoom = '1';
        body.style.zoom = '1';

        // Force transform scale to 1
        html.style.transform = 'scale(1)';
        body.style.transform = 'scale(1)';
        html.style.transformOrigin = '0 0';
        body.style.transformOrigin = '0 0';

        // Disable text size adjust
        html.style.webkitTextSizeAdjust = 'none';
        html.style.mozTextSizeAdjust = 'none';
        html.style.msTextSizeAdjust = 'none';
        html.style.textSizeAdjust = 'none';
        body.style.webkitTextSizeAdjust = 'none';
        body.style.mozTextSizeAdjust = 'none';
        body.style.msTextSizeAdjust = 'none';
        body.style.textSizeAdjust = 'none';
    }

    // Run on load
    enforceStaticDesign();

    // Re-enforce on resize (handles Windows DPI changes)
    window.addEventListener('resize', function() {
        enforceStaticDesign();
    });

    // Re-enforce on orientation change
    window.addEventListener('orientationchange', function() {
        enforceStaticDesign();
    });

    // Prevent zoom via keyboard shortcuts (Ctrl+/Ctrl-)
    document.addEventListener('keydown', function(e) {
        // Detect Ctrl+Plus, Ctrl+Minus, Ctrl+0
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=' || e.key === '-' || e.key === '0')) {
            // Allow the zoom but re-enforce static design immediately
            setTimeout(enforceStaticDesign, 10);
        }
    });

    // Prevent zoom via mouse wheel (Ctrl+Scroll)
    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey || e.metaKey) {
            // Allow the zoom but re-enforce static design immediately
            setTimeout(enforceStaticDesign, 10);
        }
    }, { passive: true });

    // Monitor for any zoom changes
    var lastDevicePixelRatio = window.devicePixelRatio;
    setInterval(function() {
        if (window.devicePixelRatio !== lastDevicePixelRatio) {
            console.log('Zoom detected, re-enforcing static design');
            enforceStaticDesign();
            lastDevicePixelRatio = window.devicePixelRatio;
        }
    }, 100);

})();

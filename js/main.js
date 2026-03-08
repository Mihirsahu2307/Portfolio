// Main JavaScript for Portfolio

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Open menu
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuOverlay.classList.remove('hidden');
            // Small timeout to allow display:block to apply before animating opacity
            setTimeout(() => mobileMenuOverlay.classList.add('opacity-100'), 10);
            
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            // Close menu
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.remove('opacity-100');
            setTimeout(() => mobileMenuOverlay.classList.add('hidden'), 300);
            
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileMenuOverlay.addEventListener('click', toggleMenu);
    
    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // --- Navbar Scroll Effect ---
    const topNavbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add shadow/background on scroll
        if (currentScrollY > 50) {
            topNavbar.classList.add('shadow-lg');
            // Adjust blur and background opacity
            topNavbar.classList.replace('bg-gray-900/80', 'bg-gray-900/90');
        } else {
            topNavbar.classList.remove('shadow-lg');
            topNavbar.classList.replace('bg-gray-900/90', 'bg-gray-900/80');
        }

        // Hide/Show navbar on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past 100px - hide navbar
            topNavbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            topNavbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get navbar height for offset
                const navHeight = topNavbar.offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Reveal Animation on Scroll ---
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150; // trigger point
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    // Check initially and on scroll
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check incase elements are in view
});

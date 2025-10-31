// Theme Toggle & Burger Menu with Dynamic Header/Footer Loading
document.addEventListener('DOMContentLoaded', function() {
    // Load Header and Footer first, then initialize everything
    loadHeaderFooter();
});

// Load Header and Footer dynamically
function loadHeaderFooter() {
    let headerLoaded = false;
    let footerLoaded = false;
    
    // Determine the correct path based on current location
    const currentPath = window.location.pathname;
    const isInProjectDetail = currentPath.includes('/projekte/projekt-');
    const isInPages = currentPath.includes('/pages/');
    
    let basePath = '';
    if (isInProjectDetail) {
        basePath = '../../../'; // von pages/projekte/projekt-x/ zum root
    } else if (isInPages) {
        basePath = '../'; // von pages/ zum root
    } else {
        basePath = ''; // bereits im root
    }
    
    // Load Header
    fetch(basePath + 'components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                // Extract only the body content from the header HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                const headerContent = tempDiv.querySelector('header');
                if (headerContent) {
                    headerPlaceholder.innerHTML = headerContent.outerHTML;
                } else {
                    headerPlaceholder.innerHTML = data; // Fallback
                }
            }
            headerLoaded = true;
            
            // Initialize theme immediately after header is loaded
            initializeTheme();
            
            if (headerLoaded && footerLoaded) {
                initializeAfterLoad();
            } else if (headerLoaded) {
                initializeAfterLoad(); // Initialize even if footer not loaded
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
            headerLoaded = true;
            if (headerLoaded) initializeAfterLoad();
        });
    
    // Load Footer
    fetch(basePath + 'components/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                // Extract only the body content from the footer HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                const footerContent = tempDiv.querySelector('footer');
                if (footerContent) {
                    footerPlaceholder.innerHTML = footerContent.outerHTML;
                } else {
                    footerPlaceholder.innerHTML = data; // Fallback
                }
            }
            footerLoaded = true;
            if (headerLoaded && footerLoaded) {
                initializeAfterLoad();
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            footerLoaded = true;
        });
}

// Initialize everything after header/footer are loaded
function initializeAfterLoad() {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
        configureHeaderPaths(); // Neue Funktion für Header-Pfade
        setActiveNavItem();
        initializeTheme();
        initializeBurgerMenu();
    }, 100);
}

// Set active navigation item based on current page
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize Theme
function initializeTheme() {
    // Set default theme first
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    console.log('Theme Toggle found:', !!themeToggle);
    console.log('Theme Icon found:', !!themeIcon);
    
    if (!themeToggle || !themeIcon) {
        console.warn('Theme elements not found, retrying...');
        // Retry after a short delay
        setTimeout(() => {
            initializeTheme();
        }, 200);
        return;
    }
    
    // Update icon based on current theme
    updateThemeIcon(savedTheme, themeIcon);
    
    // Remove any existing event listeners to prevent duplicates
    const newThemeToggle = themeToggle.cloneNode(true);
    themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
    
    newThemeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log('Theme changing from', currentTheme, 'to', newTheme);
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, document.querySelector('.theme-icon'));
    });
}

// Update theme icon (separate function for clarity)
function updateThemeIcon(theme, themeIcon) {
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        console.log('Icon updated to:', themeIcon.textContent, 'for theme:', theme);
    }
}

// Initialize Burger Menu
function initializeBurgerMenu() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Burger Menu Init:', { burger: !!burger, navMenu: !!navMenu });
    
    if (!burger || !navMenu) {
        console.log('Burger menu elements not found');
        return;
    }
    
    // Remove any existing event listeners by cloning
    const newBurger = burger.cloneNode(true);
    burger.parentNode.replaceChild(newBurger, burger);
    
    newBurger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            navMenu.classList.remove('active');
            newBurger.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            navMenu.classList.add('active');
            newBurger.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
        
        console.log('Burger clicked, menu active:', !isActive);
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            newBurger.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Nav link clicked, menu closed');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !newBurger.contains(e.target)) {
            navMenu.classList.remove('active');
            newBurger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            newBurger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Header-Pfad-Konfiguration nach dem Laden
function configureHeaderPaths() {
    const currentPath = window.location.pathname;
    const isInProjectDetail = currentPath.includes('/projekte/projekt-');
    const isInPages = currentPath.includes('/pages/');
    
    let basePath = '';
    if (isInProjectDetail) {
        basePath = '../../../'; // von pages/projekte/projekt-x/ zum root
    } else if (isInPages) {
        basePath = '../'; // von pages/ zum root
    } else {
        basePath = ''; // bereits im root
    }
    
    // Logo und Links aktualisieren
    const logoLink = document.getElementById('logo-link');
    const logoImg = document.getElementById('logo-img');
    const navHome = document.getElementById('nav-home');
    const navProjekte = document.getElementById('nav-projekte');
    
    if (logoLink) logoLink.href = basePath + 'index.html';
    if (logoImg) logoImg.src = basePath + 'assets/images/logo_erfinden_40_transparent.png';
    if (navHome) navHome.href = basePath + 'index.html';
    if (navProjekte) navProjekte.href = basePath + 'pages/projekte.html';
    
    // Aktive Seite markieren
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}
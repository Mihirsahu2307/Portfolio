class PortfolioNavbar extends HTMLElement {
    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '';
        const activePage = this.getAttribute('active-page') || 'home';

        let blogsDesktopBtnClass = "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all text-sm font-medium border border-secondary/20";
        let blogsMobileBtnClass = "mobile-link flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-white hover:bg-secondary/20 transition-colors";

        if (activePage === 'blogs') {
            blogsDesktopBtnClass = "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-white shadow-md shadow-secondary/20 transition-all text-sm font-medium";
            blogsMobileBtnClass = "mobile-link flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-white bg-secondary/80 hover:bg-secondary transition-colors";
        }

        this.innerHTML = `
        <!-- Overlay for mobile menu -->
        <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/50 z-40 hidden backdrop-blur-sm transition-opacity"></div>
        
        <!-- Navigation -->
        <header class="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-gray-900/80 border-b border-gray-800" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <a href="${basePath}index.html" class="font-outfit text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors">
                            MS<span class="text-primary">.</span>
                        </a>
                    </div>
    
                    <!-- Desktop Menu -->
                    <nav class="hidden md:flex space-x-8 items-center">
                        <a href="${basePath}index.html#about" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
                        <a href="${basePath}index.html#experience" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">Experience</a>
                        <a href="${basePath}index.html#research" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">Research</a>
                        <a href="${basePath}index.html#projects" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">Projects</a>
                        <a href="${basePath}index.html#education" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">Education</a>
                        <a href="${basePath}posts.html" class="${blogsDesktopBtnClass}">
                            <span class="js-blog-term">Thoughts</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                        <a href="https://drive.google.com/file/d/1lDx30fqkQfHzIcijCxaM36QehCq3VeuA/view?usp=sharing" target="_blank" class="px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-medium border border-primary/20">Resume</a>
                    </nav>
    
                    <!-- Mobile Menu Button -->
                    <div class="md:hidden flex items-center">
                        <button id="mobile-menu-btn" class="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" id="menu-icon" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 l12 12" id="close-icon" class="hidden" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    
            <!-- Mobile Menu Panel -->
            <div id="mobile-menu" class="fixed right-0 top-0 bottom-0 w-64 bg-gray-900 border-l border-gray-800 z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
                <div class="px-4 pt-20 pb-6 space-y-4 h-full flex flex-col">
                    <a href="${basePath}index.html#about" class="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">About</a>
                    <a href="${basePath}index.html#experience" class="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Experience</a>
                    <a href="${basePath}index.html#research" class="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Research</a>
                    <a href="${basePath}index.html#projects" class="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Projects</a>
                    <a href="${basePath}index.html#education" class="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Education</a>
                    <a href="${basePath}posts.html" class="${blogsMobileBtnClass}">
                        <span class="js-blog-term">Thoughts</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                    <div class="pt-4 mt-auto border-t border-gray-800">
                        <a href="https://drive.google.com/file/d/1lDx30fqkQfHzIcijCxaM36QehCq3VeuA/view?usp=sharing" target="_blank" class="block w-full text-center px-4 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">Download Resume</a>
                    </div>
                </div>
            </div>
        </header>
        `;
    }
}

customElements.define('portfolio-navbar', PortfolioNavbar);

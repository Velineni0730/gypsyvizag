// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Navbar Scroll Behavior
// Logic: Show navbar at very top. Hide when scrolling down. Show when scrolling up.
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const threshold = 100; // Pixel amount before behavior kicks in

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // If we are at the very top of the page (hero section)
    if (scrollTop < 50) {
        navbar.classList.remove('nav-hidden');
    } 
    // If scrolling DOWN and past the threshold
    else if (scrollTop > lastScrollTop && scrollTop > threshold) {
        navbar.classList.add('nav-hidden');
    } 
    // If scrolling UP
    else if (scrollTop < lastScrollTop) {
        navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
});
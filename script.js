document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    // 1. Toggle mobile menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // 2. Close mobile menu when a link is clicked (for better UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });

    // 3. Optional: Add sticky class to header when scrolling (for visual effect)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
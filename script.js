// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle menu open/close
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link inside it
document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple fade-in effect on scroll
window.addEventListener('scroll', function() {
    document.querySelectorAll('.about, .services, .feature, .content').forEach(section => {
        let pos = section.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Set minimum date to today for date picker
window.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// Handle back button behavior
if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
    history.pushState({}, '', window.location.href);
    
    window.addEventListener('popstate', function() {
        window.location.href = 'index.html';
    });
}
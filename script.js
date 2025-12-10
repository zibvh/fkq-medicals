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

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// // Form submission handling for Formspree
// const bookingForm = document.getElementById('bookingForm');
// if (bookingForm) {
//     bookingForm.addEventListener('submit', function(e) {
//         // Basic validation
//         let name = document.getElementById('name').value.trim();
//         let email = document.getElementById('email').value.trim();
//         let phone = document.getElementById('phone').value.trim();
//         let test = document.getElementById('test').value;
//         let date = document.getElementById('date').value;
        
//         if (!name || !email || !phone || !test || !date) {
//             e.preventDefault();
//             showToast('Please fill all required fields (*) correctly.');
//             return false;
//         }
        
        // // Email validation
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     e.preventDefault();
        //     showToast('Please enter a valid email address.');
        //     return false;
        // }
        
        // // Phone validation (basic Nigerian format)
        // const phoneRegex = /^[0-9+]{10,14}$/;
        // if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        //     e.preventDefault();
        //     showToast('Please enter a valid phone number.');
        //     return false;
        // }
        
//         // Show success message
//         showToast('Submitting your booking request...');
        
//         // Let Formspree handle the actual submission
//         // Form will submit normally to Formspree
//     });
// }

// // Toast notification function
// function showToast(message) {
//     let toast = document.getElementById('toast');
//     if (!toast) {
//         // Create toast if it doesn't exist
//         toast = document.createElement('div');
//         toast.id = 'toast';
//         document.body.appendChild(toast);
//     }
    
//     toast.textContent = message;
//     toast.className = 'show';
    
//     setTimeout(() => {
//         toast.className = toast.className.replace('show', '');
//     }, 3000);
// }

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
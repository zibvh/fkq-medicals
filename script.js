// Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Form Submission with Validation
if (document.getElementById('bookingForm')) {
    const bookingForm = document.getElementById('bookingForm');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const test = document.getElementById('test').value;
        const date = document.getElementById('date').value;
        
        // Validation
        if (!name || !email || !phone || !test || !date) {
            showToast('Please fill all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }
        
        // Phone validation (basic)
        if (phone.length < 10) {
            showToast('Please enter a valid phone number.', 'error');
            return;
        }
        
        // Date validation (not in past)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showToast('Please select a future date for appointment.', 'error');
            return;
        }
        
        // If using Formspree, let it handle submission
        // For demo purposes, show success message
        showToast('Appointment request submitted successfully! We will contact you soon.', 'success');
        
        // Reset form
        bookingForm.reset();
        
        // If you want to actually submit to Formspree, uncomment next line:
        // bookingForm.submit();
    });
}

// Toast Notification Function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    
    if (!toast) return;
    
    // Set message and type
    toast.textContent = message;
    toast.className = '';
    toast.classList.add(type);
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Date input minimum set to today
if (document.getElementById('date')) {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Set default value to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
}

// Emergency button animation
if (document.querySelector('.btn-emergency')) {
    const emergencyBtn = document.querySelector('.btn-emergency');
    
    setInterval(() => {
        emergencyBtn.classList.toggle('pulse');
    }, 2000);
}

// Add pulse animation class
const style = document.createElement('style');
style.textContent = `
    .pulse {
        animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(255, 107, 107, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(255, 107, 107, 0);
        }
    }
`;
document.head.appendChild(style);

// Page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loaded class style
    const loadedStyle = document.createElement('style');
    loadedStyle.textContent = `
        body.loaded {
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        body {
            opacity: 0;
        }
    `;
    document.head.appendChild(loadedStyle);
});

// Service items hover effect enhancement
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Update current year in footer
const currentYear = new Date().getFullYear();
document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = currentYear;
});
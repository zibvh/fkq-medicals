
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle menu open/close
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent immediate close when clicking toggle
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
// contact form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let test = document.getElementById("test").value;
    let date = document.getElementById("date").value;

if (name && email && phone && test && date) {
    showToast("successfull");
    document.getElementById("bookingForm").reset();
} else {
    showToast("Please fill all fields correctly.");
}
});

// Copyright (c) 2025 Bhus Zibah
// View only. Do not copy, modify, or distribute without permission.
// Contact: [bhuszibah@gmail.com]
    // Simple fade-in effect on scroll
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.about, .services').forEach(section => {
            let pos = section.getBoundingClientRect().top;
            if(pos < window.innerHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
function showToast(message) {
  let toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000); // disappears after 3 seconds
}

// Handle back button behavior
if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
    // On any inner page: pressing back takes you home
    history.pushState({}, "", window.location.href);

    window.addEventListener("popstate", function () {
        window.location.href = "index.html"; // always go to homepage
    });
} else {
    // On homepage: back exits normally (unless something is loading)
    let isLoading = false; // set this true when you show a loader

    window.addEventListener("popstate", function () {
        if (isLoading) {
            // Close or cancel loading instead of leaving
            closeLoader(); // define this function if needed
            isLoading = false;
            history.pushState({}, "");
        }
        // otherwise: default back = exit site
    });
}
/* ==========================================
   RESYVEX MASTER BRAND - MAIN JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Resyvex Master Brand website loaded');

    // Mobile menu toggle (if implemented)
    setupMobileMenu();

    // Form handling
    setupForms();

    // Smooth scrolling for anchor links
    setupSmoothScroll();
});

/* ==========================================
   MOBILE MENU TOGGLE
   ========================================== */

function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

/* ==========================================
   FORM HANDLING - FORMSPREE INTEGRATION
   ========================================== */

function setupForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Formspree will handle the submission via action attribute
            // This is just for client-side validation if needed
            
            const formData = new FormData(form);
            
            // Optional: Add client-side validation
            if (!validateForm(formData)) {
                e.preventDefault();
                showFormError('Please fill all required fields');
                return;
            }

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }
        });
    });
}

function validateForm(formData) {
    for (let [key, value] of formData.entries()) {
        if (key.includes('required') && !value.trim()) {
            return false;
        }
    }
    return true;
}

function showFormError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background: #fee;
        color: #c00;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 0.4rem;
        border-left: 4px solid #c00;
    `;

    const formContainer = document.querySelector('form');
    if (formContainer) {
        formContainer.parentNode.insertBefore(errorDiv, formContainer);
        setTimeout(() => errorDiv.remove(), 5000);
    }
}

/* ==========================================
   SMOOTH SCROLLING
   ========================================== */

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* ==========================================
   UTILITY: Detect active nav link
   ========================================== */

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--secondary-color)';
            link.style.borderBottom = '2px solid var(--secondary-color)';
        }
    });
}

// Call on page load
highlightActiveNav();









        const googleScriptURLcontact = "https://script.google.com/macros/s/AKfycbzSPxDw16GWhLoMtM0dtMlVnAePgeDT_g-DlqkyuaXRNYSf_OKoAcwu8AjNqLaHbYgr4w/exec";
        const formServiceURLcontact = "https://formspree.io/f/xdaygawe";

        document.getElementById("contactform").addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            // Send to Google Sheets
            await fetch(googleScriptURLcontact, {
            method: "POST",
            body: formData
            });

            // Send to Form Service
            await fetch(formServiceURLcontact, {
            method: "POST",
            body: formData
            });

            alert("Message sent successfully!");
            e.target.reset();

        } catch (error) {
            console.error(error);
            console.log("Error sending message.");
        }
        });





// const googleScriptURLcareer = "https://script.google.com/macros/s/AKfycbzIfqyXqRibsW4XZ3HUtJk4JMXpSDuLk2GsP_EaXWwzMl4ICf8Vwz99iOCo15mQdk4/exec";
// const formServiceURLcareer = "https://formspree.io/f/mwvabjbq";

// document.getElementById("careerform").addEventListener("submit", async (w) => {
// w.preventDefault();

// const formDatacareer = new FormData(w.target);

// try {
// 	// Send to Google Sheets
// 	await fetch(googleScriptURLcareer, {
// 	method: "POST",
// 	body: formDatacareer
// 	});

// 	// Send to Form Service
// 	await fetch(formServiceURLcareer, {
// 	method: "POST",
// 	body: formDatacareer
// 	});

//     alert("Message sent successfully!");
//     e.target.reset();

// } catch (error) {
//     console.error(error);
//     console.log("Error sending message.");
// }
// });
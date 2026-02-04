document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Management ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark-mode') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    // --- Product Card Logic ---
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const cartMessage = document.getElementById('cart-message');
    const productImg = document.getElementById('product-img');

    // Add to cart success message
    addToCartBtn.addEventListener('click', () => {
        cartMessage.classList.remove('hidden');
        setTimeout(() => {
            cartMessage.classList.add('hidden');
        }, 3000);
    });

    // Image Fallback
    productImg.addEventListener('error', () => {
        const container = productImg.parentElement;
        container.innerHTML = '<div class="img-fallback">Product Image Placeholder</div>';
    });

    // --- Form Validation Logic ---
    const registrationForm = document.getElementById('registration-form');
    const inputs = registrationForm.querySelectorAll('input');
    const formSuccessMsg = document.getElementById('form-success-msg');

    const validationRules = {
        fullname: {
            validate: (val) => val.trim() !== '',
            errorMsg: 'Full Name is required'
        },
        email: {
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
            errorMsg: 'Enter a valid email address'
        },
        password: {
            validate: (val) => val.length >= 8,
            errorMsg: 'Password must be at least 8 characters long'
        },
        'confirm-password': {
            validate: (val) => val === document.getElementById('password').value,
            errorMsg: 'Passwords do not match'
        }
    };

    // Validation on Blur
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        // Clear error as user types
        input.addEventListener('input', () => {
            clearError(input);
        });
    });

    function validateField(input) {
        const rule = validationRules[input.id];
        if (rule) {
            const isValid = rule.validate(input.value);
            if (!isValid) {
                showError(input, rule.errorMsg);
                return false;
            } else {
                clearError(input);
                return true;
            }
        }
        return true;
    }

    function showError(input, msg) {
        const errorElement = document.getElementById(`${input.id}-error`);
        input.classList.add('input-error');
        errorElement.textContent = msg;
    }

    function clearError(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        input.classList.remove('input-error');
        errorElement.textContent = '';
    }

    // Form Submission
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Success Behavior
            registrationForm.reset();
            formSuccessMsg.classList.remove('hidden');
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccessMsg.classList.add('hidden');
            }, 5000);

            // Optional: Smooth scroll to top of form to see success message
            formSuccessMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // --- Password Visibility Toggle ---
    const toggleButtons = document.querySelectorAll('.password-toggle');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            const icon = btn.querySelector('i');

            if (targetInput.type === 'password') {
                targetInput.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                targetInput.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    });
});

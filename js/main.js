document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbar = document.querySelector('.navbar');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-md)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }
    });

    console.log('FreshCart Frontend Loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Project card and modal functionality
    const projectCard = document.querySelector('.project-card');
    const projectModal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');

    if (projectCard && projectModal && closeModal) {
        projectCard.addEventListener('click', () => {
            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });

        closeModal.addEventListener('click', () => {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === projectModal) {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Add hover effect to project card
        projectCard.addEventListener('mouseenter', () => {
            projectCard.style.cursor = 'pointer';
        });
    }
});
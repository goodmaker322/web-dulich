document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('.about-section');
        function revealSections() {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if(rect.top < window.innerHeight - 60) {
                    section.classList.add('visible');
                }
            });
        }
        window.addEventListener('scroll', revealSections);
        revealSections();
    });
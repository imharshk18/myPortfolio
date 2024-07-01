// AOS

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });
});

// smooth scroll

document.addEventListener('DOMContentLoaded', () => {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
    });
});

//scroll section
function scrollToSection() {
    const section = document.getElementById('projects-section');
    section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const certificationImages = document.querySelectorAll('.cert-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    certificationImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    // Close the modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    //Close modal if clicked outside image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});



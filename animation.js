let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class to start animation
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the div is visible

// Observe all animatedDiv elements
document.querySelectorAll('.animation').forEach(div => {
    observer.observe(div);
});

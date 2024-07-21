document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Show or hide the button based on scroll position
    function toggleButtonVisibility() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Adjust the threshold as needed (e.g., 30% of the document height)
        if (scrollPosition > documentHeight * 0.2) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    }

    // Smooth scroll to the top when the button is clicked
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Listen for scroll events
    window.addEventListener("scroll", toggleButtonVisibility);

    // Initial check to set button visibility on page load
    toggleButtonVisibility();
});


hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}

function navigateTo(sectionId) {
    // Add 'active' class to the target section
    const targetSection = document.getElementById(sectionId);
    const isAlreadyVisible = isElementInViewport(targetSection);

    if (!isAlreadyVisible) {
        // Remove 'active' class from all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        targetSection.classList.add('active');

        // Set the duration of the scroll animation
        const duration = 1000; // in milliseconds
        const startTime = performance.now();
        const startScroll = window.scrollY;

        // Perform the scroll animation
        function scrollAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeInOutCubic = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startScroll + (targetSection.offsetTop - startScroll) * easeInOutCubic);

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var rootElement = document.documentElement;

    function handleScroll() {
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.2) {
            // Show button when 20% of the page is scrolled
            scrollToTopBtn.style.display = "block";
        } else {
            // Hide button when less than 20% of the page is scrolled
            scrollToTopBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);
});

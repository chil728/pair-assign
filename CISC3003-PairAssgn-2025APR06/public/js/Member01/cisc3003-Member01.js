function setActiveSectionLink() {
    // Get current hash (including #)
    const currentHash = window.location.hash;

    // Remove active class from all links
    document.querySelectorAll(".aside-link").forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
    });

    // Find matching link and activate it
    if (currentHash) {
        const activeLink = document.querySelector(
            `.aside-link[href="${currentHash}"]`
        );
        if (activeLink) {
            activeLink.classList.add("active");
            activeLink.setAttribute("aria-current", "page");
        }
    }
}

function updateActiveLinkOnScroll() {
    // Get all sections and aside links
    const sections = document.querySelectorAll("section");
    const asideLinks = document.querySelectorAll(".aside-link");
    // Find the viewport's vertical midpoint
    const viewportMid = window.innerHeight / 2;

    let activeSectionId = null;

    // Loop through each section and check if its midpoint is near the viewport's center
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the section occupies the middle of the screen
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            activeSectionId = section.getAttribute("id");
        }
    });

    // Remove active class from all aside links
    asideLinks.forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
    });

    // If an active section was found, add active class to its corresponding aside link
    if (activeSectionId) {
        const activeLink = document.querySelector(
            `.aside-link[href="#${activeSectionId}"]`
        );
        if (activeLink) {
            activeLink.classList.add("active");
            activeLink.setAttribute("aria-current", "page");
        }
    }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
    setActiveSectionLink();
    updateActiveLinkOnScroll();

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll(".card").forEach((card) => {
        observer.observe(card);
    });

    var typingEffect = new Typed(".typedText", {
        strings: ["Developer", "Designer", "Gamer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
    });

    const toggleMenu = document.querySelector(".toggle-menu");
    const sideBar = document.querySelector("aside");
    toggleMenu.addEventListener("click", () => {
        toggleMenu.classList.toggle('active');
        sideBar.classList.toggle('is-active');
    });
});

// Run whenever hash changes
window.addEventListener("hashchange", setActiveSectionLink);
window.addEventListener("scroll", updateActiveLinkOnScroll);

function setActiveSectionLink() {
    // Get current hash (including #)
    const currentHash = window.location.hash;

    // Remove active class from all links
    document.querySelectorAll("aside ul li a").forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
    });

    // Find matching link and activate it
    if (currentHash) {
        const activeLink = document.querySelector(
            `aside ul li a[href="${currentHash}"]`
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
    const asideLinks = document.querySelectorAll("aside ul li a");
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
            `aside ul li a[href="#${activeSectionId}"]`
        );
        if (activeLink) {
            activeLink.classList.add("active");
            activeLink.setAttribute("aria-current", "page");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const toggleMenu = document.querySelector(".toggle-menu");
    const navLinks = document.querySelector(".nav-links");

    toggleMenu.addEventListener("click", () => {
        toggleMenu.classList.toggle("active");
        navLinks.classList.toggle("show");
    })

    document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("visiting");
            link.setAttribute("aria-current", "page");
        }
    })
})

window.addEventListener("hashchange", setActiveSectionLink);
window.addEventListener("scroll", updateActiveLinkOnScroll);
document.addEventListener("DOMContentLoaded", () => {
    var typingEffect = new Typed(".typedText", {
        strings: ["Dev.", "Dev."],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
    });

    const toggleMenu = document.querySelector(".toggle-menu");
    const navLinks = document.querySelector(".nav-links");

    toggleMenu.addEventListener("click", () => {
        toggleMenu.classList.toggle("active");
        navLinks.classList.toggle("show");
    })
})
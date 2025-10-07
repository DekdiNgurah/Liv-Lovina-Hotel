// NAVBAR 
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        mobileMenu.classList.remove("hidden");
        const height = mobileMenu.scrollHeight + "px";
        mobileMenu.style.height = "0px"; // Reset height to 0 for transition

        requestAnimationFrame(() => {
            mobileMenu.style.height = height; // Set to full height for slide down
        });

        mobileMenu.addEventListener("transitionend", function handler() {
            mobileMenu.style.height = "auto";
            mobileMenu.removeEventListener("transitionend", handler);
        });

    } else {
        const height = mobileMenu.scrollHeight + "px";
        mobileMenu.style.height = height; // Set to full height for slide up

        requestAnimationFrame(() => {
            mobileMenu.style.height = "0px"; // Set to 0 for slide up
        })

        mobileMenu.addEventListener("transitionend", function handler() {
            mobileMenu.classList.add("hidden");
            mobileMenu.removeEventListener("transitionend", handler);
        })

    }
});

let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const curentScrollY = window.scrollY;

    if (curentScrollY > lastScrollY && curentScrollY > 50) {
        navbar.style.transform = "translateY(-100%)"; // Hide navbar on scroll down
    } else {
        navbar.style.transform = "translateY(0)"; // Show navbar on scroll up
    }

})
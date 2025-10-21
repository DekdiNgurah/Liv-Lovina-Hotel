// NAVBAR START
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        mobileMenu.classList.remove("hidden");
        const height = mobileMenu.scrollHeight + "px";
        mobileMenu.style.height = "0px"; 

        requestAnimationFrame(() => {
            mobileMenu.style.height = height; 
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
function confirmDelete() {
  if (confirm("Are you sure you want to delete this item?")) {
    // User clicked OK, proceed with deletion
    return true; 
  } else {
    // User clicked Cancel, prevent deletion
    return false;
  }
}
// NAVBAR END
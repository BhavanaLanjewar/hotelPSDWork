const mobile_nav = document.querySelector(".mobile_navbar_btn");
const nav_header = document.querySelector(".header")

const toggleNavbar = () => {
    // alert("hello");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
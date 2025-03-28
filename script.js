/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            nav.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });

    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });
});

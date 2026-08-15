/* =========================
   HOMEPAGE SLIDER
========================= */

let slideIndex = 1;

function showSlide(n) {

    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (slides.length === 0) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[slideIndex - 1].classList.add("active");

    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active");
    }
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

/* Automatic slider */

setInterval(function () {

    let slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        slideIndex++;
        showSlide(slideIndex);
    }

}, 5000);


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    if (nav) {
        nav.classList.toggle("show");
    }
}


/* =========================
   PROPERTY FILTER
========================= */

function filterProperties(category) {

    const properties = document.querySelectorAll(".property-card");

    properties.forEach(property => {

        if (category === "all") {
            property.style.display = "block";
        }

        else if (property.classList.contains(category)) {
            property.style.display = "block";
        }

        else {
            property.style.display = "none";
        }

    });
}


/* =========================
   CONTACT FORM
========================= */

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received. " +
        "Neha Real Estate Agency will contact you soon."
    );

    event.target.reset();
}
//Coded and documented by: John Does Code
//
//

// Script for Hamburger Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navContainer = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");
const navContainer2 = document.querySelector(".nav");
const navLinkItems2 = document.querySelectorAll(".nav a");

menuToggle.addEventListener("click", () => {
    navContainer.classList.toggle("active");
});

navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navContainer.classList.remove("active");
        }
    });
});

navLinkItems2.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth > 768) {
            navContainer2.classList.remove("active");
        }
    });
});

// === Section & Nav behavior ==

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
    const title = section.querySelector(".section-title");

    if (title) {
        title.addEventListener("click", () => {
            section.classList.toggle("active");

            const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (link) {
                if (section.classList.contains("active")) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
        });
    }
});

navLinkItems.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetID = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.classList.add("active");

            navLinkItems.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

navLinkItems2.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetID = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.classList.add("active");

            navLinkItems2.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Lightbox, manually edit the gallery entries to display additional items
// Make sure to specify the full path and correct filename.
let currentGallery = [];
let currentIndex = 0;

// Galleries with src + alt
const galleries = {
    gallery1: [
        { src: "assets/project1/img1.png", alt: "Homepage preview of To-do App Project" },
        { src: "assets/project1/img2.png", alt: "Snippets of html code for To-do App Project" },
        { src: "assets/project1/img3.png", alt: "Snippets of css code for To-do App Project" },
        { src: "assets/project1/img4.png", alt: "Snippets of jsript code for To-do App Project" }
    ],
    gallery2: [
        { src: "assets/project2/img1.png", alt: "Homepage preview of Weather App Project" },
        { src: "assets/project2/img2.png", alt: "Snippets of html code for Weather App Project" },
        { src: "assets/project2/img3.png", alt: "Snippets of css code for Weather App Project" },
        { src: "assets/project2/img4.png", alt: "Snippets of jsript code for Weather App Project" }
    ],
    gallery3: [
        { src: "assets/project3/img1.png", alt: "Homepage preview of Blog Site Project" },
        { src: "assets/project3/img2.png", alt: "Snippets of html code for Blog Site Project" },
        { src: "assets/project3/img3.png", alt: "Snippets of css code for Blog Site Project" },
        { src: "assets/project3/img4.png", alt: "Snippets of jscript for code Blog Site Project" },
        { src: "assets/project3/img5.png", alt: "Snippets of json code for Blog Site Project" }
    ]
};

// Display only the first image of each gallery as thumbnail
function loadGalleryThumbnail(galleryId, images) {
    const galleryDiv = document.getElementById(galleryId);
    if (images.length > 0) {
        const thumb = document.createElement("img");
        thumb.src = images[0].src;
        thumb.alt = images[0].alt;
        thumb.onclick = () => openLightbox(images, 0);
        galleryDiv.appendChild(thumb);
    }
}

// Open the lightbox & slideshow
function openLightbox(images, index) {
    currentGallery = images;
    currentIndex = index;
    document.getElementById("lightboxModal").style.display = "block";
    showImage();
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

// Show image in lightbox + alt caption
function showImage() {
    const imageElement = document.getElementById("lightboxImage");
    const captionElement = document.getElementById("lightboxCaption"); // 🆕 caption element
    const currentImage = currentGallery[currentIndex];

    imageElement.src = currentImage.src;
    imageElement.alt = currentImage.alt;

    // 🆕 Display alt text below image
    captionElement.textContent = currentImage.alt || "";
}

// Slideshow controls
function changeSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;
    showImage();
}

// Keyboard controls
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        changeSlide(1);
    } else if (event.key === "ArrowLeft") {
        changeSlide(-1);
    }
});

// Autoload gallery thumbnails on page load
window.onload = () => {
    loadGalleryThumbnail("gallery1", galleries.gallery1);
    loadGalleryThumbnail("gallery2", galleries.gallery2);
    loadGalleryThumbnail("gallery3", galleries.gallery3);
};

// Footer Year
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});

//Coded and documented by: John Does Code
//
//
// script for Hamburger Menu Toggle 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
// Toggle mennu opem/close
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Applicable to mobile devices only, will auto close menu
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

// script for animation for sections, animation includes hiding and displaying section content
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
    const title = section.querySelector(".section-title");
    title.addEventListener("click", () => {
//    If section is already active, close it upon clicking
        if (section.classList.contains("active")) {
            section.classList.remove("active");
        } else {
            // Close all other sections
            sections.forEach((s) => s.classList.remove("active"));
            // Open the clicked section
            section.classList.add("active");
        }
    });
});


// Lightbox, manually edit the gallery entries to display additional items
// Make sure to specify the full path and correct filename.
let currentGallery = [];
let currentIndex = 0;

const galleries = {
    gallery1: [
        "assets/project1/img1.png",
        "assets/project1/img2.png",
        "assets/project1/img3.png",
        "assets/project1/img4.png"
    ],
    gallery2: [
        "assets/project2/img1.png",
        "assets/project2/img2.png",
        "assets/project2/img3.png",
        "assets/project2/img4.png"
    ],
    gallery3: [
        "assets/project3/img1.png",
        "assets/project3/img2.png",
        "assets/project3/img3.png",
        "assets/project3/img4.png",
        "assets/project3/img5.png"
    ]
};

// This function displays only the first image of the gallery as thumbnail and will open the lightbox upon click
function loadGalleryThumbnail(galleryId, images) {
    const galleryDiv = document.getElementById(galleryId);
    if (images.length > 0) {
        const thumb = document.createElement("img");
        thumb.src = images[0];
        thumb.onclick = () => openLightbox(images, 0);
        galleryDiv.appendChild(thumb);
    }
}

// This function opens the lightbox & slideshow
function openLightbox(images, index) {
    currentGallery = images;
    currentIndex = index;
    document.getElementById("lightboxModal").style.display = "block";
    showImage();
}

// This function closes the lightbox
function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

// This function is for showing the images in lightbox
function showImage() {
    document.getElementById("lightboxImage").src = currentGallery[currentIndex];
}

// This function is for slideshow control
function changeSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;
    showImage();
}

// Adding keyboard control
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        changeSlide(1);
    } else if (event.key === "ArrowLeft") {
        changeSlide(-1);
    }
});

// Autoloading images from gallery
window.onload = () => {
    loadGalleryThumbnail("gallery1", galleries.gallery1);
    loadGalleryThumbnail("gallery2", galleries.gallery2);
    loadGalleryThumbnail("gallery3", galleries.gallery3);
};

// Footer Year
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});

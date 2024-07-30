// scripts.js

// Array of background image URLs
const backgrounds = [
    'https://png.pngtree.com/background/20230419/original/pngtree-website-technology-light-effect-space-background-picture-image_2448023.jpg',
    'https://e0.pxfuel.com/wallpapers/627/591/desktop-wallpaper-better-start-of-a-future-technology-background-portfolio.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9ti0H0X6yZvxLPZi-jiR2lqPztB-5KTbHw&s'
];

// Function to randomly select and set a background image
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    document.body.style.backgroundImage = `url('${selectedBackground}')`;
}

// Call the function when the page loads
window.onload = setRandomBackground;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation function
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

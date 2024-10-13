let currentIndex = 0; // Current slide index
const slides = document.querySelectorAll('.slide'); // Select all slides
const leftCurtain = document.querySelector('.curtain.left'); // Select the left curtain
const rightCurtain = document.querySelector('.curtain.right'); // Select the right curtain
let curtainsOpen = false; // State to track if curtains are open

function showSlides() {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Increment the index and reset if necessary
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Reset to the first slide
    }

    // Show the current slide
    slides[currentIndex].style.display = 'block';

    // Change slide every 5 seconds
    setTimeout(showSlides, 4000); 
}

// Initially show the first slide
showSlides();

// Function to toggle curtains
function toggleCurtains() {
    if (curtainsOpen) {
        leftCurtain.classList.remove('open'); // Close left curtain
        rightCurtain.classList.remove('open'); // Close right curtain
    } else {
        leftCurtain.classList.add('open'); // Open left curtain
        rightCurtain.classList.add('open'); // Open right curtain
    }
    curtainsOpen = !curtainsOpen; // Toggle state
}

// Add event listener to toggle curtains on click
document.querySelector('.slider').addEventListener('click', toggleCurtains);

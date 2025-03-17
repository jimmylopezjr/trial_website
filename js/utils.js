const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function moveCarousel() {
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.classList.add('active'); // Make the current card active
    } else {
      card.classList.remove('active'); // Remove active class from other cards
    }
  });

  // Move the track so the current card is in the center
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update the index to the next card
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0; // Loop back to the first card
  }
}

// Start the carousel
setInterval(moveCarousel, 3000); // Change card every 3 seconds

// Initialize: Mark the first card as active
cards[currentIndex].classList.add('active');

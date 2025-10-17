// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (10 images)
const slides = [
  { src: 'images/image01.jpg',
    alt: 'passport',
    caption: 'where I was born that I cannot change'
  },
  { src: 'images/image02.jpg',
    alt: 'my baby pic',
    caption: 'who I was'
  },
  { src: 'images/image03.jpg',
    alt: 'Tokyo tower',
    caption: 'Somewhere else where I can live'
  },
  { src: 'images/image04.jpg',
  	alt: 'statue of liberty',
  	caption: 'Where I am living'
  },
  { src: 'images/image05.jpg',
    alt: 'home',
    caption: 'But my true home is,'
  },
  { src: 'images/image06.jpg',
    alt: 'bday party',
    caption: 'my true home is,'
  },
  { src: 'images/image07.jpg',
    alt: 'lake',
    caption: 'Who am I'
  },
  { src: 'images/image08.jpg',
    alt: 'apartment',
    caption: 'Where am I'
  },
  { src: 'images/image09.jpg',
  	alt: 'home with dad and puppies',
  	caption: 'Where is my home'
  },
  { src: 'images/image10.jpg',
    alt: 'town',
    caption: 'What am I'
  }
];
let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
  const i = new Image();
  i.src = src;
});

// Helper to show slide
function showSlide(index) {
  const slide = slides[index];
  mainImage.src = slide.src; // replaces the image
  mainImage.alt = slide.alt; // replaces the alt of the image 
  caption.textContent = slide.caption; // updates caption text
}

// Advance on click
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);

// JavaScript Document
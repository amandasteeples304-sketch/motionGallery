import { animate } from "motion";

// List of images (replace with as many as you want)
const images = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
];
const images = ["https://picsum.photos/v2/list"];

let currentIndex = 0;

const img = document.getElementById("image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Button hover animations
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    animate(button, { scale: 1.1 }, { duration: 0.2 });
  });

  button.addEventListener("mouseleave", () => {
    animate(button, { scale: 1 }, { duration: 0.2 });
  });
});

// Show image with sliding animation
function showImage(direction) {
  animate(
    img,
    { opacity: 0, x: direction === "next" ? -100 : 100 },
    { duration: 0.3 },
  ).finished.then(() => {
    img.src = images[currentIndex];

    animate(
      img,
      { opacity: [0, 1], x: [direction === "next" ? 100 : -100, 0] },
      { duration: 0.4 },
    );
  });
}

// Button click events
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage("next");
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage("prev");
});

// Initialize first image
img.src = images[currentIndex];

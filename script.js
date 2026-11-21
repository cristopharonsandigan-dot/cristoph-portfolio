const slideDescriptions = [
  {
    java: "Basic knowledge of Java programming, including variables, conditional statements, loops, arrays, methods, and object-oriented programming.",
    python: "Basic knowledge of Python programming, including variables, conditions, and simple programs.",
    problem: "Able to understand programming problems and create simple solutions using code.",
    computer: "Familiar with common computer applications and basic technology concepts."
  },
  {
    java: "I can write simple Java programs and practice using loops, arrays, conditions, and methods.",
    python: "I can use Python fundamentals to create small programs and practice logical thinking.",
    problem: "I break a task into smaller steps, understand what is needed, and work toward a clear solution.",
    computer: "I can use common computer applications, manage files, and work with basic digital tools."
  },
  {
    java: "I continue to improve my Java skills by practicing object-oriented programming and solving exercises.",
    python: "I continue learning Python by experimenting with code and building simple program examples.",
    problem: "I use logical thinking, patience, and step-by-step testing when solving coding challenges.",
    computer: "I am developing confidence with computer hardware, software, internet tools, and digital tasks."
  }
];

let currentSlide = 0;
const descriptionElements = document.querySelectorAll(".skill-description");
const slideCount = document.getElementById("slideCount");

function showSlide(index) {
  currentSlide = (index + slideDescriptions.length) % slideDescriptions.length;
  descriptionElements.forEach((element) => {
    element.style.opacity = "0";
    window.setTimeout(() => {
      element.textContent = slideDescriptions[currentSlide][element.dataset.skill];
      element.style.opacity = "1";
    }, 130);
  });
  slideCount.textContent = `${currentSlide + 1} / ${slideDescriptions.length}`;
}

document.getElementById("prevSlide").addEventListener("click", () => showSlide(currentSlide - 1));
document.getElementById("nextSlide").addEventListener("click", () => showSlide(currentSlide + 1));

// Keep in-page navigation smooth even on browsers that do not support CSS smooth scrolling.
document.querySelectorAll('.navigation a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

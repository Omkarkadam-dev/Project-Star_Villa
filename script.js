// Optional: Smooth scroll for CTA link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, {
    threshold: 0.3
  });

  features.forEach(feature => observer.observe(feature));
});

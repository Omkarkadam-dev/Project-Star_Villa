// Optional: Smooth scroll for CTA link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
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


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-item img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            const src = img.getAttribute("src");
            openLightbox(src);
        });
    });

    function openLightbox(src) {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.cssText = `
      position:fixed;
      top:0; left:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.8);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:1000;
    `;
        const img = document.createElement("img");
        img.src = src;
        img.style.maxWidth = "90%";
        img.style.maxHeight = "80%";
        img.style.borderRadius = "10px";

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });
    }
});


document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (!name || !email || !phone || !checkin || !checkout || !guests) {
        document.getElementById('bookingResponse').textContent = "Please fill all fields.";
        document.getElementById('bookingResponse').style.color = 'red';
        return;
    }

    document.getElementById('bookingResponse').textContent = "Booking request submitted! We will contact you soon.";
    document.getElementById('bookingResponse').style.color = 'green';
    document.getElementById('bookingForm').reset();
});


// Scroll to Top Button
document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

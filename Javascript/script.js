// ================================
// Combined Script.js for New Camo
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // =======================
  // 1. FORM VALIDATION & THANK YOU MESSAGE
  // =======================
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent default submit
      let valid = true;
      const inputs = form.querySelectorAll("input, select");

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = "#ff0000";
          if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-msg")) {
            const error = document.createElement("span");
            error.textContent = "This field is required";
            error.className = "error-msg";
            error.style.color = "#ff0000";
            error.style.fontSize = "12px";
            input.after(error);
          }
        } else {
          input.style.borderColor = "#ccc";
          if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-msg")) {
            input.nextElementSibling.remove();
          }
        }
      });

      if (valid) {
        alert("Thank you for submitting! You will be redirected to the homepage.");
        window.location.href = "index.html"; // redirect to home
      }
    });
  });

  // =======================
  // 2. LIGHTBOX FOR PRODUCT IMAGES
  // =======================
  const images = document.querySelectorAll(".product-card img");
  if (images.length) {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.8)";
    lightbox.style.display = "flex";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.visibility = "hidden";
    lightbox.style.opacity = 0;
    lightbox.style.transition = "opacity 0.3s ease";
    document.body.appendChild(lightbox);

    const img = document.createElement("img");
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "10px";
    lightbox.appendChild(img);

    images.forEach(image => {
      image.addEventListener("click", () => {
        img.src = image.src;
        lightbox.style.visibility = "visible";
        lightbox.style.opacity = 1;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.opacity = 0;
      setTimeout(() => { lightbox.style.visibility = "hidden"; }, 300);
    });
  }

  // =======================
  // 3. STICKY HEADER SCROLL EFFECT
  // =======================
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.padding = "5px 20px";
        header.style.backgroundColor = "#111";
        header.style.transition = "all 0.3s ease";
      } else {
        header.style.padding = "10px 20px";
        header.style.backgroundColor = "#222";
      }
    });
  }

  // =======================
  // 4. SMOOTH SCROLL NAVIGATION
  // =======================
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // =======================
  // 5. CTA BUTTON HOVER ANIMATION
  // =======================
  document.querySelectorAll(".cta-btn, .btn-primary, .btn-outline").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.transition = "transform 0.2s ease";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });

  // =======================
  // 6. OPTIONAL: DEFAULT DATE FOR FORM
  // =======================
  const dateInput = document.getElementById("date");
  if (dateInput) {
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

});

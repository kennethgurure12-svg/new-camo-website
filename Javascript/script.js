// ============================
// 1. CONTACT & ENQUIRY FORM VALIDATION + THANK YOU REDIRECT
// ============================
document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const inputs = form.querySelectorAll("input[required], textarea[required]");
            let isValid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.border = "2px solid red";
                    isValid = false;
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (isValid) {
                alert("Thank you for your message! You will be redirected to the home page.");
                window.location.href = "home.html";
            } else {
                alert("Fill the whole form baba kanti keng?");
            }
        });
    });
});


// ============================
// 3. NAVBAR BEHAVIOR FIX (ENSURES LIGHTBOX STAYS ABOVE NAVBAR)
// ============================
const style = document.createElement("style");
style.innerHTML = `
.lightbox {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex; justify-content: center; align-items: center;
    z-index: 9999; /* ensures lightbox is above navbar */
}
.lightbox-content {
    position: relative;
}
.lightbox img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 10px;
}
.close-lightbox {
    position: absolute;
    top: -20px; right: -20px;
    background: white;
    color: black;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50%;
    width: 35px; height: 35px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
}
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", () => {

  // Lightbox for product images
  const images = document.querySelectorAll(".product-img");
  images.forEach(img => {
    img.addEventListener("click", () => {

      // Create overlay
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
      `;

      // Create enlarged image
      const lightboxImg = document.createElement("img");
      lightboxImg.src = img.src;
      lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(255,255,255,0.2);
      `;

      overlay.appendChild(lightboxImg);
      document.body.appendChild(overlay);

      // Close on click
      overlay.addEventListener("click", () => overlay.remove());
    });
  });

});

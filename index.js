// You can add interactivity here if needed
document.addEventListener("DOMContentLoaded", function () {
  // Example: Scroll to features section when CTA button is clicked
  document.querySelector(".cta-button").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
  });
});

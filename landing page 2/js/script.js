// script.js

// Example JavaScript code for interactivity
document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Button clicked! You can add more functionality here.");
    });
});

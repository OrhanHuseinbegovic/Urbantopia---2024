// Initialize language from localStorage or set default to 'bs'
let currentLang = localStorage.getItem("currentLang") || "bs";
localStorage.setItem("currentLang", currentLang);

// Function to update the content based on the selected language
function updateLanguageContent() {
    const elements = document.querySelectorAll("[data-bs][data-en]");
    const heroContent = document.querySelector(".hero-content");

    elements.forEach((el) => {
        if (el.hasAttribute("placeholder")) {
            el.placeholder = currentLang === "bs" ? el.getAttribute("data-bs") : el.getAttribute("data-en");
        } else {
            el.innerHTML = currentLang === "bs" ? el.getAttribute("data-bs") : el.getAttribute("data-en");
        }
    });

    // Update hero content attributes
    if (heroContent) {
        heroContent.setAttribute("data-lang", currentLang);
    }
}

// Function to toggle the language
function toggleLanguage() {
    // Toggle the language
    currentLang = currentLang === "bs" ? "en" : "bs";
    localStorage.setItem("currentLang", currentLang);

    // Update the content
    updateLanguageContent();
}

// Attach event listener to the toggle button
const languageToggle = document.getElementById("languageToggle");
if (languageToggle) {
    languageToggle.addEventListener("click", toggleLanguage);
}

// Initial content update
document.addEventListener("DOMContentLoaded", updateLanguageContent);

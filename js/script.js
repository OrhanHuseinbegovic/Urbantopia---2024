// Language toggle function
const languageToggle = document.getElementById('languageToggle');
let currentLang = 'bs';

function toggleLanguage() {
    // Toggle text content for language-specific elements
    const elements = document.querySelectorAll('[data-bs][data-en]');
    elements.forEach(el => {
        if (el.hasAttribute('placeholder')) {
            // If the element has a placeholder, toggle it
            el.placeholder = currentLang === 'bs' ? el.getAttribute('data-en') : el.getAttribute('data-bs');
        } else if (el.getAttribute('data-bs').includes('<br>')) {
            // If the element's data attributes contain <br>, handle each line separately
            const bsText = el.getAttribute('data-bs').split('<br>');
            const enText = el.getAttribute('data-en').split('<br>');
            // Join lines with <br> based on the current language
            el.innerHTML = currentLang === 'bs' ? enText.join('<br>') : bsText.join('<br>');
        } else {
            // For elements without <br>, toggle text content directly
            el.textContent = currentLang === 'bs' ? el.getAttribute('data-en') : el.getAttribute('data-bs');
        }
    });

    // Toggle flag icon and text
    const flagIcon = document.getElementById('flagIcon');
    const flagText = languageToggle.querySelector('span');
    if (currentLang === 'bs') {
        flagIcon.src = 'assets/icons/bosnia.png';
        flagIcon.alt = 'Bosanski';
        flagText.textContent = 'Bosanski';
        currentLang = 'en';
    } else {
        flagIcon.src = 'assets/icons/usa.png';
        flagIcon.alt = 'English';
        flagText.textContent = 'English';
        currentLang = 'bs';
    }
}

// Attach the unified event listener
languageToggle.addEventListener('click', toggleLanguage);

// Scroll and observer handlers
const elements = document.querySelectorAll('.hidden');
function scrollHandler() {
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 290) {
            element.classList.add('show');
        }
    });
}
window.addEventListener('scroll', scrollHandler);

document.addEventListener("DOMContentLoaded", function() {
    const clientCards = document.querySelectorAll(".client-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("pop-up");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    clientCards.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sectionTitle = document.querySelector(".clients-section h2");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sectionTitle.classList.add("glow");
            } else {
                sectionTitle.classList.remove("glow");
            }
        });
    }, { threshold: 0.1 });
    observer.observe(sectionTitle);
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-custom");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.getElementById('scroll-left').addEventListener('click', function() {
    document.querySelector('.services-carousel').scrollBy({
        left: -260, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.querySelector('.services-carousel').scrollBy({
        left: 260, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});

document.getElementById('forma').addEventListener('submit', function (event) {
    event.preventDefault(); // Spriječi defaultno ponašanje forme

    const formData = new FormData(this);

    fetch('forma.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response-message').innerHTML = data;
    })
    .catch(error => {
        document.getElementById('response-message').innerHTML = 'Došlo je do greške prilikom slanja poruke.';
    });
});
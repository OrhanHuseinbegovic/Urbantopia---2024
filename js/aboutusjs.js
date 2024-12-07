/*--------------------- LANGUAGE CHANGE FUNCTION START ------------------------ */
/*
const languageToggle = document.getElementById('languageToggle');
//let currentLang = 'bs';

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-bs][data-en]');

    elements.forEach(el => {
        if (el.hasAttribute('placeholder')) {
            el.placeholder = currentLang === 'bs' ? el.getAttribute('data-en') : el.getAttribute('data-bs');
        } else {
            el.innerHTML = currentLang === 'bs' ? el.getAttribute('data-en') : el.getAttribute('data-bs');
        }
    });

    // Toggle the button text
    languageToggle.innerHTML = currentLang === 'bs' ? languageToggle.getAttribute('data-en') : languageToggle.getAttribute('data-bs');

    // Toggle the language
    currentLang = currentLang === 'bs' ? 'en' : 'bs';
}

// Attach the event listener
languageToggle.addEventListener('click', toggleLanguage);
*/
/*--------------------- LANGUAGE CHANGE FUNCTION END ------------------------ */
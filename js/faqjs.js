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
document.addEventListener("pageChange", function () {
    updateLanguageContent();
    console.log("Translation applied to FAQ");
});

/*--------------------- FILTER QUESTIONS START ------------------------ */
function filterFAQs() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
        const question = item.querySelector('.accordion-button').textContent.toLowerCase();
        item.style.display = question.includes(query) ? '' : 'none';
    });
}
/*--------------------- FILTER QUESTIONS END ------------------------ */
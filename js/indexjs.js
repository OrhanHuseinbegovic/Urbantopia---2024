/*--------------------- LANGUAGE CHANGE FUNCTION START ------------------------ */
/*
const languageToggle = document.getElementById('languageToggle');
//let currentLang = 'bs';

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-bs][data-en]');
    const heroContent = document.querySelector('.hero-content');

    elements.forEach(el => {
        if (el.hasAttribute('placeholder')) {
            el.placeholder = currentLang === 'bs' ? el.getAttribute('data-en') : el.getAttribute('data-bs');
        } else if (el.tagName.toLowerCase() === 'li' || el.tagName.toLowerCase() === 'h3') {
            el.innerHTML = currentLang === 'bs' ? el.getAttribute('data-en') : el.getAttribute('data-bs');
        } else {
            el.innerHTML = currentLang === 'bs' ? el.getAttribute('data-en') : el.getAttribute('data-bs');
        }
    });

    // Adjust text alignment and margin based on language
    heroContent.setAttribute('data-lang', currentLang);

    // Toggle the language
    currentLang = currentLang === 'bs' ? 'en' : 'bs';
}

// Attach the event listener
languageToggle.addEventListener('click', toggleLanguage);
*/
/*--------------------- LANGUAGE CHANGE FUNCTION END ------------------------ */


/*--------------------- SERVICES SECTION START ------------------------ */
document.getElementById('scroll-left').addEventListener('click', function () {
    document.querySelector('.services-carousel').scrollBy({
        left: -260, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function () {
    document.querySelector('.services-carousel').scrollBy({
        left: 260, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
});
/*--------------------- SERVICES SECTION START ------------------------ */


/*--------------------- FORMS  START ------------------------ */
// Function to show modal message
function showModalMessage(message) {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.querySelector('p').innerText = message;
    modalOverlay.classList.remove('modal-hidden');
}

// Close modal on button click
document.getElementById('modal-close-btn').addEventListener('click', function () {
    document.getElementById('modal-overlay').classList.add('modal-hidden');
});

// Function to handle form submission
function handleFormSubmit(formId, backendUrl) {
    document.getElementById(formId).addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch(backendUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                showModalMessage("Form submitted successfully!");
                document.getElementById(formId).reset();
            })
            .catch(error => {
                document.getElementById('response-message').innerHTML = 'Došlo je do greške prilikom slanja poruke.';
            });
    });
}

// Initialize form event listeners
handleFormSubmit('formOne', 'backend/form.php');
handleFormSubmit('formTwo', 'backend/formTwo.php');

/*--------------------- FORMS  START ------------------------ */
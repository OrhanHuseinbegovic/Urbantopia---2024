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
    const form = document.getElementById(formId);
    if (!form) {
        console.error(`Form with id '${formId}' not found.`);
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop default form submission
        console.log("Submit event triggered for", formId);

        const formData = new FormData(this);
        if(localStorage.getItem("currentLang") == "en"){
            formData.set("language", "en");
          }else{
            formData.set("language", "bs");
        }

        fetch(backendUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                showModalMessage("Form submitted successfully!");
                form.reset();
            })
            .catch(error => {
                document.getElementById('response-message').innerHTML = 'Došlo je do greške prilikom slanja poruke.';
            });
    });
}

// Initialize form event listeners
document.addEventListener('DOMContentLoaded', function () {
    handleFormSubmit('formOne', 'backend/form.php');
    handleFormSubmit('formTwo', 'backend/formTwo.php');
});

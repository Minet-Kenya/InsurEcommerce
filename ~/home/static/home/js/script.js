
/**
 * Learn-More-Toast
 */
const path = window.location.pathname;
const learnMoreToast = document.getElementById('learn_more_toast')

if (path === "/") {
    document.addEventListener('DOMContentLoaded', function () {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(learnMoreToast);
        setTimeout(function () {
            toastBootstrap.show(); // Trigger the toast after two seconds
        }, 2000);

    });
}

/**
 * Disable form buttons until recapture is successful
 */
// const recaptchaCheckbox = document.querySelector(".g-recaptcha");
const formButton = document.querySelector("#accounts .accounts-form button[type=submit]");

// Initially disable the form button
if (formButton) {
    formButton.disabled = true;
}

// on data-callback
var enableBtn = function(token) {
    formButton.disabled = false;
};

// data-expired-callback
var disableBtn = function() {
    formButton.disabled = true;
};

/**
 * Form Vlidation
 */
const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})
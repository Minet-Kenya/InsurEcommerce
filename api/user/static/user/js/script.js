/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

/**
* Preloader
*/
const preloader = select('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
}

/**
 * Student Form Validation
 */
const studentloginform = select('.studentloginform')
const studentloginAlertError = select("#studentloginform .alert-danger");
const studentloginAlertSuccess = select("#studentloginform .alert-success");
const studentloginLoading = select("#studentloginform .loading");


studentloginform.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        showLoading("studentloginform");

        // Serialize form data
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "/user/login/");
        xhr.setRequestHeader("X-CSRFToken", document.getElementsByName("csrfmiddlewaretoken")[0].value);
        xhr.responseType = "json";

        xhr.onload = function () {
            hideLoading("studentloginform");

            if (xhr.status == 200) {
                handleSuccess("studentloginform", xhr.response.message);
            } else {
                handleError("studentloginform", "Invalid username or password Student credentials");
            }
        };

        xhr.onerror = function () {
            hideLoading("studentloginform");

            // Handle network errors
            handleError("studentloginform", "A network error occurred. Please check your connection and try again.");
        };

        // Send the request with the form data
        xhr.send(formData);
    }

}, false)

/**
 * Instructor Form Validation
 */
const instructorloginform = select('.instructorloginform')
const instructorloginAlertError = select("#instructorloginform .alert-danger");
const instructorloginAlertSuccess = select("#instructorloginform .alert-success");
const instructorloginLoading = select("#instructorloginform .loading");


instructorloginform.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        showLoading("instructorloginform");

        // Serialize form data
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "/user/login/");
        xhr.setRequestHeader("X-CSRFToken", document.getElementsByName("csrfmiddlewaretoken")[0].value);
        xhr.responseType = "json";

        xhr.onload = function () {
            hideLoading("instructorloginform");

            if (xhr.status == 200) {
                handleSuccess("instructorloginform", xhr.response.message);
            } else {
                handleError("instructorloginform", "Invalid username or password Instructor credentials");
            }
        };

        xhr.onerror = function () {
            hideLoading("instructorloginform");

            // Handle network errors
            handleError("instructorloginform", "A network error occurred. Please check your connection and try again.");
        };

        // Send the request with the form data
        xhr.send(formData);
    }

}, false)

/**
 * Admin Form Validation
 */
const adminloginform = select('.adminloginform')
const adminloginAlertError = select("#adminloginform .alert-danger");
const adminloginAlertSuccess = select("#adminloginform .alert-success");
const adminloginLoading = select("#adminloginform .loading");


adminloginform.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        showLoading("adminloginform");

        // Serialize form data
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "/user/login/");
        xhr.setRequestHeader("X-CSRFToken", document.getElementsByName("csrfmiddlewaretoken")[0].value);
        xhr.responseType = "json";

        xhr.onload = function () {
            hideLoading("adminloginform");

            if (xhr.status == 200) {
                handleSuccess("adminloginform", xhr.response.message);
            } else {
                handleError("adminloginform", "Invalid username or password Admin credentials");
            }
        };

        xhr.onerror = function () {
            hideLoading("adminloginform");

            // Handle network errors
            handleError("adminloginform", "A network error occurred. Please check your connection and try again.");
        };

        // Send the request with the form data
        xhr.send(formData);
    }

}, false)

/**
 * Form validation functions
 */
function showLoading(formtype) {
    if (formtype === "studentloginform") {
        studentloginLoading.classList.remove("d-none");
        studentloginAlertError.classList.add("d-none");
        studentloginAlertSuccess.classList.add("d-none");
    } else if (formtype === "instructorloginform") {
        instructorloginLoading.classList.remove("d-none");
        instructorloginAlertError.classList.add("d-none");
        instructorloginAlertSuccess.classList.add("d-none");
    } else if (formtype === "adminloginform") {
        adminloginLoading.classList.remove("d-none");
        adminloginAlertError.classList.add("d-none");
        adminloginAlertSuccess.classList.add("d-none");
    }
}

function hideLoading(formtype) {
    if (formtype === "studentloginform") {
        studentloginLoading.classList.add("d-none");
    } else if (formtype === "instructorloginform") {
        instructorloginLoading.classList.add("d-none");
    } else if (formtype === "adminloginform") {
        adminloginLoading.classList.add("d-none");
    }
}

function showError(formtype, errorMessage) {
    if (formtype === "studentloginform") {
        studentloginAlertError.textContent = errorMessage;
        studentloginAlertError.classList.remove("d-none");
        studentloginAlertSuccess.classList.add("d-none");
    } else if (formtype === "instructorloginform") {
        instructorloginAlertError.textContent = errorMessage;
        instructorloginAlertError.classList.remove("d-none");
        instructorloginAlertSuccess.classList.add("d-none");
    } else if (formtype === "adminloginform") {
        adminloginAlertError.textContent = errorMessage;
        adminloginAlertError.classList.remove("d-none");
        adminloginAlertSuccess.classList.add("d-none");
    }
}

function handleSuccess(formtype, successMessage) {
    console.log(successMessage);

    if (formtype === "studentloginform") {
        studentloginAlertError.classList.add("d-none");
        studentloginAlertSuccess.textContent = successMessage;
        studentloginAlertSuccess.classList.remove("d-none");
        studentloginform.classList.remove('was-validated');
    } else if (formtype === "instructorloginform") {
        instructorloginAlertError.classList.add("d-none");
        instructorloginAlertSuccess.textContent = successMessage;
        instructorloginAlertSuccess.classList.remove("d-none");
        instructorloginform.classList.remove('was-validated');
    } else if (formtype === "adminloginform") {
        adminloginAlertError.classList.add("d-none");
        adminloginAlertSuccess.textContent = successMessage;
        adminloginAlertSuccess.classList.remove("d-none");
        adminloginform.classList.remove('was-validated');
    }

    let urlParams = new URLSearchParams(window.location.search);
    let nextUrl = urlParams.get('next');
    window.location.href = nextUrl ? nextUrl : '/';
}

function handleError(formtype, errorMessage) {
    console.error("There was a problem with the request:", errorMessage);
    showError(formtype, errorMessage);
}

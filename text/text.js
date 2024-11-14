const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    emailInput.setCustomValidity("");

    if (!emailInput.validity.valid) {
        emailInput.setCustomValidity("Please enter a valid email address.");
    }

    if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
    } else {
        console.log("Form submitted with valid email:", emailInput.value);
    }
});
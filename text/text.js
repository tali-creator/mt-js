// const form = document.getElementById("emailForm");
// const emailInput = document.getElementById("email");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     emailInput.setCustomValidity("");

//     if (!emailInput.validity.valid) {
//         emailInput.setCustomValidity("Please enter a valid email address.");
//     }

//     if (!emailInput.checkValidity()) {
//         emailInput.reportValidity();
//     } else {
//         console.log("Form submitted with valid email:", emailInput.value);
//     }
// });

const btn = document.getElementById("toggle")
const list = document.getElementById("list");
list.style.display = "none"

let toggle = true
btn.addEventListener("click", () => {
    toggle = !toggle
    if(!toggle){
        list.style.display = "none"
    }else{
        list.style.display = "block"
    }
})
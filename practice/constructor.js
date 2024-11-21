const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const submit = document.querySelector("form");
const deleteBtn = document.getElementById("delete");
let index = 0;

class User {
    constructor(fullName, email) {
        this.fullName = fullName
        this.email = email
    }
}

const userArr = []
submit.addEventListener("submit", function (e) {
    e.preventDefault()
    const user = new User(fullName.value, email.value)
    userArr.push(user)
    console.log(userArr)
    fullName.value = ""
    email.value = ""
})

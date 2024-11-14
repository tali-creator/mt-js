const displayScreen = document.getElementById("displayScreen");
const inputBtn = document.querySelectorAll(".keys");
let questionInput = displayScreen.firstElementChild;
const specialFunction = document.querySelectorAll('.special');
Array.from(inputBtn).forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        questionInput.textContent += e.target.textContent;
    })
});
function evalExpression(expression) {
    const multiplyDivide = expression.split(/(\+|\-)/).map(term => {
        if (term.includes('*') || term.includes("/")) {
            return term.split(/(\*|\/)/).reduce((acc, val, idx, arr) => {
                if (val === "*") return acc * Number(arr[++idx]);
                else if (val === "/") return acc / Number(arr[++idx])
                return acc === null ? Number(val) : acc
            }, null
            )
        }
        return term;
    })
    return multiplyDivide.reduce((acc, val, idx, arr) => {
        if (val === "+") return acc + Number(arr[++idx]);
        else if (val === "-") return acc - Number(arr[++idx])
        return acc === null ? Number(val) : acc;
    }, null);
}

//get operation buttons
const operationBtns = document.querySelector(".operation");
operationBtns.addEventListener('click', function () {
    const expression = questionInput.textContent;
    if (expression.includes("+") || expression.includes("*") || expression.includes("-") || expression.includes("/")) {
        const result = evalExpression(expression)
        questionInput.nextElementSibling.textContent = result;
    }
});

//special function
Array.from(specialFunction).forEach(function(func){
    func.addEventListener("click" ,function(event){
        let newInput = questionInput.textContent
        if(event.target.textContent === "Del"){
            questionInput.textContent = newInput.slice(0,-1);
        }else{
            questionInput.textContent = newInput.slice(-1,0)
            questionInput.nextElementSibling.textContent = "";
        }
    })
})
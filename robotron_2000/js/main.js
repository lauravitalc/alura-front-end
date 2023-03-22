const subtract = document.querySelector("#subtract");
const sum    = document.querySelector("#sum");
const arm    = document.querySelector("#arm");

const control = document.querySelectorAll(".controle-ajuste");
control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.textContent)
    })
})

// Not Dinamic:
// sum.addEventListener("click", () => { manipulateData("sum")})
// subtract.addEventListener("click", () => {manipulateData("subtract")})

function manipulateData(operacao){
 if(operacao === "-"){
    arm.value = parseInt(arm.value) - 1
 } else {
    arm.value = parseInt(arm.value) + 1
 }
}
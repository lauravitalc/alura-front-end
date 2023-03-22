const control = document.querySelectorAll("[data-control]");
control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.control, event.target.parentNode)
    })
})

// Not Dinamic:
// sum.addEventListener("click", () => { manipulateData("sum")})
// subtract.addEventListener("click", () => {manipulateData("subtract")})

function manipulateData(operacao, controle){
    const part = controle.querySelector("[data-count]");
 if(operacao === "-"){
    part.value = parseInt(part.value) - 1
 } else {
    part.value = parseInt(part.value) + 1
 }
}
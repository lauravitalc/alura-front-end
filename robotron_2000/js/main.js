const control = document.querySelectorAll("[data-control]");
const statistics = document.querySelectorAll("[data-statistics]");

const pecas = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "nucleos":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.textContent, event.target.parentNode)
        updateStatistics(event.target.dataset.control);
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

function updateStatistics(part){
    statistics.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + pecas[part][element.dataset.statistics]
    })
}
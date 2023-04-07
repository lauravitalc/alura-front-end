const form = document.getElementById("novoItem");
const list = document.getElementById('lista');

form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(event.target.elements['nome'].value);
    criaElemento(e.target.elements['nome'].value, e.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade){
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    // why appendChild() first?
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome; 

    list.appendChild(novoItem);
}
const form = document.getElementById("novoItem");
const list = document.getElementById('lista');
// Lembra que ao enviar os dados para o Local Storage nós transformamos aquilo tudo em uma string? Fizemos o stringify e precisamos agora quando recebe esses dados transformar esses dados para o JavaScript e fazemos isso através do Json.parse, mandamos ele parsear isso tudo aqui.
const itens = JSON.parse(localStorage.getItem("itens")) || [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    const nome =  e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);
    
    nome.value = '';
    quantidade.value = '';
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

    // O método localStorage.getItem() é utilizado para acessar uma informação salva no localStorage.
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

     // Necessário ter um array de objetos para que os dados não se sobrescrevam no localStorage.
    itens.push(itemAtual);

    // O localStorage só lê uma string.
    localStorage.setItem("itens", JSON.stringify(itens));

    // Só para deixar tudo muito claro, toda vez que eu preciso criar um grupo de elementos, um grupo de informações referentes aquele mesmo elemento, eu crio um objeto e aqui eu tenho o par chave valor dentro do objeto, nome/nome, e toda vez que eu preciso juntar esse grupo de informações em um único lugar, eu crio um array com esses grupos, nesse caso um array de objetos.
    // Os tipos de dados armazenados no localStorage não devem ser considerados sensíveis, de acordo com a LGPD (Lei Geral de Proteção de Dados). Isso ocorre, pois ele não possui nenhuma camada de proteção, e os dados podem ser acessados facilmente por terceiros. Dados considerados sensíveis, devem ser armazenados em Cookies.
}
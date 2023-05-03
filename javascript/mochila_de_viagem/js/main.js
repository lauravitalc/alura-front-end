const form = document.getElementById("novoItem");
const list = document.getElementById('lista');
// Lembra que ao enviar os dados para o Local Storage nós transformamos aquilo tudo em uma string? Fizemos o stringify e precisamos agora quando recebe esses dados transformar esses dados para o JavaScript e fazemos isso através do Json.parse, mandamos ele parsear isso tudo aqui.
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(function(e){
    criaElemento(e);
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    const nome =  e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const exists = itens.find(elemento => elemento.nome === nome.value)

    // O método localStorage.getItem() é utilizado para acessar uma informação salva no localStorage.
     const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(exists){
        itemAtual.id = exists.id; 
        // O código acima verifica se existe algum elemento com o mesmo nome. Caso exista, ele guarda o objeto na const existe, ou undefined caso não exista.

        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento => elemento.id === exists.id)] = itemAtual; // A posição que está o nosso conteúdo é o existe ID, eu vou no nosso array de itens na posição existe.id e vou trocar o conteúdo dele, vou escrever por cima do conteúdo dele o item atual.
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0
        criaElemento(itemAtual);
        // Necessário ter um array de objetos para que os dados não se sobrescrevam no localStorage.
        itens.push(itemAtual);
    }
   
    // O localStorage só lê uma string.
    localStorage.setItem("itens", JSON.stringify(itens));

    // Só para deixar tudo muito claro, toda vez que eu preciso criar um grupo de elementos, um grupo de informações referentes aquele mesmo elemento, eu crio um objeto e aqui eu tenho o par chave valor dentro do objeto, nome/nome, e toda vez que eu preciso juntar esse grupo de informações em um único lugar, eu crio um array com esses grupos, nesse caso um array de objetos.
    // Os tipos de dados armazenados no localStorage não devem ser considerados sensíveis, de acordo com a LGPD (Lei Geral de Proteção de Dados). Isso ocorre, pois ele não possui nenhuma camada de proteção, e os dados podem ser acessados facilmente por terceiros. Dados considerados sensíveis, devem ser armazenados em Cookies.
    nome.value = '';
    quantidade.value = '';

})

function criaElemento(item){
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");
    
    const numeroItem = document.createElement('strong');
    numeroItem.dataset.id = item.id; // Colocando um id em cada item, para que não haja duplicidade.
    numeroItem.innerHTML = item.quantidade;
    // why appendChild() first?
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome; 
    list.appendChild(novoItem);
    novoItem.appendChild(botaoDeleta(item.id));
/* localStorage guarda informações de forma persistente no navegador, sendo em média 5MB de armazenamento padrão, podendo variar dependendo do navegador utilizado. Este limite pode ser aumentado pelo usuário quando necessário, no entanto apenas alguns navegadores suportam isso. Os dados salvos são apenas do tipo string texto.
Cookies guardam informações de forma persistente no navegador, sendo até 4KB de armazenamento por Cookie, bem menos que localStorage. Cada cookie é como se fosse um arquivo criado que guarda as informações de acesso da pessoa usuária, por exemplo, de qual local o site foi acessado, qual e-mail foi utilizado ao realizar login no navegador, e quais produtos de um site foram clicados. Para acessá-los, muitas empresas criam pop ups para confirmar a autorização do uso dessas informações, pois são consideradas sensíveis.
sessionStorage é similar ao localStorage, sua diferença é que os dados não são salvos de forma persistente, ou seja, ao fechar o navegador eles são perdidos. Este tipo de armazenamento é utilizado quando queremos que a pessoa usuária utilize os dados apenas enquanto estiver com o site aberto. */
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade; 
}

function botaoDeleta(id){

    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = 'X';

    // arrow function não carrega o this
    elementoBotao.addEventListener('click', function(){
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao;
}

function deletaElemento(tag, id){  
    tag.remove();
    //remover um item do array

    itens.splice(itens.findIndex(elemento => elemento.id === id), id) // o que queremos remover e nossa posição
    // procurando atraves do findIndex o elemento que eu quero de acordo com seu id

    localStorage.setItem("itens", JSON.stringify(itens));

}
/* O Local Storage por armazenar uma string, serve como um objeto meio descartável. Todas às vezes que queremos atualizar o Local Storage nós simplesmente escrevemos por cima, ele vai descartar a gravação anterior, que estava guardado na memória anteriormente e vai adicionar o item novo. */ 
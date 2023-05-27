async function buscaEndereco(cep) {
    var msgErro = document.getElementById('erro');
    msgErro.innerHTML = '';
    try {
        var consultaCEP =  await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        return consultaCEPConvertida;
    } catch (erro){
        msgErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

// O corpo da resposta de uma requisição chega em formato de bytes. 
// Desta forma o .json() transforma o corpo e retorna um json formatado. 
// O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.

// let ceps = ['01001000', '31110120', '01001001'];
// let conjuntoCeps = ceps.map(valor => buscaEndereco(valor));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

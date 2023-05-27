async function buscaEndereco(cep) {
    try {
        var consultaCEP =  await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;
    } catch (erro){
        console.log(erro)
    }
}

// O corpo da resposta de uma requisição chega em formato de bytes. 
// Desta forma o .json() transforma o corpo e retorna um json formatado. 
// O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.



// let ceps = ['01001000', '31110120', '01001001'];
// let conjuntoCeps = ceps.map(valor => buscaEndereco(valor));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

var consultaCEP = fetch("https://viacep.com.br/ws/01001000/json/").then(resposta => resposta.json())
                                                                 .then(r => {
                                                                            if(r.erro){
                                                                                throw Error("Esse CEP não existe.")
                                                                            } else {
                                                                            console.log(r)}
                                                                        })
                                                                 .catch(erro => console.log(erro))
                                                                 .finally(msg => console.log('Processamento concluído'));
// O corpo da resposta de uma requisição chega em formato de bytes. 
// Desta forma o .json() transforma o corpo e retorna um json formatado. 
// O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.

console.log(consultaCEP)


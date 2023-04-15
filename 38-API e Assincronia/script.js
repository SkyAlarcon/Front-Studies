const cepInput = document.querySelector("#cep");
const ufInput = document.querySelector("#uf");
const cidadeInput = document.querySelector("#cidade");
const ruaInput = document.querySelector("#rua");

cepInput.addEventListener("change", function() {
    if (cepInput.value.length != 8) return console.log("Erro tamanho")

    const promiseResposta = fetch("https://viacep.com.br/ws/" + cepInput.value + "/json/")

    promiseResposta.then(function (resposta){
        const promiseBody = resposta.json()
        
        promiseBody.then(function (body){
            if (body.erro) return console.log("CEP não encontrado")

            ufInput.value = body.uf;
            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        })
    })
})
/* Eu achei esses .then() dentro do outro MUITO feia
Preciso entender como deixar mais limpo esse codigo */
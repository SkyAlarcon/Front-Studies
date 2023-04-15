// https://pokeapi.co/api/v2/pokemon/ditto

const pkmInput = document.querySelector("#pkm-input")

const pkmName = document.querySelector("#pkm-name")
const pkmImg = document.querySelector("#pk-default-sprite")

pkmInput.addEventListener("change", function(){
    const promiseResposta = fetch(`https://pokeapi.co/api/v2/pokemon/${pkmInput.value}`)
    promiseResposta.then(function(resposta){
        if (!resposta.ok) {
            pkmName.textContent = "Pokemon not found"
            pkmImg.src = ""
            pkmImg.alt = ""
            return
        }
        const promiseBody = resposta.json();
        promiseBody.then(function(body){
            pkmName.textContent = body.name
            pkmImg.src = body.sprites.front_default
            pkmImg.alt = body.name
        })
    })
})
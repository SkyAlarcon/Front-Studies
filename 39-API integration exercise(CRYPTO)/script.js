const coinInput = document.querySelector("#crypto");
const valor = document.querySelector(".valor")

// https://www.mercadobitcoin.net/api/<coin>/GET/

coinInput.addEventListener("change", function(){
    const promiseResposta = fetch("https://www.mercadobitcoin.net/api/" + coinInput.value + "/ticker/")

    promiseResposta.then(resposta => {
        const promiseBody = resposta.json()

        promiseBody.then(function(body){
            valor.textContent = Number(body.ticker.high).toFixed(2)
        })
    })
})
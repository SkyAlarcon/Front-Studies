const inputs = document.querySelectorAll("input")
const games = document.querySelectorAll("li");

inputs.forEach(input => {
    input.addEventListener("keydown", function (event) {
        if (!teclouEnter(event.code)) return;
        buscarGame(games, event.target.value);
    });
    input.addEventListener("keydown", function(event) {
        if (!teclouEnter(event.code)) return;
        limparInput (event.target);
    });
});

function buscarGame(lista, filtro) {
    lista.forEach(item => {
        item.classList.remove("escondido");
        if (filtro && !item.textContent.includes(filtro)) item.classList.add("escondido")
    })
};

function teclouEnter (tecla){
    return tecla === "Enter"
}

function limparInput (input){
    input.value = ""
}
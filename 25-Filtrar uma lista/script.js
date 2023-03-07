const input = document.querySelector("input");
const games = document.querySelectorAll("li");

function buscarGame(event) {
    if (event.code === "Enter") {

        games.forEach( game => {
            game.classList.remove("escondido");

            if (input.value && !game.textContent.includes(input.value)) {
                game.classList.add("escondido");
            };
        });
    input.value = "";
    };
};
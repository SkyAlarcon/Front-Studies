const games = document.querySelectorAll("li");

function buscarGame(event) {
    if (event.code === "Enter") {

        games.forEach( game => {
            game.classList.remove("escondido");

            if (event.target.value && !game.textContent.includes(event.target.value)) {
                game.classList.add("escondido");
            };
        });
    event.target.value = "";
    };
};
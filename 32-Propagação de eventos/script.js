const imagensGaleria = document.querySelectorAll(".container img")
const imagemModal = document.querySelector(".modal img");
const linkModal = document.querySelector(".modal a");
const modal = document.querySelector(".modal");

function abrirModal (src) {
    imagemModal.src = src;
    modal.style.display = "flex"
    linkModal.href = src
}

imagensGaleria.forEach(function (imagem) {
    imagem.addEventListener("click", function (event) {
        abrirModal(event.target.src)
    })
});

modal.addEventListener("click", function() {
    modal.style.display = "none"
})

linkModal.addEventListener("click", function(event) {
    event.stopPropagation()
        /* ^ isso daqui vai parar a propagação do evento pra outros elementos quando a gente clicar na imagem pra abrir o link (propagação vai do menor pro maior */
})

const imagensGaleria = document.querySelectorAll(".container img")
const imagemModal = document.querySelector(".modal img");
const modal = document.querySelector(".modal");

function abrirModal (src) {
    imagemModal.src = src;
    modal.style.display = "flex"
}

imagensGaleria.forEach(function (imagem) {
    imagem.addEventListener("click", function (event) {
        abrirModal(event.target.src)
    })
});

modal.addEventListener("click", function() {
    modal.style.display = "none"
})
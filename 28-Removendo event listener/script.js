const buttonSub = document.querySelector('.btnYT');
const buttonCancel = document.querySelector(".cancelar")
const buttonConfirm = document.querySelector(".confirmar")
const modal = document.querySelector(".modal")

buttonSub.addEventListener("click", inscrever);

buttonCancel.addEventListener("click", function () {
    modal.classList.add("escondido")
})

buttonConfirm.addEventListener("click", function () {
    buttonSub.textContent = "Inscrever"
    buttonSub.addEventListener("click", inscrever)
    buttonSub.classList.remove("inscrito")
    buttonSub.removeEventListener("click", mostrarModal)

    modal.classList.add("escondido")
})

function inscrever(event) {
    const clicked = event.target;
    clicked.textContent = "inscrito";
    clicked.classList.add("inscrito")

    clicked.removeEventListener("click", inscrever)
    clicked.addEventListener("click", mostrarModal)
}

function mostrarModal (){
    modal.classList.remove("escondido")
}

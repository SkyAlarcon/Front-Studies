const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    input.addEventListener("change", function (event) {
        const modifiedInput = event.target;
        if (modifiedInput.dataset.resposta == modifiedInput.value){
                            // ^ o "dataset" serve pra acessar o "data" do HTML
            modifiedInput.classList.add("acerto")
        }
    });
});
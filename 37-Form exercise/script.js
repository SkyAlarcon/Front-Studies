const form = document.querySelector("form");
const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#pwd-confirm")

form.addEventListener("submit", function(event) {
    console.log(pwd.value, confirmPwd.value)
                    /* ^ precisa disso pra acessar o valor, senão acessa apenas o objeto, não a info */
    if (pwd.value != confirmPwd.value) event.preventDefault();
});
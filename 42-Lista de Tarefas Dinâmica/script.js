const bodyHTML = document.querySelector("body");
const lista = document.querySelector("ul");
const input = document.querySelector("input");
const itens = document.querySelectorAll("li");

input.addEventListener("keydown", function(event){
    if (event.key != "Enter" || !input.value ) return;
    const item = document.createElement("li");
    lista.append(item);
    item.textContent = input.value;
    input.value = "";
    
    item.addEventListener("click", function(){
        item.classList.toggle("line-through")
    });
    const btn = document.createElement("button");
    btn.addEventListener("click", function(){
        item.remove();
    })
    btn.textContent = "x";
    item.append(btn);
});

itens.forEach(item => {
    item.addEventListener("click", function(event){
        console.log(event)
    })
})
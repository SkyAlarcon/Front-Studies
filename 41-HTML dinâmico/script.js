const bodyHTML = document.querySelector("body");

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then( function(resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function(body){
            body.forEach(photo => {
                console.log(photo)
                const div = document.createElement("div");
                div.classList.add("photo");
                const img = document.createElement("img");
                img.src = photo.url;
                const title = document.createElement("p");
                title.textContent = photo.title;

                div.append(img, title)
                bodyHTML.append(div)
            });
        })
    })
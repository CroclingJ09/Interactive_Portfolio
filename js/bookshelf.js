let bookshelf = document.getElementById("bookshelf")

bookshelf.addEventListener("click", bookshelfSelect)

function bookshelfSelect(){
    nextTextBtn.addEventListener("click", nextTextBookshelf)
    textLayer.style.display = "flex"
    textIndex = "Book0"
    switch (textIndex){
        case "Book0":
            text.textContent = "La bibliothèque est pleine de livres. On trouve dessus de multiples séries de Manga."
            textIndex = "Book1"
    }
}

function nextTextBookshelf(){
    console.log(textIndex)
    switch (textIndex){
        case "Book1":
            text.textContent = "J’ai l’impression qu’il aime beaucoup ce genre de lecture."
            textIndex = "Book2"
            break
        case "Book2":
            text.textContent = "Il y a aussi des figurines de personnages au-dessus, surtout d’un personnage aux cheveux argent qui tient un sabre en bois."
            textIndex = "Book3"
            break
        case "Book3":
            text.textContent = "J’imagine même pas combien ça a du lui coûter…"
            textIndex = "Book4"
            break
        case "Book4":
            textLayer.style.display = "none"
            textIndex = 0
            break
    }
}
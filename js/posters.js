let poster1 = document.getElementById("poster-1")

let poster2 = document.getElementById("poster-2")

// let textLayer = document.getElementById("text-layer")


poster1.addEventListener("click", poster1Select)

poster2.addEventListener("click", poster2Select)

function poster1Select(){
    nextTextBtn.addEventListener("click", nextText)
    console.log("poster")
    textLayer.style.display = "flex"
    textIndex = "Post1-0"
    switch (textIndex){
        case "Post1-0":
            text.textContent = "Il y a un petit poster accroché au mur. On y voit une fille en survêtement rose avec une guitare."
            textIndex = "Post1-1"
    }
}

function poster2Select(){
    nextTextBtn.addEventListener("click", nextText)
    textLayer.style.display = "flex"
    textIndex = "Post2-0"
    switch (textIndex){
        case "Post2-0":
            text.textContent = "Il y a trois posters sur le mur"
            textIndex = "Post2-1"
    }
}

function nextText(){
    console.log("lol")
    switch (textIndex){
        case "Post1-1":
            text.textContent = "Elle est aussi assise dans un carton. Pourquoi ?"
            textIndex = "Post1-2"
            break
        case "Post1-2":
            textLayer.style.display = "none"
            textIndex = 0
            text.textContent = "Il y a un petit poster accroché au mur. On y voit une fille en survêtement rose avec une guitare."
            break
        case "Post2-1":
            text.textContent = "Sur chacun on peut voir des hommes calamars se battre avec des pistolets à encre de divers couleurs."
            textIndex = "Post2-2"
            break
        case "Post2-2":
            text.textContent = "Bizarre comme concept…"
            textIndex = "Post2-3"
            break
        case "Post2-3":
            textIndex = 0
            textLayer.style.display = "none"
            break
    }
}
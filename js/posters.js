let poster1 = document.getElementById("poster-1")

// let textLayer = document.getElementById("text-layer")


poster1.addEventListener("click", poster1Select)

function poster1Select(){
    nextTextBtn.addEventListener("click", nextTextProjects)
    console.log("poster")
    textLayer.style.display = "flex"
    textIndex = "Post1-0"
    switch (textIndex){
        case "Post1-0":
            text.textContent = "Il y a un petit poster accroché au mur. On y voit une fille en survêtement rose avec une guitare."
            textIndex = "Post1-1"
    }
}

function nextTextProjects(){
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
    }
}
let bed = document.getElementById("bed")

bed.addEventListener("click", bedSelect)

function bedSelect(){
    console.log("bed")
    nextTextBtn.addEventListener("click", nextTextBed)
    textLayer.style.display = "flex"
    textIndex = "Bed0"
    switch (textIndex){
        case "Bed0":
            text.textContent = "C’est un lit, tout ce qu’il y a de plus basique."
            textIndex = "Bed1"
    }
}

function nextTextBed(){
    switch (textIndex){
        case "Bed1":
            text.textContent = "Dessus, il y a une peluche d’un ours avec un côté blanc mignon, et un côté noir plus agressif."
            textIndex = "Bed2"
            break
        case "Bed2":
            text.textContent = "J’ai l’impression d’être observé…"
            textIndex = "Bed3"
            break
        case "Bed3":
            textLayer.style.display = "none"
            textIndex = 0
            break
    }
}
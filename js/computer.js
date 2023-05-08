let computer = document.getElementById("computer")

let formLayer = document.getElementById("form-layer")

let formBack = document.getElementById("form-back")

computer.addEventListener("click", computerSelect)

formBack.addEventListener("click", quitForm)

function computerSelect(){
    nextTextBtn.addEventListener("click", nextTextComputer)
    textLayer.style.display = "flex"
    textIndex = "Com0"
    switch (textIndex){
        case "Com0":
            text.textContent = "Tiens ? L’ordinateur est allumé."
            textIndex = "Com1"
    }
}

function nextTextComputer(){
    switch (textIndex){
        case "Com1":
            text.textContent = "«Il semblerait qu’il y a un formulaire à remplir sur l’écran."
            textImg.style.display = "block"
            textIndex = "Com2"
            break
        case "Com2":
            text.textContent = "Profitons-en pour lui laisser un message"
            textImg.style.display = "none"
            textIndex = "Com3"
            break
        case "Com3":
            textLayer.style.display = "none"
            formLayer.style.display = "flex"
            textIndex = 0
            break
    }
}

function quitForm(){
    formLayer.style.display = "none"
}
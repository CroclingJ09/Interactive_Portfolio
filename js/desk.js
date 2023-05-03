// import {text, textImg, textLayer, desk, portfolioLayer, portfolioBack, nextTextBtn} from "./general.js";

let text = document.getElementById("text")

let textImg = document.getElementById("text-img")

let textLayer = document.getElementById("text-layer")

let desk = document.getElementById("desk")

let portfolioLayer = document.getElementById("portfolio-layer")

let portfolioBack = document.getElementById("portfolio-back")

let nextTextBtn = document.getElementById("next-btn")

desk.addEventListener("click", deskSelect)

portfolioBack.addEventListener("click", quitPortfolio)

console.log(desk);

// let container = document.getElementById("container")

let textIndex = 0

function deskSelect(){
    console.log("yes")
    nextTextBtn.addEventListener("click", nextTextProjects)
    console.log(textIndex)
    textLayer.style.display = "flex"
    textIndex = "Port0"
    switch (textIndex){
        case "Port0":
            text.textContent = "Tiens ? Il y a un tiroir qui déborde de documents."
            textIndex = "Port1"
    }
}

function nextTextProjects(){
    console.log("haha")
    switch (textIndex){
        case "Port1":
            text.textContent = "«Projets » ? Ça doit être les différents travaux qu’il a effectués."
            textImg.style.display = "block"
            textIndex = "Port2"
            break
        case "Port2":
            text.textContent = "Je ferais mieux d’y jeter un œil…"
            textImg.style.display = "none"
            textIndex = "Port3"
            break
        case "Port3":
            textLayer.style.display = "none"
            portfolioLayer.style.display = "flex"
            textIndex = 0
            break
    }
}

function quitPortfolio(){
    portfolioLayer.style.display = "none"
}
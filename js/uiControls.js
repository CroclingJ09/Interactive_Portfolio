// import {container,upArrow} from "./general.js";

let container = document.getElementById("container")

console.log(container)

let fullScreenBtn = document.getElementById("fullscreen")

let upArrow = document.getElementById("up")

let downArrow = document.getElementById("down")

let leftArrow = document.getElementById("left")

let rightArrow = document.getElementById("right")

let zoomIn = document.getElementById("zoom-plus")

let zoomOut = document.getElementById("zoom-minus")

fullScreenBtn.addEventListener("click", fullScreen)

upArrow.addEventListener("mousedown",moveUp)

downArrow.addEventListener("mousedown", moveDown)

leftArrow.addEventListener("mousedown", moveLeft)

rightArrow.addEventListener("mousedown", moveRight)

zoomIn.addEventListener("click", moveIn)

zoomOut.addEventListener("click", moveOut)

let positionX = 0

let positionY = 0

let id = ""

function fullScreen(){
    if(!document.fullscreenElement){
        document.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
}

function moveUp() {
    if (container.style.top !== "30em"){
        positionY += 10
        container.style.top = positionY + "em"
    }
    // id = setInterval(moveUp, 100)
}

function moveDown() {
    if (container.style.top !== "-30em"){
        positionY -= 10
        container.style.top = positionY + "em"
    }
}

function moveLeft() {
    if (container.style.left !== "30em"){
        positionX += 10
        container.style.left = positionX + "em"
    }
}

function moveRight() {
    if (container.style.left !== "-30em"){
        positionX -= 10
        container.style.left = positionX + "em"
    }
}

container.style.scale = "1.5"

function moveIn(){
    console.log(container.style.scale)
    switch (container.style.scale){
        case "1":
            container.style.scale = "1.25"
            break
        case "1.25":
            container.style.scale = "1.5"
            break
        case "1.5":
            container.style.scale = "1.75"
            break
        case "1.75":
            container.style.scale = "2"
            break
    }
}

function moveOut(){
    console.log(container.style.scale)
    switch (container.style.scale){
        case "2":
            container.style.scale = "1.75"
            break
        case "1.75":
            container.style.scale = "1.5"
            break
        case "1.5":
            container.style.scale = "1.25"
            break
        case "1.25":
            container.style.scale = "1"
            break
    }
}
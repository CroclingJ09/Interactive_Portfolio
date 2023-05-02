export let container = document.getElementById("container")
export let upArrow = document.getElementById("up")
export let downArrow = document.getElementById("down")
export let rightArrow = document.getElementById("right")
export let leftArrow = document.getElementById("left")

nextTextBtn.addEventListener("click", nextText)

// function nextText(){
//     switch (textIndex){
//         case "Port1":
//             text.textContent = "«Projets » ? Ça doit être les différents travaux qu’il a effectués."
//             textImg.style.display = "block"
//             textIndex = "Port2"
//             break
//         case "Port2":
//             text.textContent = "Je ferais mieux d’y jeter un œil…"
//             textImg.style.display = "none"
//             textIndex = "Port3"
//             break
//         case "Port3":
//             textLayer.style.display = "none"
//             portfolioLayer.style.display = "flex"
//             textIndex = 0
//             break
//
//     }
// }
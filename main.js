const container = document.querySelector(".container")
const randBtn = document.getElementById("randBtn");
const inputHexText = document.getElementById("hexInput")
const inputHexBtn = document.getElementById("hexEnter")
const colorHexText = document.getElementById("colorHex")
const changeMode = document.querySelector(".changeMode")
const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function setColor(color){
    container.style.setProperty('background-color', color)
    colorHexText.innerHTML = `${color}`
    colorHexText.style.setProperty('background-color', color)
}

function randColor(){    
    let hexCode = '#';
    for(let i = 0; i < 6; i++){
        const randNumb = Math.floor((Math.random() * 16))
        hexCode += hex[randNumb];
    }
    
    setColor(hexCode)
}

function enterColor(){
    let hexCode = '#'
    hexCode += inputHexText.value
    
    setColor(hexCode)

    inputHexText.value = ''
}

randBtn.addEventListener("click", () => randColor())
inputHexText.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        enterColor();
    }
})
inputHexBtn.addEventListener("click", () => enterColor())

document.addEventListener('DOMContentLoaded', randColor())


let btn = document.getElementById('save-btn');
let container = document.getElementById('container');
let emailInput = document.getElementById('email-input');
let tooltiptext = document.getElementById('tooltiptext');

function addInputHint() {
    tooltiptext.style.visibility ='visible'
}
function removeInputHint() {
    tooltiptext.style.visibility='hidden'
}
function handleSaveBtn() {
    container.style.backgroundColor = "#a078b3"
}

btn.addEventListener('click', handleSaveBtn)
emailInput.addEventListener("mouseover", addInputHint)
emailInput.addEventListener("mouseleave", removeInputHint)
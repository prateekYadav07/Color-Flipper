const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    var randomHex = getRandomHexCode();
    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
})

function getRandomHexCode(){
    var hexCode = "#";
    var randomNumber
    for (let i=0; i<6; i++){
        randomNumber = getRandomNumber();
        hexCode += hex[randomNumber].toString();
    }
    return hexCode;
}

function getRandomNumber(){
    var randomNumber = Math.round(Math.random() * hex.length);
    return randomNumber;
}
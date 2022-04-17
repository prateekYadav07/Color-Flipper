const colors = ["green", "red", "rgba(133,122,200)", "#f15025","#DAF7A6","#FFC300","#FF5733","#C70039","#900C3F","#581845"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0 and 3;
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})

function getRandomNumber(){
    var randomNumber = Math.round(Math.random() * colors.length);
    return randomNumber;
}
let circle1 = document.querySelector('#trafficLight1');
let circle2 = document.querySelector('#trafficLight2');
let circle3 = document.querySelector('#trafficLight3');
     
function makeRed() {
    circle1.style.background = ('red');
    circle2.style.background = ('black');
    circle3.style.background = ('black');
    [circle1, circle2, circle3].forEach(element => element.removeEventListener('click', makeRed));   
    [circle1, circle2, circle3].forEach(element => element.addEventListener('click', makeYellow));   
}   
 
[circle1, circle2, circle3].forEach(element => element.addEventListener('click', makeRed));   

function makeYellow() {
    circle2.style.background = ('yellow');
    circle3.style.background = ('black');
    circle1.style.background = ('black');
    [circle1, circle2, circle3].forEach(element => element.removeEventListener('click', makeYellow));   
    [circle1, circle2, circle3].forEach(element => element.addEventListener('click', makeGreen));
}
function makeGreen() {
    circle3.style.background = ('green');
    circle1.style.background = ('black');
    circle2.style.background = ('black');
    [circle1, circle2, circle3].forEach(element => element.removeEventListener('click', makeGreen));   
    [circle1, circle2, circle3].forEach(element => element.addEventListener('click', makeRed));
}
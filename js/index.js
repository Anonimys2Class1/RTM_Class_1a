'use strict';
 let x = 0,
 y = 0;

document.addEventListener('keydown', function(e){
if(e.keyCode == 37) y -= 5;
if(e.keyCode == 39) y += 5;
if(e.keyCode == 38) x += 5;
if(e.keyCode == 40) x -= 5;

document.querySelector('.cube').style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});

// function f1() {
//     let p;
//     p = document.getElementById('our')
 
//  const nanmeberOne = prompt("Ведіть перше число");
//  // const nanmebe = prompt('Введіть * і / ') // `${nanmebe}`
//  const nanmeberTo = prompt('Введіть число друге');
//  function nanmeber (nander1, nander2) { 
//  let cesh = Number(nander1) * Number(nander2); // це звичайний приклад 
 
//  p.innerHTML = `${nander1} * ${nander2} = ${cesh}`
 
//  }
//  nanmeber (`${nanmeberOne}`, `${nanmeberTo}`)
//  }
//  function f3() {
//     let p;
//     p = document.getElementById('nanber')
//     p.innerHTML += Math.round(Math.random() * 100) + ",";
// }

// function f2() {
//     let p;
//     p = document.getElementById('string')
//     p.innerHTML =  "Ти голубий!!"
    
// }
const button = document.querySelector(".div")

function clickButtto(evt) {
// console.log(evt.target.textContent);
if(evt.target.textContent === "Множення"){
   namderOne()
}
if(evt.target.textContent === "Нажми"){
   const button = document.querySelector('.js-button-color');
   const p = document.querySelector('#tere');
   let hexColor =  getRandomHexColor()
   document.body.style.backgroundColor = hexColor;
   button.style.backgroundColor = hexColor
   button.style.color = "black"
   p.textContent = "Color " + hexColor
}
if(evt.target.textContent === "Рондомне число"){
const p = document.querySelector('#nanber')
p.textContent = nander()
}
}

button.addEventListener("click", clickButtto)
//Рондомне число function
function nander(){
   return Math.round(Math.random() * 100)
   }
// ===================================
//Множення
function namderOne() {
   const nanderOne = prompt("Ведіть перше число");
   const nanmeberTo = prompt('Введіть число друге');
   const p = document.querySelector('#our');
   const finish = nanderOne * nanmeberTo;
   p.textContent = `${nanderOne}`+" * "+`${nanmeberTo}`+" = "+ finish;
}
// ===============================================
// RandomColor
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
//  =================================================


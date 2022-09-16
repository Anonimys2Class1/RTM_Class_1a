'use strict';
function f1() {
    let p;
    p = document.getElementById('our')
 
 const nanmeberOne = prompt("Ведіть перше число");
 // const nanmebe = prompt('Введіть * і / ') // `${nanmebe}`
 const nanmeberTo = prompt('Введіть число друге');
 function nanmeber (nander1, nander2) { 
 let cesh = Number(nander1) * Number(nander2); // це звичайний приклад 
 
 p.innerHTML = `${nander1} * ${nander2} = ${cesh}`
 
 }
 nanmeber (`${nanmeberOne}`, `${nanmeberTo}`)
 }

 function f3() {
    let p;
    p = document.getElementById('nanber')
    p.innerHTML += Math.round(Math.random() * 100) + ",";
}

function f2() {
    let p;
    p = document.getElementById('string')
    p.innerHTML =  "Ти голубий!!"
    
}

let x = 0,
    y = 0;

document.addEventListener('keydown', function(e){
  if(e.keyCode == 37) y -= 5;
  if(e.keyCode == 39) y += 5;
  if(e.keyCode == 38) x += 5;
  if(e.keyCode == 40) x -= 5;
 
 document.querySelector('.cube').style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});

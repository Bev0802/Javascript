//проверка загрузки страницы разными способами:
window.onload = function () {
    console.log('window loaded');
}
document.addEventListener("DOMContentLoaded", function (event){
  console.log('loaded');
});

window.addEventListener("load", function (event){

  console.log('window loaded');
});
const button = document.querySelector('.button');

button.addEventListener('click', function (event) {
    console.log('button clicked');
    alert('button clicked');
});

let btns = document.querySelectorAll('.button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
        console.log('button clicked ' + event.target.innerText);
        alert('button clicked ' + event.target.innerText);
    });
}

// Домашнее задание

'use strict';
function askQuestion(answer, question) {
   const userAnswer   = prompt(question);
       alert(answer == userAnswer ? "Молодец!" : "Неверно!");
       console.log(answer == userAnswer ? "Молодец!" : "Неверно!");
}

function puzzle() {
   askQuestion(2 + 2, "Сколько будет 2 + 2?");
   askQuestion("лук", "Сидит дед во 100 шуб одет, " +
       "кто его раздевает, тот слезы проливает");
   askQuestion("елка", "Зимой и летом одним цветом");
}
'use strict'
function ternar() {
    let num1 = prompt("Введите число 1: ");
    let num2 = prompt("Введите число 2: ");
    alert(num1 > num2 ? `${num1} больше ${num2}` : `${num1} меньше ${num2}`)
}

function weekDay() {
    let day = Number(prompt("Введите день недели: "));
    switch (day) {
        case 1: return alert("Понедельник - Monday");
        case 2: return alert("Вторник - Tuesday");
        case 3: return alert("Среда - Wednesday");
        case 4: return alert("Четверг - Thursday");
        case 5: return alert("Пятница - Friday");
        case 6: return alert("Суббота - Saturday");
        case 7: return alert("Воскресенье - Sunday");
        default: return alert("Это не день недели");
    }
    alert(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 ? "Это рабочий день" : "Это выходной день")
}


//helloName();
// //ageUser();
//
// let age = Number(prompt("Введите ваш возраст: "));
//
//
// /** region Функции */
//
// const upUsers = () => 18 - age;
//
// function helloName() {
//     name = prompt("Введите ваше имя: ");
//     alert("Привет, " + name);
// }
//
// function ageUser() {
//     if (age < 18) {
//         upAge(age);
//     } else {
//         alert("Добро пожаловать! Вам " + age + " лет");
//     }
// }
//
// function upAge(age) {
//     let ageLast = 18 - age;
//     alert("Попробуй снова через " + ageLast);
// }
//
//
// let count = 3;
// function counter(count) {
//     while (count < 10) {
//         count++;
//         console.log(count);
//     }
//     alert(count);
// }
// /** endregion */
// alert("Попробуй снова через: " + upUsers());
// alert(`Ваш возраст: ${age}`);
// //counter(count);
/**
Функция pom в данном коде является рекурсивной функцией,
которая вычисляет результат возведения числа num в степень pow.
Если pow равно 0, функция возвращает 1. В противном случае,
функция умножает число num на результат вызова pom с уменьшенной степенью pow на 1.

Например, если num равно 2, а pow равно 3, то вызов pom(2, 3) вернет результат 2 * 2 * 2, то есть 8.
 */
function pom(num, pow){
    if (pow === 0) {
        return 1;
    } else {
        return num * pom(num, pow - 1);
    }
}
//alert(pom(2, 3));

/*TODO:
1. Написать функцию, которая находит ближайшее к данному числу целое число которое делится на 5.
Например: если дано число 7, то функция должна вернуть 5, а если число 9, то функция должна вернуть 10.
 */
function round5() {
    let num = Number(prompt("Введите число: "));
    let numTo = (num - (num % 5) + 5); // (7 - (((7:5)-1)*5)) + 5 = 10
    console.log(numTo);
    let numFrom = (num - (num % 5) - 5); // (7 - (((7:5)-1)*5) - 5) = 5
    console.log(numFrom);
    nextNum = ((numTo - num) > (num - numFrom)) ? numFrom: numTo;

    alert(nextNum);
}

round5();


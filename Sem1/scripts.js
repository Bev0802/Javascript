console.log('Текст из scripts.js');
/**
Задание 2 (тайминг 25 минут)
 Текст задания
 1. Создайте переменную num и присвойте ей значение 123. Выведите
 значение этой переменной в консоль
 2. Создайте переменную а и присвойте ей значение 5, переопределите
 переменную а на значение 7, выведите переменную а в консоль
 3. Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С
 помощью функции console.log выведите в консоль содержимое
 переменной b.
 4. Создайте 2 вида комментариев в вашем коде, добавьте в них
 произвольный текст
 **/

console.log("Задание 2");
let num = 123;
console.log(num);


let a = 5;
a = 7;
console.log(a);

let b = 1 + 2 + 3;
console.log(b);

/**
 Задание 3 (тайминг 20 минут)
 1. Создайте переменную age со значением 10 и переменную d со
 значением 2.
 a. Все созданные переменные должны быть логично названы
 b. Создайте переменную суммы и присвойте сумму чисел (age,d)
 age. Создайте переменную разности и присвойте разность чисел
 (age,d)
 d. Создайте переменную прозведения и присвойте произведение
 чисел (age,d)
 e. Создайте переменную частного и присвойте деление чисел
 (age,d)
 f. Выведите в консоль все созданные переменные
 g. Сложите все созданные переменные и выведите результат в
 консоль
 **/
console.log("Задание 3");
const age = 41;
const year = 1982;
const sum = age + year;
const difference = age - year;
const compozition = age * year;
const quotient = age / year;
console.log(age, year, sum, difference, compozition, quotient);
console.log(`Cумма всех переменных: ${age + year + sum + difference + compozition + quotient}`);

/**
 Задание 4 (тайминг 10 минут)
 1. Не запуская код, определите, что выведется в консоль:
 a. let a = 5 + 5 * 3 + 3;
 2. Не запуская код, определите, что выведется в консоль:
 a. let a = 8 / 2 + 2;
 3. Не запуская код, определите, что выведется в консоль:
 a. let a = (2 + 3) * (2 + 3);
 4. Не запуская код, определите, что выведется в консоль:
 a. let a = (2 + 3) * 2 + 3;
 5. Не запуская код, определите, что выведется в консоль:
 a. let a = (2 * 8) / 4;
 6. Не запуская код, определите, что выведется в консоль:
 a. let a = 2 * (8 / 4);
 Ответ: 4
 **/

console.log("Задание 4");
a = 5 + 5 * 3 + 3;
console.log(a);
b = 8 / 2 + 2;
console.log(b);
c = (2 + 3) * (2 + 3);
console.log(c);
d = (2 + 3) * 2 + 3;
console.log(d);
e = (2 * 8) / 4;
console.log(e);
f = 2 * (8 / 4);
console.log(`2 * (8 / 4) = ${f}`); // 2 * (8 / 4) = 'f);
console.log(a, b, c, d, e, f);

/**
 Задание 5 (тайминг 5 минут)
 1. Запишите в переменную a число 1.5, а в переменную b - число 0.75.
 Найдите сумму значений этих переменных и выведите ее на экран.
 2. Создайте переменную a, запишите в нее какое-нибудь
 положительное или отрицательное число. Выведите на экран это
 число с обратным знаком.
 **/

console.log("Задание 5");
a = 1.5;
b = 0.75;
console.log(a + b);
a = 5;
console.log(-a);
console.log(a/b);
console.log(Math.round((a/b)*100)/100); // Статический метод Math.round() возвращает значение числа, округленное до ближайшего целого числа.
console.log(Math.floor((a/b)*100)/100); // всегда округляет в меньшую сторону и возвращает наибольшее целое число, меньшее или равное заданному числу.
console.log(Math.ceil((a/b)*100)/100); // Статический метод Math.ceil() всегда округляет и возвращает меньшее целое число, большее или равное заданному числу.
console.log(Math.trunc((a/b)*100)/100); // Статический метод Math.trunc() возвращает целую часть числа, удаляя все дробные цифры.

strNum = "5.555";
console.log(strNum);
console.log(typeof strNum);
console.log(+strNum);
console.log(typeof +strNum);

strNum = "5.55";
console.log(typeof strNum);
console.log(strNum);

floatNum = Number.parseFloat(strNum);
console.log(typeof floatNum);
console.log(floatNum);

intNum = Number.parseInt(strNum);
console.log(typeof intNum);
console.log(intNum);

/** Задание 6 (тайминг 10 минут) Создайте строку с вашем именем и строку с вашей фамилией.
Выведите эти данные в консоль
2. Создайте переменную с текстом 'java' и переменную с текстом
'script'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'javascript'.
3. Создайте переменную с текстом 'hello' и переменную с текстом
'world'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'hello world'.
**/

console.log("Задание 6");
const  firstName = "Вася";
const LastName = "Пупкин";
console.log(`Имя пользователя: ${firstName + " " + LastName}`);

const java = "java";
const script = "script";
console.log(java + script);

const hello = "hello";
const world = "world";

console.log(hello + " " + world);

//Выведение в HTML:

//Вывести в index.html текст "Привет!"
// Создаем новый элемент <p>
paragraph = document.createElement("p");
// Устанавливаем текст "Привет!" для этого элемента
paragraph.textContent = "Привет мир!";
// Добавляем элемент на страницу
document.body.appendChild(paragraph);

alert('Привет мир!');
prompt('Зимой и летом одним цветом', 'Огурец');
alert('Вам есть 18 лет?');

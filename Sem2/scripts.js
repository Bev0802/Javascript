/**Выведение в HTML:

//Вывести в index.html текст "Привет!"
// Создаем новый элемент <p>
paragraph = document.createElement("p");
// Устанавливаем текст "Привет!" для этого элемента
paragraph.textContent = "Привет мир!";
// Добавляем элемент на страницу
document.body.appendChild(paragraph);

alert('Привет мир!');
prompt('Зимой и летом одним цветом', 'Огурец');
alert('Поздравляем, вы отлично справились!');

if (confirm('Вы достигли совершеннолетия?')) {
    alert('Вам есть 18 лет!');
} else {
    alert('Вам нет 18 лет!');
}
 **/


// riddle();
//passWord();
function riddle() {
    let userAnswer = prompt('Зимой и летом одним цветом', 'елка');
    console.log(userAnswer);
    if (userAnswer.toLowerCase() === 'елка' || userAnswer.toLowerCase() === 'ёлка') {
        alert(`Поздравляем, вы отлично справились!`);
    } else if (userAnswer === '') {
        alert('Ответ не может быть пустым!');
        riddle();
    } else {
        alert('Неверно! Подумайте ещё раз!');
        riddle();
    }
    //Тернариный оператор
    // alert((userAnswer === 'Ёлка') ? `Поздравляем, вы отлично справились!` : 'Неверно! Подумайте ещё раз!');
}

function passWord() {
    let userPass = prompt('Введите пароль:', '12345');
    userPass = Number(userPass);
    if (userPass === 12345) {
        alert(`Добро пожаловать!`);
    }else {
        alert('Пароль неверен!');
        passWord();
    }
    // alert((userPass === 12345) ? `Добро пожаловать!` : 'Пароль неверен!');
}

/**
 * Задание 1 (тайминг 15 минут) Текст задания
 * 1. Создать новый файл lesson2.html
 * 2. Создать переменную и спросить у пользователя “Ваш возраст”
 * 3. Вывести на экран текст. Вам “возраст пользователя” лет
 * 4. Спросить у пользователя его имя 5. Вывести на экран, Добро пожаловать на сайт “Имя пользователя”
 */
//xample1();
function example1() {
    let age = prompt('Ваш возраст?');
    alert(`Вам ${age} лет`);
    let name = prompt('Ваше имя?');
    alert(`Добро пожаловать на сайт ${name}`);
}

/**
 * Задание 2 (тайминг 15 минут) Текст задания
 * 1. Найти остаток от деления двух переменных a. let a = 13; b. let b = 5;
 * 2. Что выведет на экран (Сначала проговорите, потом проверьте) a. let a; b. alert(a);
 * 3. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert('abc' * 3);
 * 4. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert( 1 / 0); b. alert(-1 / 0);
 * 5. Что выведет на экран (Сначала проговорите, потом проверьте) a. alert('2' * '3');
 */
example2();
function example2() {
    let a = 13;
    let b = a.toString(a);
    alert(a);
    alert(b);
    alert("'abc' * 3: " + 'abc' * b);
    alert("1 / 0: " + 1 / 0);
    alert("-1 / 0: " + -1 / 0);
    alert("'2' * '3: " + '2' * '3');
}
/**
 * Задание 3 (тайминг 15 минут)
 * 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли.
 * Определите, в какой строке кода случилась ошибка.
 * 2. Необходимо вывести в консоль результат суммы данных переменных a. let a = '2'; b. let b = '3';
 * 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст
 * a. Сумма чисел равна “результат”
 * b. Разность чисел равна “результат”
 * c. Произведение чисел равно “результат”
 * d. Частное чисел равно “результат”
 * e. Остаток от деления чисел равен “результат”
 */

function example3() {
    
}


//(условие) ? если истина : если ложь;

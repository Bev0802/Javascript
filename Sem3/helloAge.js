
/**Простая функция*/

//hello();

/**Функция с параметром*/
function helloName(name) {
    alert("Привет, " + name);
}

//helloName(prompt("Введите ваше имя: "));

/**Функция с параметром и возвратом, которая запоминает значение*/
const sum = (age, permittedAge) => {
    if (age >= permittedAge) {
        return "Добро пожаловать! Вам " + age + stringAge(age);
    } else {
        return "Попробуй снова через " + (permittedAge - age) + (stringAge(permittedAge - age));
    }
};

/**ФУНКЦИЯ которая высчитвает что подставить год, года или лет*/
function stringAge(ageLast) {
    return ageLast  === 1 ?  ' год' : (ageLast > 4 ? " лет" : " года");
}

function timesOfDay () {
    let hour = new Date().getHours();
    alert(`сейчас ${hour} часов`);
    if (hour < 6) {
        return "Доброй ночи, ";
    } else if (hour < 12) {
        return "Доброе утро, ";
    } else if (hour < 18) {
        return"Добрый день, ";
    } else {
        return "Добрый вечер, ";
    }
}

function hello() {
    alert("Добро пожаловать! Давайте познакомимся!");
    let name = prompt("Введите ваше имя: ");
    let helloOfTimesOfDay = timesOfDay();
    alert(`${helloOfTimesOfDay} ${name}!`);
    let age = Number(prompt("Введите ваш Возраст: "));
    alert(sum(age, 18));
}



function fWhile() {
    let count = 0;
    while (count < 3) {
        alert("Привет!");
        count++;
    }
}
function fDoWhile() {
    let count = 0;
    let passUser = 123;
    let pass;
    do {
        pass = Number (prompt("Введите пароль?"));
        count++;
        if (pass !== passUser) {
            alert("Неверный пароль. Попробуйте ещё раз.");
            if (count === 3) {
                alert("Забыли пароль?");
                break;
            }
        } else {
            alert("Пароль верный!");
        }
    } while (pass !== passUser);
}

function fFor() {
    for (let i = 0; i < 3; i++) {
        alert("Пока!");
    }
}

function fForArray() {
    const array = ["Один", "Два", "Три", "Четыре", "Пять"];
    for (let i = 0; i < array.length; i++) {
        alert(array[i]);
    }
}

function fForArrayKey() {
    const array = ["Один", "Два", "Три", "Четыре", "Пять"];
    for (let i = array.length - 1; i >= 0; i--) {
        alert(array[i]);
    }
}

function fArray() {
    const array = [];
    array.push(prompt("Имя:"));
    array.push(prompt("Фамилия:"));
    array.push(prompt("Возраст:"));
    alert("Ваше имя: " + array[0] + " " + array[1] + ", вам " + array[2] + " лет.");
    console.log(array);
    const name = array[0];
    const surname = array[1];
    const age = array[2];

    const nameArray = name.split("");
    console.log(nameArray.pop());
    nameArray.push("е");
    const newNameArray = nameArray.join("");
    console.log(newNameArray);

    const surnameArray = surname.split("");
    console.log(surnameArray.pop());
    surnameArray.push("ой");
    const newSurnameArray = surnameArray.join("");
    console.log(newSurnameArray);

    alert(newNameArray + " " + newSurnameArray + " " + age);
    }
    function puzzle() {
        const arrAnswer = ['елка', 'ёлка', 'ель', 'ёлочка'];
        const arrUseer = (prompt('Зимой и летом одним цветом?')).toLocaleLowerCase();
        for (let i = 0; i < arrAnswer.length; i++) {
            const element = arrAnswer[i];
            if (element === arrUseer) {
                alert('Верно! Правильный ответ: ' + arrAnswer[i]);
                break;
            } else {
                continue;
            }
        }
    }

    ////////////////////////////////////////////////////////////////
function fArray() {
    const arrRandom = [];

    for (let i = 0; i < 3; i++) {
        arrRandom.push(Math.round(Math.random() * 100));
    }
    console.log(`Случайные числа: ${arrRandom}&`);

    arrRandom.push(4, 5, 6);
    console.log(`В массив arr в конец добавлены 4, 5, 6 : ${arrRandom}`);

    arrRandom.unshift(1, 2, 3);
    console.log(`В массив arr в начало добавлены 1, 2, 3 : ${arrRandom}`);

    firstElement = arrRandom.shift();
    console.log(`В массив arr удален первый элемент ${firstElement}: ${arrRandom}`);

    lastElement = arrRandom.pop();
    console.log(`В массив arr удален последний элемент ${lastElement}: ${arrRandom}`);

    const arr2 = arrRandom.slice(0, 3);
    console.log(`В массив arr2 копируются первые три элемента из массива arr(${arrRandom}): [${arr2}]`);

    const newArr = arrRandom.splice(0, 3);
    console.log(`В массив arr2 удалены первые три элемента из массива arr[${newArr}]: ${arrRandom}`);

    newarrRandom = arrRandom.splice(2, 0, 8, 8, 8);
    console.log(`В массив arr2 вставлены 8, 8, 8 в позицию 2 веннулся пустой массив [${newarrRandom}]: ${arrRandom}`);

    const arrMap = arrRandom.map((x) => x * 2);
    console.log(`В массив arrMap [${arrMap}] умножены все элементы на 2: ${arrRandom}`);

    const arrFilter = arrRandom.filter((x) => x > 10);
    console.log(`В массив arrFilter [${arrFilter}] элементы больше 10: ${arrRandom}`);

    const arrFind = [];
    arrFind.push(arrRandom.find((x) => x >= 8));

    console.log(`В массив arrFind [${arrFind}] элемент больше 10: ${arrRandom}`);

    const arrFindIndex = arrRandom.findIndex();
    console.log(`В массив arrFindIndex [${arrFindIndex}] элемент больше 10: ${arrRandom}`);

    //reduce
    const arrReduce = arrRandom.reduce((a, b) => a + b);
    console.log(`В массив arrReduce [${arrReduce}] сумма элементов: ${arrRandom}`);

    //some
    const arrSome = arrRandom.some((x) => x > 10);
    console.log(`В массив arrSome [${arrSome}] элемент больше 10: ${arrRandom}`);
    //every
    const arrEvery = arrRandom.every((x) => x > 10);
    console.log(`В массив arrEvery [${arrEvery}] элемент больше 10: ${arrRandom}`);

    //сортировка
    const arrSort = arrRandom.sort();
    console.log(`В массив arrSort [${arrSort}] отсортирован: ${arrRandom}`);

    const arrSortReverse = arrRandom.reverse();
    console.log(`В массив arrSortReverse [${arrSortReverse}] отсортирован в обратном порядке: ${arrRandom}`);

    const arrSortRandom = arrRandom.sort(() => Math.random() - 0.5);
    console.log(`В массив arrSortRandom [${arrSortRandom}] отсортирован в случайном порядке: ${arrRandom}`);
}

fArray();
///////////////////////////////////////
function fFor() {
    const arrFor = [1, 2, 3, 4, 0, 6, 7, 8, 9, 10];
    for (let i = 0; i < arrFor.length && arrFor[i] !== 0; i++) {
        console.log(arrFor[i]);
    }
}


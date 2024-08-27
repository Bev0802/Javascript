
function createProduct(name, total) {
    return {
        name: name,
        total: total
    };
}

function printList(productList) {
    return productList.map(product => product.name).join(", ");
}

function addProduct() {
    const productList = [];
    let product1 = createProduct("стол", 123);
    let product2 = createProduct("стул", 456);
    productList.push(product1);
    productList.push(product2);

    let totalSum = productList.reduce((sum, product) => sum + product.total, 0);

    console.log(product1);
    console.log(product2);
    console.log(productList);
    alert(Object.values(productList).join(", "));
    alert(`${product1.name} и ${product2.name} добавлены в productList ${printList(productList)} на сумму ${product1.total} + ${product2.total} = ${totalSum}`);
}


////////////////////////////////////////////////////////////
const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0,
    engineIsStarted: false,
    startEngine: function() {
        this.engineIsStarted = true;
    },
    stopEngine: function() {
        this.engineIsStarted = false;
    },
    haveRoadTrip: function(distance) {
        if (this.engineIsStarted) {
            this.odometer += distance;
        } else {
            alert("Сначала запустите двигатель!");
        }
    }
}
///////////////////////
const array = [1, 10, 3, 8, 5, 7, 6, 4, 9, 2];
function map(array) {
    let arrayBackup = [];
    arrayBackup = array.map(item => item * 1.5);
    console.log("map до: " + array);
    console.log("map после: " +arrayBackup);
    return arrayBackup;
}
// const newArray = map(array);
function filter(array, number) {
    let arrayBackup = [];
    arrayBackup = array.filter(item => item >= number);
    console.log("filter до: " + array);
    console.log( "filter после: " + arrayBackup);
    return arrayBackup;
}
// filter(newArray, 15);

function some(array, number) {
    let arrayBackup = [];
    arrayBackup = array.some(item => item >= number);
    console.log("some массив: " + array);
    console.log("some boolean: " + arrayBackup);
    return arrayBackup;
}
// some(newArray, 20); //return true or false


function reduce(array, number) {
    let arrayBackup = [];
    arrayBackup = (array.reduce((sum, item) => (sum + item)/array.length, number));
    console.log("reduce до: " + array);
    console.log("reduce после: " + arrayBackup);
    return arrayBackup;
}
// reduce(newArray, 0);
//деструктурирующее присваивание
function destructuring(array) {
    let [a, b, c, d, e, f, g, h, i, j] = array;
    console.log(a, b, c, d, e, f, g, h, i, j);
    console.log(b, d, g, h, j);
    console.log(typeof b);
}
// destructuring(newArray);
////////////////////////////////////// seminars 5

function weekDay(day) {
    let dayWeek = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье",
    }
    alert(dayWeek[day]);
    return dayWeek[day];
}

let userName = {
    name: 'Vlad',
    lastname: 'Ivanov',
    age: 23,
}

// userName = {
//     surname: prompt('введите отчество'),
// }
// console.log(userName.name + ' ' + userName.lastname + ' ' + userName.age + ' ' + userName.surname);

parol









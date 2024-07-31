
const productP =
{
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
    total: 0
}

function product(name, price, quantity){

    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.total = price * quantity;
}

function createProduct() {
    let  product1 = new product(prompt("Введите название продукта:", "стол"),
        prompt("Введите цену:",  "123"),
        prompt("Введите количество:", "1"));
    return product1
}
function addProduct(){
    const productList = [];
    let  product1 = createProduct();
    let  product2 = createProduct();
    productList.push(product1);
    productList.push(product2);
    console.log(product1);
    console.log(product2);
    console.log(productList);
    alert(`${product1.name} и ${product2.name} добавлены в productList ${productList[0].name, productList[1].name} на сумму ${productList[0].total} + ${productList[1].total} = `);
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





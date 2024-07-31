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







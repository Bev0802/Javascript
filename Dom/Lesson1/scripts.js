//TODO: добавить кнопку "купить" в форму при нажатии текст кнопки изменить на "открыть корзину"

const form = document.querySelector("form");
const buttonBuy = document.createElement("button");
buttonBuy.innerHTML = "Купить";
form.append(buttonBuy);


buttonBuy.onclick = function () {
    buttonBuy.innerHTML = ("Открыть корзину");
}

const buttonSent = document.createElement("button");
buttonSent.innerHTML = "Отправить";
form.append(buttonSent);

buttonSent.onclick = function () {
    buttonSent.innerHTML = ("Отправлено");
}

const linkImg = document.getElementsByClassName("link");
linkImg[0].innerHTML = " java vs javascript";
linkImg[0].href = "https://as1.ftcdn.net/v2/jpg/03/22/70/80/1000_F_322708042_uPQMkUFxMUDnoMatCDb0h3re4wnFlVeV.jpg";

const img = document.getElementsByTagName('img');
img[0].src = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png";

const container = document.querySelector("div.container");
let products = ["метчик", "плашка", "резец", "молоток", "фреза"];
let ulProducts = document.createElement("ul");
for (let item in products) {
    const liProduct = document.createElement("li");

    liProduct.innerHTML = products[item];
    ulProducts.appendChild(liProduct);
}
container.append(ulProducts);
console.log(products);
const h2 = ulProducts.previousElementSibling;
console.log(h2);
const h1 = ulProducts.parentElement;
console.log(h1);
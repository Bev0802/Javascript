function buy() {
    const product = prompt ("Выберите продукт: ноутбук, мышь, принтер");

    switch (product) {
        case "ноутбук":
            alert("Товар добавлен в корзину");
            break;
        case "мышь":
            alert("Товар добавлен в корзину");
            break;
        case "принтер":
            alert("Товар добавлен в корзину");
            break;
        default:
            alert("Такого товара нет! Товар не добавлен в корзину. Попробуй ещё.");
            return;
    }
}
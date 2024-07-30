const salary = (money) => {
    money= money * 0.87;
    return money * 0.75;
}
let moneyNum = Number(prompt("Введите ваша зарплата: "))
alert(salary(moneyNum));
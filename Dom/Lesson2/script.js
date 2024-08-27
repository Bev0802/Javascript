// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

let supDropdown = document.querySelectorAll('.dropdown-item');
console.log(supDropdown);
for (let i = 0; i < supDropdown.length; i++) {
    supDropdown[i].classList.add('super-dropdown');
}

console.log(supDropdown);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

let btns = document.querySelectorAll('.btn');
console.log(btns);
for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains('btn-secondary')) {
        btns[i].classList.remove('btn-secondary');
    } else {
        btns[i].classList.add('btn-secondary');
    }
}
console.log(btns);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

let menu = document.querySelectorAll('.menu');
console.log(menu);
for (let i = 0; i < menu.length; i++) {
    menu[i].classList.remove('dropdown-menu');
}
console.log(menu);

// 4. Используя метод insertAdjacentHTML добавьте после div'a
// с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`

let dropdown = document.querySelector('div.dropdown');
console.log(dropdown);
dropdown.insertAdjacentHTML('afterend', '<a href="#">link</a>');
console.log(dropdown.nextSibling);
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

let superDropdown = document.querySelector('#dropdownMenuButton');
console.log(superDropdown);
superDropdown.id = 'superDropdown';
console.log(superDropdown);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// let superDropdown = document.querySelector('#dropdownMenuButton');
console.log(superDropdown);
superDropdown.dataset.dd = '3';
console.log(superDropdown);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

let superDropdown3 = document.querySelector('.dropdown-toggle');
console.log(superDropdown3);
superDropdown3.removeAttribute('type');
console.log(superDropdown3);
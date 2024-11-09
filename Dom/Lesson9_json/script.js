/**
 *Получение данных из строки json
 */
console.log(dataInfo);
console.log(JSON.parse(dataInfo));
const images = JSON.parse(dataInfo);

const content = document.querySelector('.content');
content.innerHTML = '<h1> Получение json из строки. Обход с помощью map </h1>';

images.map(function (image) {
    let img = document.createElement('img');
    img.id = image.id;
    img.width = image.width;
    img.height = image.height;
    img.src = image.url;
    content.appendChild(img);
})

/**
 *Получение данных из объекта json
 */
console.log(dataEntris)
const images2 = JSON.parse(dataEntris);
console.log(images2);

const content2 = document.querySelector('.content');
let content2Dev = document.createElement('div');
content2Dev.innerHTML = '<br> <h1> Получение json из объекта. Обход с помощью Object.entries </h1> <br>';
for (const [key, value] of Object.entries(images2)) {
    let img2 = document.createElement('img');
    img2.id = value.id;
    img2.width = value.width;
    img2.height = value.height;
    img2.src = value.url;
    content2Dev.appendChild(img2);
}

content2.appendChild(content2Dev);


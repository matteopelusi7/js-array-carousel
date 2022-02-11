const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let currentIndex = 0

const slideWrapper = document.querySelector('.slide-wrapper');
const imgSlide = document.querySelector('.img-slide');

for (let i = 0; i < items.length; i++) {

    const element = items[i];

    const item = `
        <div class="item">
            <img src="${items[i]}">
        </div> `;

    slideWrapper.innerHTML += item;

    const itemImage = `
        <div class="item-slide">
            <img src="${items[i]}">
        </div> `;

    imgSlide.innerHTML += itemImage;

}

const image = [...document.getElementsByClassName('item')];
image[currentIndex].classList.add('active');
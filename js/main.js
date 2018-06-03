class Player {

    constructor() {
        this.counter = 0;
    }

    increasCounter(num) {
        this.counter += num;
    }
}

class Cat {
    constructor(name, image) {
        this.name = name;
        this.image = `assets/img/${image}.jpg`;
        this.clickCounter = 0;
        this.catCard = `
    <div class="cat-card ${this.name}">
        <h3>${this.name}</h3>
        <p class="click-counter">Number of clicks: <span class="number"></span></p>
        <img src="${this.image}" alt="Cat Image to click on">
     </div>`;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const player = new Player();
    const catsImages = ['engry_cat', 'heary_cat'];
    const catsNames = ['Mario', 'Marco'];
    const cats = {};

    const catsCardContainer = document.querySelector('.card-container');

    for (const cat in catsNames) {
        cats[catsNames[cat]] = new Cat(catsNames[cat], catsImages[cat]);
    }

    for (const cat of catsNames) {
        catsCardContainer.innerHTML += cats[cat].catCard;
    }


    const clickCounter = document.querySelector(".click-counter .number");


    function updatePageElements() {
        clickCounter.innerText = player.counter;
    }

    catsCardContainer.addEventListener("click", function (event) {
        if(event.target.tagName === "DIV"){
            const catName = event.target.querySelector('h3').innerText;
            const catImage = document.querySelector(".cat-image");
        }

        player.increasCounter(1);
        updatePageElements();
    });
});
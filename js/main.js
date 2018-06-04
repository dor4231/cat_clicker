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
        <p class="click-counter">Number of clicks: <span class="number">0</span></p>
        <img src="${this.image}" alt="Cat Image to click on">
     </div>`;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const player = new Player();
    const catsImages = ['engry_cat', 'heary_cat'];
    const catsNames = ['Mario', 'Marco'];
    const cats = {};
    const clickCounters = {};

    const catsCardContainer = document.querySelector('.card-container');

    for (const cat in catsNames) {
        const name = catsNames[cat];
        const img = catsImages[cat];

        cats[name] = new Cat( name , img );
        clickCounters[name] = document.querySelector(`.cat-card.${name} .number`);
    }

    for (const cat of catsNames) {
        catsCardContainer.innerHTML += cats[cat].catCard;
    }


    function updatePageElements(catName) {
        document.querySelector(`.cat-card.${catName} .number`).innerText = cats[catName].clickCounter;
    }

    catsCardContainer.addEventListener("click", function (event) {
        if(event.target.tagName === "IMG"){
            const catCard = event.target.parentElement;
            const catName = catCard.querySelector('h3').innerText;
            // const catImage = document.querySelector(".cat-image");
            cats[catName].clickCounter += 1;
            updatePageElements(catName);
        }
    });
});
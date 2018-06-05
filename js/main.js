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
        <p class="click-counter">Number of clicks: <span class="number">${this.clickCounter}</span></p>
        <img src="${this.image}" alt="Cat Image to click on">
     </div>`;
        this.catListItem = `
        <li>
            ${this.name}        
        </li>
        `
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const catsImages = ['engry_cat', 'heary_cat', 'profile_cat', 'santa_cat', 'sleeping_cat'];
    const catsNames = ['Mario', 'Marco', 'Meow', 'Lucky', 'Leon'];
    const cats = {};
    const clickCounters = {};

    const player = new Player();

    const catsCardContainer = document.querySelector('.card-container');
    const catsList = document.querySelector('.cat-list');

    for (const cat in catsNames) {
        const name = catsNames[cat];
        const img = catsImages[cat];

        cats[name] = new Cat( name , img );
        clickCounters[name] = document.querySelector(`.cat-card.${name} .number`);
    }

    for (const cat of catsNames) {
        catsList.innerHTML += cats[cat].catListItem;
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

    catsList.addEventListener('click', function(event) {
        console.log(event.target.innerText);
        if (event.target.tagName === "LI") {
            const catName = event.target.innerText;

            catsCardContainer.innerHTML = cats[catName].catCard;
            updatePageElements(catName);
        }
    })
});
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
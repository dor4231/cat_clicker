class Player {

    constructor() {
        this.counter = 0;
    }

    increasCounter(num) {
        this.counter += num;
    }
}

class Cats {
    constructor(name, image) {
        this.name = name;
        this.image = `assets/img/${image}.jpg`;
        this.catPanel = `<div class="cat-card"><h3>${this.name}</h3><img src="${this.image}" alt="Cat Image to click on"></div>`
    }
}


document.addEventListener("DOMContentLoaded", function () {




    const player = new Player();
    const catImage = document.querySelector(".cat-image");
    const clickCounter = document.querySelector(".click-counter .number");


    function updatePageElements() {
        clickCounter.innerText = player.counter;
    }

    catImage.addEventListener("click", function (event) {
        player.increasCounter(1);
        updatePageElements();
    });
});
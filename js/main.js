document.addEventListener("DOMContentLoaded", function () {
    class Player {

        constructor() {
            this.counter = 0;
        }

        increasCounter(num) {
            this.counter += num;
        }
    }

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
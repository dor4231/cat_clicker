const model = {
    catsImages: ['engry_cat', 'heary_cat', 'profile_cat', 'santa_cat', 'sleeping_cat'],
    catsNames: ['Mario', 'Marco', 'Meow', 'Lucky', 'Leon'],
    player: new Player(),

    init: function() {
        this.createCats();
    },

    createCats: function() {
        for (const cat in this.catsNames) {
            const name = this.catsNames[cat];
            const img = this.catsImages[cat];

            this.cats[name] = new Cat( name , img );
            this.clickCounters[name] = document.querySelector(`.cat-card.${name} .number`);
        }
    }
};

const octo = {
    init: function() {
        model.init();
        view.init();
    }
};

const view = {
    catsCardContainer: document.querySelector('.card-container'),
    catsList: document.querySelector('.cat-list'),

    init: function() {

    }
};

document.addEventListener("DOMContentLoaded", function () {



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
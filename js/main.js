const model = {
    catsImages: ['engry_cat', 'heary_cat', 'profile_cat', 'santa_cat', 'sleeping_cat'],
    catsNames: ['Mario', 'Marco', 'Meow', 'Lucky', 'Leon'],
    cats: {},
    currentCat: null,
    // player: new Player(),

    init: function() {
        this.createCats();
    },

    createCats: function() {
        for (const cat in this.catsNames) {
            const name = this.catsNames[cat];
            const img = this.catsImages[cat];

            this.cats[name] = new Cat( name , img );
            // this.clickCounters[name] = document.querySelector(`.cat-card.${name} .number`);
        }
    }
};

const octo = {
    init: function() {
        model.init();
        viewCatList.init();
        viewCat.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    setCurrentCat: function(catName) {
        model.currentCat = model.cats[catName];
    },

    getCatsNames: function() {
        return model.catsNames;
    },

    addClick: function() {
        model.currentCat.clickCounter += 1;
    }
};

const viewCatList = {


    init: function() {
        this.catsList = document.querySelector('.cat-list');

        this.render();
    },

    render: function() {
        const catsNames = octo.getCatsNames();

        for (const cat of catsNames) {
            const listItem = document.createElement("li");
            listItem.innerText = cat;
            listItem.addEventListener("click", (function(copyCat) {
                return function() {
                    octo.setCurrentCat(copyCat);
                    viewCat.render();
                }
            })(cat));
            this.catsList.appendChild(listItem);
        }
    }
};

const viewCat = {
    catsCardContainer: document.querySelector('.card-container'),

    init: function() {
        this.catNameContainer = document.querySelector('.cat-card .cat-name');
        this.catClicksContainer = document.querySelector('.cat-card .number');
        this.catImage = document.querySelector('.cat-card img');

        this.catImage.addEventListener('click', function() {
            octo.addClick();
            viewCat.render();
        });
    },

    render: function() {
        const cat = octo.getCurrentCat();
        this.catClicksContainer.innerText = cat.clickCounter;
        this.catNameContainer.innerText = cat.name;
        this.catImage.src = cat.image;
    }
};

document.addEventListener("DOMContentLoaded", function () {

    octo.init();

    // for (const cat of catsNames) {
    //     catsList.innerHTML += cats[cat].catListItem;
    // }


    // function updatePageElements(catName) {
    //     document.querySelector(`.cat-card.${catName} .number`).innerText = cats[catName].clickCounter;
    // }
    //
    // catsCardContainer.addEventListener("click", function (event) {
    //     if(event.target.tagName === "IMG"){
    //         const catCard = event.target.parentElement;
    //         const catName = catCard.querySelector('h3').innerText;
    //         // const catImage = document.querySelector(".cat-image");
    //         cats[catName].clickCounter += 1;
    //         updatePageElements(catName);
    //     }
    // });
    //
    // catsList.addEventListener('click', function(event) {
    //     console.log(event.target.innerText);
    //     if (event.target.tagName === "LI") {
    //         const catName = event.target.innerText;
    //
    //         catsCardContainer.innerHTML = cats[catName].catCard;
    //         updatePageElements(catName);
    //     }
    // })
});


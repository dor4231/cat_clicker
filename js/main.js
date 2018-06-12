const model = {
    catsImages: ['engry_cat', 'heary_cat', 'profile_cat', 'santa_cat', 'sleeping_cat'],
    catsNames: ['Mario', 'Marco', 'Meow', 'Lucky', 'Leon'],
    cats: {},
    currentCat: null,

    init: function() {
        this.createCats();
        this.currentCat = this.cats[this.catsNames[0]];
    },

    createCats: function() {
        for (const cat in this.catsNames) {
            const name = this.catsNames[cat];
            const img = this.catsImages[cat];

            this.cats[name] = new Cat( name , img );
        }
    }
};

const octopus = {
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
        const catsNames = octopus.getCatsNames();

        for (const cat of catsNames) {
            const listItem = document.createElement("li");
            listItem.innerText = cat;
            listItem.addEventListener("click", (function(copyCat) {
                return function() {
                    octopus.setCurrentCat(copyCat);
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
            octopus.addClick();
            viewCat.render();
        });
        this.render();
    },

    render: function() {
        const cat = octopus.getCurrentCat();
        this.catClicksContainer.innerText = cat.clickCounter;
        this.catNameContainer.innerText = cat.name;
        this.catImage.src = cat.image;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    octopus.init();
});
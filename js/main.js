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
        viewAdmin.init();
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

    updateCat: function(name, image, clicks) {
        const catPosition = model.catsNames.indexOf(model.currentCat.name);

        model.catsNames[catPosition] = name;

        model.currentCat.name = name;
        model.currentCat.image = image;
        model.currentCat.clickCounter = clicks;
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

        this.catsList.innerHTML = '';

        for (const cat of catsNames) {
            console.log(cat);
            const listItem = document.createElement("li");
            listItem.classList.add("clickable");
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

const viewAdmin = {
    init: function() {
        const self = this;
        this.popup = document.querySelector('.pop-up.edit-cat');
        this.catNameInput = this.popup.querySelector('#cat-name');
        this.catImageInput = this.popup.querySelector('#cat-image');
        this.catClicksInput = this.popup.querySelector('#cat-clicks');

        document.querySelector('#admin').addEventListener('click', function(event) {
            event.preventDefault();
            self.popup.classList.remove('hidden');
            self.render();
        });

        this.popup.querySelector('.save').addEventListener('click', function(event) {
            event.preventDefault();
            octopus.updateCat(self.catNameInput.value,
                              self.catImageInput.value,
                              self.catClicksInput.value );
            self.popup.classList.add('hidden');
            viewCat.render();
            viewCatList.render();
        });

        this.popup.querySelector('.cancel').addEventListener('click', function(event) {
            event.preventDefault();
            self.popup.classList.add('hidden');
        });
    },

    render: function() {
        const cat = octopus.getCurrentCat();

        this.catNameInput.value = cat.name;
        this.catImageInput.value = cat.image;
        this.catClicksInput.value = cat.clickCounter;
    }
};
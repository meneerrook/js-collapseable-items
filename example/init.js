async function init() {

    // --- Collapseable items initialization --- //
    let options = {
        amountFromDOM: true,
        amountAttribute: "data-collapsed-amount",
        expandedOnLoadFromDOM: true,
        group: { 
            selector: ".filter__group", 
            expandedClass: "filter__group--expanded" 
        },
        list: { 
            selector: ".filter__list" 
        },
        item: { 
            selector: ".filter__item"
        },
        toggler: { 
            selector: ".filter__toggler" 
        }
    };

    let setCollapseItems = new CollapseableItems(options);
    setCollapseItems.init();
    // --- End collapseable items initialization --- //

    // --- don't mind this and the functions below
    setProducts();
}

async function setProducts() {
    let productsAreSet = await new Promise((resolve, reject) => {
        let list = document.querySelector("#product-list"),
            template = document.querySelector("#product-item-template");
    
        for (let i = 0; i < 12; i++) {
            let clone = template.content.cloneNode(true);
            list.appendChild(clone);
        }  
    
        resolve(true);
    });
    
    if (productsAreSet) preventProductsClick();
}

function preventProductsClick() {
    let productAnchors = document.querySelectorAll("#product-list a");

    for (let i = 0; i < productAnchors.length; i++) {
        productAnchors[i].addEventListener("click", e => e.preventDefault());
    }
}

init();
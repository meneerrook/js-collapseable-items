const _ci = {
    options: {
        amount: 5,
        amountFromDOM: false,
        amountAttribute: 'data-amount',
        expandedOnLoad: false,
        expandedOnLoadFromDOM: false,
        expandedOnLoadAttribute: 'data-expanded',
        group: {
            selector: '.group',
            expandedClass: 'expanded'
        },
        list: {
            selector: '.list'
        },
        item: {
            selector: '.item'
        },
        toggler: {
            selector: '.toggler',
            create: false,
            attributes: {
                'href': '#',
                'data-more': 'Show more',
                'data-less': 'Show less',
                'class': 'toggle-items'
            }
        }
    },
    extend: (options, customOptions) => {
        for (prop in customOptions) {
            if (typeof customOptions[prop] == 'object') {
                _ci.extend(options[prop], customOptions[prop]);
            } else {
                options[prop] = customOptions[prop];
            }
        }
        
        return options;
    },
    set: () => {
        let groups = document.querySelectorAll(_ci.options.group.selector);

        for (let i = 0; i < groups.length; i++) {

            if (groups[i].getAttribute("data-ignore-collapseable") == "true") continue;

            let list = groups[i].querySelector(_ci.options.list.selector),
                items = list.querySelectorAll(_ci.options.item.selector),
                collapsedAmount = _ci.options.amount,
                isExpanded;
            
            if (_ci.options.amountFromDOM) {
                collapsedAmount = Number(groups[i].getAttribute(_ci.options.amountAttribute));
            }

            if (_ci.options.expandedOnLoadFromDOM) {
                isExpanded = groups[i].getAttribute(_ci.options.expandedOnLoadAttribute) == 'true' ? true : false;
            } else { 
                isExpanded = _ci.options.expandedOnLoad;
            }

            _ci.provideToggler(groups[i], list, items, collapsedAmount);
            groups[i].classList.toggle(_ci.options.group.expandedClass, isExpanded); 

            let height = _ci.calcHeight(items, collapsedAmount, isExpanded);
            list.style.height = `${height}px`;
        }
    },
    provideToggler: (group, list, items, collapsedAmount) => {
        if (collapsedAmount >= items.length) return false;

        let _self = _ci,
            toggler;

        if (_self.options.toggler.create) {
            let attributes = _self.options.toggler.attributes;
            toggler = document.createElement('a');

            for (att in attributes) {
                toggler.setAttribute(att, attributes[att]);
            }
            list.parentNode.insertBefore(toggler, list.nextSibling);
        } else {
            toggler = group.querySelector(_self.options.toggler.selector);
        }

        toggler.addEventListener('click', e => _ci.togglerEvent(e, group, list, items, collapsedAmount));
    },
    togglerEvent: (e, group, list, items, collapsedAmount) => {
        e.preventDefault();

        let isExpanded = true;
        if (group.classList.contains(_ci.options.group.expandedClass)) isExpanded = false;

        group.classList.toggle(_ci.options.group.expandedClass, isExpanded);

        let height = _ci.calcHeight(items, collapsedAmount, isExpanded);
        list.style.height = `${height}px`;
    },
    calcHeight: (items, collapsedAmount, isExpanded) => {
        let listHeight = 0,
            iterations = isExpanded ? items.length : collapsedAmount;
        
        for (let i = 0; i < iterations; i++) {
            if (!items[i]) break;
            listHeight += items[i].offsetHeight;    
        }

        return listHeight;
    }
}

class CollapseableItems {
    constructor (options) {
        this.options = _ci.options;

        if (arguments[0] && typeof arguments[0] == 'object') {
            this.options = _ci.extend(this.options, arguments[0]);
        }
    }
    
    init() {
        _ci.set(this.options);
    }
}
# js-collapseable-items

## Intro

This plugin lets you collapse/expand a list of items based on the height and amount of the items themselves. You can, for instance; have multiple lists on one page and initialize them all at once, have a seperate amount of visible items while collapsed per list, make use of css's cubic-bezier transition property because the height of the list is determined by the amount of items and the height of each of these items seperately, and more. For a detailed list of all the options, scroll down below.

## Usage

In order to initialize a list of items to allow for collapsing/expanding functionality you would have to run the following JS code on page-load (Bear in mind, the plugin uses ES6 standards and syntax, some browsers may not support this yet for which you would need to use a polyfill).

### JavaSript:
```javascript
let setCollapseItems = new CollapseableItems({
    amount: 3
});
setCollapseItems.init();
```
### Html:
```html
<div class="group">
    <ul class="list">
        <li class="item">item 1</li>
        <li class="item">item 2</li>
        <li class="item">item 3</li>
        <li class="item">And so on..</li>
        <li class="item">And so forth...</li>
    </ul>
    <a href="#" class="toggle-items"></a>
</div>
```

## Options
For this plugin, there are some possibilities that may come in handy, for instance; you could choose to have the amount of visible items while collapsed the same for each group, or you could have the DOM decide each list's amount of visible items seperately by passing a particular attribute to the list's wrapper, Also, you could create your own toggler button or you could let the plugin create one for you and let it place the toggler right below the list as a sibling. Below a full list of all the options available.


---

### amount
Type: `Number`

Default: `5`

The number of items visible on screen while a list is collapsed. This option is ignored when the option "amountFromDOM" is set to 'true'

---

### amountFromDOM
type: `Boolean`

Default: `false`

Determines wether the amount of items visible items on screen while a list is collapsed is based on the "amountAttribute's" value.

---

### amountAttribute
type: `String`

Default: `data-amount`

The name of the attribute the plugin should use to extract a number value from the DOM for the amount of visible items per list. This attribute must be placed on the element with the group selector (see below "group.selector"). If for some reason the value given is any other type but a number, the plugin will fall back on the "amount" option for this specific list.

---

### expandedOnLoad
type: `Boolean`

Default: `false`

Determines wether all the lists should be expanded or collapsed on load

---

### expandedOnLoadFromDOM
type: `Boolean`

Default: `false`

Determines wether a list should be expanded or collapsed on load based on the "expandedOnLoadAttribute" value. When set to true, this option will overwrite "expandedOnLoad"

---

### expandedOnLoadAttribute
type: `String`

Default: `data-expanded`

The name of the attribute the plugin should use to extract a boolean value from the DOM to determine wether a list should be expanded or collapsed on load. This attribute must be placed on the element with the group selector (see below "group.selector"). If for some reason the given value's type is anything other than a Boolean, the plugin will fall back to a value of false for this specific list. 

---

### group.selector
type: `String`

Default: `.group`

The (css) selector of the group element, for reference; see html snippet above.

---

### group.expandedClass
type: `string`

Default: `expanded`

The class the plugin should toggle on the group element when expanded and collapsing the list, this allows for css transitions.

---

### list.selector
type: `string`

Default: `.list`

The (css) selector of the list element, for reference; see html snippet above.

---

### item.selector
type: `string`

Default: `.item`

The (css) selector of the item element, for reference; see html snippet above.

---

### toggler.selector
type: `String`

Default: `.toggle-items`

The (css) selector of the toggle element, for reference; see html snippet above.

---

### toggler.create
type: `Boolean`

Default: `false`

Determines wether the plugin should create a toggler for you and place it right after the list element as a sibling

---

### toggler.attributes
type: `Object`

Default:
```
toggler: {
    'href': '#',
    'data-more': 'Show more',
    'data-less': 'Show less',
    'class': 'toggle-items'
}
```

An Object of properties with attributes that the plugin should add to the toggler element when "toggler.create" is set to true, bear in mind; The plugin will always create an anchor tag so the "href" attribute is advised to avoid unexpected behaviour, also, the "class" element should always be given and should always be the same as the "toggler.selector" value (except for the selector type, so ".toggle- item" should be "toggle-items" for the class attributes value)

# js-collapseable-items

## Intro

This plugin lets you collapse/expand a list of items based on the height and amount of the items themselves. You can, for instance; have multiple lists on one page and initialize them all at once, have a seperate amount of visible items while collapsed per list, make use of css's cubic-bezier transition property because the height of the list is determined by the amount of items and the height of each of these items seperately, and more. For a detailed list of all the options, scroll down below.

## Usage

In order to initialize a list of items to allow for collapsing/expanding functionality you would have to run the following JS code on page-load (Bear in mind, the plugin uses ES6 standards and syntax, some browsers may not support this yet for which you would need to use a polyfill).

### JavaSript:
```javascript
let setCollapseItems = new CollapseableItems(options);
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

#### amount
Type: `Number`

Default: `5`

The number of items visible on screen while a list is collapsed. This option is ignored when the option 'amountFromDOM' is set to `true`

---

#### amountFromDOM

---

#### amountAttribute

---

#### expandedOnLoad

#### expandedOnLoadFromDOM

#### expandedOnLoadAttribute


#### group.selector

#### group.expandedClass


#### list.selector

#### item

#### item.selector


#### toggler.selector

#### toggler.create

#### toggler.attributes

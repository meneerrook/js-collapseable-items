# js-collapseable-items

## Intro

This plugin lets you collapse/expand a list of items based on the height and amount of the items themselves. You can, for instance; have multiple lists on one page and initialize them all at once, have a seperate amount of visible items while collapsed per list, make use of css's cubic-bezier transition property because the height of the list is determined by the amount of items and the height of each of these items seperately, and more. For all the possibilities regarding the api, scroll down below.

## Usage

In order to initialize a list of items to allow for collapsing/expanding functionality you would have to run the following JS code on page-load (Bear in mind, the plugin uses ES6 standard and syntax, some browsers may not support this for which you would need to use a polyfill)

Init.js:

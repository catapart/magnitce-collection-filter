# magnitce-captioned-thumbnail
A custom `HTMLElement` that provides a query input and helper functions for using its query to filter a collection of html elements. 

Package size: ~Xkb minified, ~Ykb verbose.

## Quick Reference
```html
<collection-filter></collection-filter>
<div>
    <div>A</div>
    <div data-filter-property="b">B</div>
    <div data-filter-property="c">C</div>
    <div data-filter-property="custom-d">D</div>
</div>
<script type="module" src="/path/to/collection-filter[.min].js"></script>
```
(*Note: `<collection-filter>` element implements a `<form>` element and, therefore, cannot be placed inside of a `<form>` element.*)

## Demos
https://catapart.github.io/magnitce-collection-filter/demo/

## Support
- Firefox
- Chrome
- Edge
- <s>Safari</s> (Has not been tested; should be supported, based on custom element support)

## Getting Started
 1. [Install/Reference the library](#referenceinstall)

### Reference/Install
#### HTML Import (not required for vanilla js/ts; alternative to import statement)
```html
<script type="module" src="/path/to/collection-filter[.min].js"></script>
```
#### npm
```cmd
npm install @magnit-ce/collection-filter
```

### Import
#### Vanilla js/ts
```js
import "/path/to/collection-filter[.min].js"; // if you didn't reference from a <script>, reference with an import like this

import { CollectionFilterElement } from "/path/to/collection-filter[.min].js";
```
#### npm
```js
import "@magnit-ce/collection-filter"; // if you didn't reference from a <script>, reference with an import like this

import { CollectionFilterElement } from "@magnit-ce/collection-filter";
```

---
---
---

## Overview
The `<collection-filter>` element is intended to provide a simple way of filtering or searching for elements.

It includes a text input to accept a user's query, as well as a button to toggle whether the query should be run as regex. It also provides a `filterItems()` function which returns a match status object for each item that is passed into the function.

By default, the filter will query against either an element's `textContent` or, if the element has a `data-filter-property` attribute, it will use that text as the value to match on.

## Attributes
|Attribute Name|Description|
|-|-|
|`placeholder`|Sets the placeholder value for the query `<input>` element.|
|`regex`|Sets the `<collection-filter>`'s query type. If present, the query type will be set to `regexQuery`. If not present, the query type will be set to `textQuery`. This attribute is toggled when the regex button is clicked.|
|`filter-property`|The name of the attribute that will be used to filter element items in the `filterElements()` function. Whatever value is provided for this attribute, that exact string can be used as an attribute on each of the elements provided to the `filterElements()` function, to have those items match based on that attribute, instead of their text content. By default, this value is `data-filter-property`, due to the elements to be filtered being arbitrary, and the `data-` prefixed properties being allowed on any element.|

## Events
The `<collection-filter>` element dispatches a `change` event any time a user invokes a query, as well as whenever the query `input` changes to an empty value. These events provide a trigger for filtering or removing all filters, based on user input.

The `change` event provides an `Array` of `ItemFilter` objects that describe the filters that the user has invoked. These objects are managed by the element and can currently only be either a `textQuery` type of filter, or a `regexQuery` type of filter. These filter objects are provided as a reference so that if a query does not return the expected results, the filters can be inspected to see where the results were filtered incorrectly.

If the `filters` property of the `change` event's provided `detail` data is an empty array, that indicates that the user has cleared the `<collection-filter>`'s query, and all filtering can be safely removed.

The following example logs the filters during each change event:
```html
<collection-filter></collection-filter>
<div class="items">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
    <div>E</div>
    <div>F</div>
    <div>Far</div>
    <div>Fear</div>
    <div>Big</div>
    <div>Dandy</div>
    <div data-filter-property="F">OOOO</div>
</div>
<script>
const filter = document.querySelector('collection-filter');
filter.addEventListener('change', (event) =>
{
    console.log(event.detail.filters);
});
</script>
```

## Filtering Elements
The `<collection-filter>` element provides a function for filtering HTML elements by their text content or by the custom-defined filter property.

To use the `filterElements()` function, pass in an array of `HTMLElement`s. Any of the element's that can be matched to the `<collection-filter>`'s current query will be represented in the `QueryMatch` objects that are returned.

Each `ItemFilterMatch` object provides the `HTMLElement` that was matched, the `ItemFilter` object that described the matching query, and the name of the attribute that was used for a match, if any. It also provides an array of `QueryMatch` objects that describe the exact text that matched, as well as the start and end indexes of where that text is located within the matching string.

The following example logs the matches during each change event:
```html
<collection-filter></collection-filter>
<div class="items">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
    <div>E</div>
    <div>F</div>
    <div>Far</div>
    <div>Fear</div>
    <div>Big</div>
    <div>Dandy</div>
    <div data-filter-property="F">OOOO</div>
</div>
<script>
const filter = document.querySelector('collection-filter');
filter.addEventListener('change', (event) =>
{
    const items = document.querySelectorAll('.items div');
    const matches = filter.filterElements(items);
    console.log(matches);
});
</script>
```

## Parts
|Part Name|Description|Element
|-|-|-|
|`search`|A container element that indicates the element's functionality to DOM agents.|`HTMLSearchElement`|
|`form`|A form element that handles user input.|`HTMLFormElement`|
|`query`|A container element that provides an inline layout for the input and it's related buttons.|`HTMLSpanElement`|
|`input`|The text input element users can enter their query into.|`HTMLInputElement[type="text"]`|
|`regex-button`|A button that toggles the `<collection-filter>`'s search type between regex, and text searches.|`HTMLButtonElement[type="button"]`|
|`regex-icon`|An icon that indicates Regular Expressions.|`SVGElement`|
|`search-button`|A button that submits the user's query.|`HTMLButtonElement[type="submit"]`|
|`search-icon`|An icon that indicates submitting a search request.|`SVGElement`|

## Slots
The `<collection-filter>` element exposes the following `slot`s: 
|Slot Name|Description|Default
|-|-|-|
|`regex-icon`|An icon that indicates Regular Expressions, dispalyed on the `regex-button` part.|`SVGElement`|
|`search-icon`|An icon that indicates submitting a search request, displayed on the `search-button` part.|`SVGElement`|

## Styling
The `<collection-filter>` element can be styled with CSS, normally. The `<collection-filter>` element also utilizes the shadowDOM for layout, so styling the internal layout elements must be done using a `::part()` selector.

In this example, the `query` part is being selected for styling:
```css
collection-filter::part(query)
{
    /* styling */
}
```

For a list of all part names, see the [parts](#parts) section.

## License
This library is in the public domain. You do not need permission, nor do you need to provide attribution, in order to use, modify, reproduce, publish, or sell it or any works using it or derived from it.
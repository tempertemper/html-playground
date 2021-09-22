---
title: Select dropdowns
---

`select` elements are used to give the user a list of items to choose from. Before using a select, we should first explore if an input with `type="radio"` can't be used.

<form>
    <label for="fruit">Favourite fruit</label>
    <select id="fruit">
        <option>Bananas</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Blueberries</option>
    </select>
</form>


## Select with default value

This is done with a ‘blank’ option that has:

- The `selected` attribute so that it is selected by default
- An empty `value` attribute so that it doesn’t submit any data and hopefully triggers validation
- The `disabled` attribute so it can't be reselected

<form>
    <label for="farm-animal">Favourite farm animal</label>
    <select id="farm-animal" required>
        <option disabled selected value="">Select an animal</option>
        <option>Cow</option>
        <option>Sheep</option>
        <option>Pig</option>
        <option>Goat</option>
        <option>Chicken</option>
    </select>
</form>


## Select with `optgroup`s

Values within a dropdown can be grouped.

<form>
    <label for="colour">Favourite colour</label>
    <select id="colour">
        <optgroup label="Cold colours">
            <option>Blue</option>
            <option>Green</option>
        </optgroup>
        <optgroup label="Hot colours">
            <option>Red</option>
            <option>Yellow</option>
        </optgroup>
    </select>
</form>

The [`datalist`](/forms/datalist) element can also be used to enhance a text field with a predefined list of values.

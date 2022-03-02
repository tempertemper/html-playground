---
title: Select dropdowns
---

`select` elements are used to give the user a list of items to choose from. Before using a select, we should first explore if an input with `type="radio"` can't be used.

<details>
<summary>Keyboard operability for Windows</summary>

- Tab to place focus on the select drop down list
- Spacebar will open the list but not close it
- Enter will open and close the list
- Up and down arrows can be used to make selection
- Tab to move focus from the select drop down list
</details>

<details>
<summary>Keyboard operability for Mac</summary>

- <kbd>Tab</kbd> to place focus on the select control
- <kbd>Space</kbd>, <kbd>Up</kbd>, or <kbd>Down</kbd> opens the list, highlighting the first option (if the first item is disabled, nothing is highlighted)
- <kbd>Up</kbd> and <kbd>Down</kbd> move up and down in the list; when the first option is reached:
    - <kbd>Up</kbd> does not move the highlight any further; when the last option is reached
    - <kbd>Down</kbd> does not move the highlight any further
- <kbd>Tab</kbd> does not do anything when the list is open
- <kbd>Space</kbd> or <kdb>Enter</kdb> chooses the currently highlighted option and closes the list
- <kbd>Escape</kbd> closes the list without selecting an option
</details>

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

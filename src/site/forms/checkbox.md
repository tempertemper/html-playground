---
title: Checkboxes
---
Checkboxes can be used on their own as a single form field.

<details>
    <summary>Keyboard operability</summary>
    <ul>
        <li>Tab to get into the element</li>
        <li>Only spacebar can be used to check or uncheck a box</li>
        <li>Tab will be used to navigate between mutliple checkboxes</li>
        <li>Tab to get out of the element</li>
    </ul>
</details>

<form>
    <label for="checkTheBox">Check the box</label>
    <input id="checkTheBox" type="checkbox" />
</form>

Checkboxes can also be grouped, where multiple options are allowed.

<form>
    <fieldset>
        <legend>Which Pokémon have you captured?</legend>
        <div>
            <input id="pikachu" type="checkbox" name="pokemon" />
            <label for="pikachu">Pikachu</label>
        </div>
        <div>
            <input id="squirtle" type="checkbox" name="pokemon" />
            <label for="squirtle">Squirtle</label>
        </div>
        <div>
            <input id="charmander" type="checkbox" name="pokemon" />
            <label for="charmander">Charmander</label>
        </div>
        <div>
            <input id="bulbasaur" type="checkbox" name="pokemon" />
            <label for="bulbasaur">Bulbasaur</label>
        </div>
    </fieldset>
</form>

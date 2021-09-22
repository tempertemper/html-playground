---
title: Checkboxes
---

<p>Checkboxes can be used on their own as a single form field.</p>

<form>
    <label for="checkTheBox">Check the box</label>
    <input id="checkTheBox" type="checkbox" />
</form>

<p>Checkboxes can also be grouped, where multiple options are allowed.</p>

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

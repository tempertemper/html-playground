---
title: Radios
---

Radio buttons should be used when the user can only select one option from a list.

<details>
    <summary>Keyboard operability</summary>
    <ul>
        <li>Tab to get into the element</li>
        <li>Use up/down or left/right arrows to make selection</li>
        <li>Tab to get out of the element</li>
    </ul>
</details>

<form>
    <fieldset>
        <legend>Who is your favourite Ninja Turtle</legend>
        <div>
            <input id="donatello" type="radio" name="ninjaTurtle" />
            <label for="donatello">Donatello</label>
        </div>
        <div>
            <input id="leonardo" type="radio" name="ninjaTurtle" />
            <label for="leonardo">Leonardo</label>
        </div>
        <div>
            <input id="michelangelo" type="radio" name="ninjaTurtle" />
            <label for="michelangelo">Michelangelo</label>
        </div>
        <div>
            <input id="raphael" type="radio" name="ninjaTurtle" />
            <label for="raphael">Raphael</label>
        </div>
    </fieldset>
</form>


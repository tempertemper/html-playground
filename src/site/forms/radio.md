---
title: Radios
intro: Radio buttons should be used when the user can only select one option from a group.
---

<details>
<summary>Keyboard operability</summary>

- <kbd>Tab</kbd> to get into the radio group
- Use <kbd>Up</kbd>/<kbd>Down</kbd> or <kbd>Left</kbd>/<kbd>Right</kbd> arrows to make selection
- <kbd>Tab</kbd> to get out of the radio group
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


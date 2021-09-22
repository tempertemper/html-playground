---
title: Datalists
---

Datalists can be added to a text input to add a predefined list of values. The `<datalist>` element, together with a `list` attribute that references the datalist’s ID are used.

<form>
    <label for="wild-animal">Favourite wild animal</label>
    <input id="wild-animal" list="animalList">
    <datalist id="animalList">
        <option>Lions</option>
        <option>Tigers</option>
        <option>Bears</option>
    </datalist>
</form>

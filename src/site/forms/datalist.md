---
title: Datalists
intro: Datalists enhance a text input with add a predefined list of options to choose from.
---

The `<datalist>` element, together with a `list` attribute that references the datalist’s ID are used.

<form>
    <label for="wild-animal">Favourite wild animal</label>
    <input id="wild-animal" list="animalList" type="text">
    <datalist id="animalList">
        <option>Lions</option>
        <option>Tigers</option>
        <option>Bears</option>
    </datalist>
</form>

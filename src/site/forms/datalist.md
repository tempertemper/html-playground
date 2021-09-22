---
title: Datalists
---

<p>Datalists can be added to a text input to add a predefined list of values. The <code>{{ "<datalist>" | escape }}</code> element, together with a <code>list</code> attribute that references the datalist’s id are used:</p>

<form>
    <label for="wild-animal">Favourite wild animal</label>
    <input id="wild-animal" list="animalList">
    <datalist id="animalList">
        <option>Lions</option>
        <option>Tigers</option>
        <option>Bears</option>
    </datalist>
</form>

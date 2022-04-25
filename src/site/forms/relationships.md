---
title: Relationships
intro: Visual relationships between form elements should also be made programmatically, so that screen reader users get the same experience.
---

Form fields that have a label and input pairing will have a `for` and `id` attribute on each of those elements, but sometimes groupings can be more complex.

## Hint/help text

<form>
    <div>
        <label for="text">This is a simple text box</label>
        <div id="text-hint">This is some text to help you complete the form field successfully.</div>
        <input id="text" type="text" aria-describedby="text-hint" />
    </div>
</form>


## Fieldsets with hint/help text

With fieldsets, the `aria-describedby` attribute will normally be added to the `<fieldset>` tag if it applies to all options in the set.

<form>
    <fieldset aria-describedby="fieldset-hint">
        <legend>Do you like Marmite?</legend>
        <div id="fieldset-hint">You either like it or you don’t.</div>
        <div>
            <input id="marmite-yes" type="radio" name="marmite" />
            <label for="marmite-yes">Yes</label>
        </div>
        <div>
            <input id="marmite-no" type="radio" name="marmite" />
            <label for="marmite-no">No</label>
        </div>
    </fieldset>
</form>

It’s still fine to add hint text on individual radio options though.

<form>
    <fieldset>
        <legend>Do you like The Sopranos?</legend>
        <div>
            <input id="sopranos-yes" type="radio" name="sopranos" aria-describedby="sopranos-option-one-hint" />
            <label for="sopranos-yes">Yes</label>
            <span id="sopranos-option-one-hint">This is the correct answer.</span>
        </div>
        <div>
            <input id="sopranos-no" type="radio" name="sopranos" aria-describedby="sopranos-option-two-hint" />
            <label for="sopranos-no">No</label>
            <span id="sopranos-option-two-hint">You haven’t watched it, have you?</span>
        </div>
    </fieldset>
</form>

Sometimes it’s necessary to provide hint text on both the group and the input itself:

<form>
    <fieldset>
        <legend>Do you like Return of the Jedi?</legend>
        <span id="jedi-hint">This was the third film in the Star Wars franchise, released in 1983.</span>
        <div>
            <input id="jedi-yes" type="radio" name="jedi" aria-describedby="jedi-hint jedi-option-one-hint" />
            <label for="jedi-yes">Yes</label>
            <span id="jedi-option-one-hint">You were young enough to enjoy the Ewoks.</span>
        </div>
        <div>
            <input id="jedi-no" type="radio" name="jedi" aria-describedby="jedi-hint jedi-option-two-hint" />
            <label for="jedi-no">No</label>
            <span id="jedi-option-two-hint">You were too old to enjoy the Ewoks.</span>
        </div>
    </fieldset>
</form>

<i>Note adding the `aria-describedby` attribute to the `<fieldset>` would be more efficient than adding a second value to the `<input>` elements’ `aria-describedby` attributes. Unfortunately screen readers usually override, rather than add to this with the more specific `aria-describedby` attributes on the `<input>` elements.</i>

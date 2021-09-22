---
title: relationships
---

<p>Visual relationships and groupings can be created between form elements, and those should be created programmatically too, so that screen reader users get the same experience.</p>

<p>Form fields that have a label and input pairing will have a `for` and `id` attribute on each of those elements, but sometimes groupings can be more complex.</p>

<h2>Hint/help text</h2>

<form>
    <div>
        <label for="text">This is a simple text box</label>
        <div id="text-hint">This is some text to help you complete the form field successfully.</div>
        <input id="text" type="text" aria-describedby="text-hint" />
    </div>
</form>


<h2>Fieldsets with hint/help text</h2>

<p>With fieldsets, the <code>aria-describedby</code> attribute will normally be added to the <code>{{ "<fieldset>" | escape }}</code> tag if it applies to all options in the set.</p>

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

<p>It’s still fine to add hint text on individual radio options though.</p>

<form>
    <fieldset>
        <legend>Do you like The Sopranos?</legend>
        <div>
            <input id="sopranos-yes" type="radio" name="sopranos" aria-describedby="option-one-hint" />
            <label for="sopranos-yes">Yes</label>
            <span id="option-one-hint">This is the correct answer.</span>
        </div>
        <div>
            <input id="sopranos-no" type="radio" name="sopranos" aria-describedby="option-two-hint" />
            <label for="sopranos-no">No</label>
            <span id="option-two-hint">You haven’t watched it, have you?</span>
        </div>
    </fieldset>
</form>

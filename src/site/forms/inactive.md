---
title: Inactive form fields
intro: Some attributes can limit interaction with a form field.
---

## Disabled

Disabled form fields cannot be focused, changed, and aren’t submitted with the form. For more detailed information, check out [MDN Web Docs on `disabled` form fields](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).

The `disabled` attribute works on all sorts of inputs, but it [should be used with caution](https://www.tempertemper.net/blog/how-to-avoid-disabled-buttons).

### Text input

<form>
    <div>
        <label for="enabled">This text field is enabled</label>
        <input id="enabled" value="Some text" type="text" />
    </div>
    <br />
    <div>
        <label for="disabled">This text field is disabled</label>
        <input id="disabled" value="Some text" type="text"disabled />
    </div>
</form>

### Radios

<form>
    <fieldset>
        <legend>Do you like Adventure Time?</legend>
        <div>
            <input id="yes" type="radio" name="adventureTime" />
            <label for="yes">Yes</label>
        </div>
        <div>
            <input id="no" type="radio" name="adventureTime" disabled />
            <label for="no">No</label>
        </div>
    </fieldset>
</form>

### Checkboxes

<form>
    <fieldset>
        <legend>What is the magic number?</legend>
        <div>
            <input id="one" type="checkbox" name="magicNumber" disabled />
            <label for="one">One</label>
        </div>
        <div>
            <input id="two" type="checkbox" name="magicNumber" disabled />
            <label for="two">Two</label>
        </div>
        <div>
            <input id="three" type="checkbox" name="magicNumber" />
            <label for="three">Three</label>
        </div>
    </fieldset>
</form>

### Buttons

It even works on buttons:

<button type="submit">This button is enabled</button>
<br />
<br />
<button type="submit" disabled>This button is disabled</button>


## Read-only

The values in read-only inputs can still be selected, but they cannot be changed. MDN has [more details on `readonly`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).

<form>
    <div>
        <label for="active">This text field is active</label>
        <input id="active" value="Some text" type="text" />
    </div>
    <br />
    <div>
        <label for="read-only">This text field is read-only</label>
        <input id="read-only" value="Some text" type="text"readonly />
    </div>
</form>

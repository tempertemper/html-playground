---
title: Disabled form fields
---

The `disabled` attribute stops users interacting with a form field.

For more detailed information, check out [MDN Web Docs on `disabled` form fields](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).

<form>
    <div>
        <label for="enabled">This text field is enabled</label>
        <input id="enabled" type="text" />
    </div>
    <br />
    <div>
        <label for="disabled">This text field is disabled</label>
        <input id="disabled" value="Some text" type="text"disabled />
    </div>
    <br />
    <div>
        <label for="read-only">This text field is read only</label>
        <input id="read-only" value="Some text" type="text"readonly />
    </div>
</form>

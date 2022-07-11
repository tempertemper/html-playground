---
title: Grouping form fields
intro: Sometimes grouping form fields is necessary.
---

Some inputs, like [radios](/forms/radio/), don’t make sense unless they’re in a group. Other inputs, like [checkboxes](/forms/checkbox/), or plain old text inputs can [stand alone](/forms/basic/) or be grouped if appropriate:

<form>
    <fieldset>
        <legend>What is your address?</legend>
        <label for="first-line">First line</label>
            <input id="first-line" type="text" />
        <label for="second-line">Second line</label>
            <input id="second-line" type="text" />
        <label for="town-or-city">Town or city</label>
            <input id="town-or-city" type="text" />
        <label for="postcode">Postcode</label>
            <input id="postcode" type="text" />
        <label for="country">Country</label>
            <input id="country" type="text" />
    </fieldset>
</form>

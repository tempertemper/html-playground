---
title: Virtual keyboards with inputmode
---

With the `inputmode` attribute, we can help our touchscreen users by giving them the most appropriate virtual keyboard.

For more detailed information, check out [MDN Web Docs on `inputmode`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).

<i>Note, no formatting is enforced by `inputmode`.</i>

<form>
    <div>
        <label for="whole-number">A whole number</label>
        <input id="whole-number" inputmode="numeric" />
    </div>
    <br />
    <div>
        <label for="decimal-number">A decimal number</label>
        <input id="decimal-number" inputmode="decimal" />
    </div>
    <br />
    <div>
        <label for="telephone">Enter a telephone number</label>
        <input id="telephone" inputmode="tel" />
    </div>
    <br />
    <div>
        <label for="email">Enter an email address</label>
        <input id="email" inputmode="email" />
    </div>
    <br />
    <div>
        <label for="url">Enter a website address</label>
        <input id="url" inputmode="url" />
    </div>
</form>

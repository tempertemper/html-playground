---
title: Virtual keyboards with inputmode
---

With the `inputmode` attribute, we can help our touchscreen users by giving them the most appropriate virtual keyboard.

For more detailed information, check out [MDN Web Docs on `inputmode`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).

<i>Note, no formatting is enforced by `inputmode`.</i>


## Numeric

<form>
    <label for="whole-number">A whole number</label>
    <input id="whole-number" inputmode="numeric" type="text" />
</form>


## Decimal

<form>
    <label for="decimal-number">A decimal number</label>
    <input id="decimal-number" inputmode="decimal" type="text" />
</form>


## Tel

<form>
    <label for="telephone">Enter a telephone number</label>
    <input id="telephone" inputmode="tel" type="text" />
</form>

## Email

<form>
    <label for="email">Enter an email address</label>
    <input id="email" inputmode="email" type="text" />
</form>


## URL

<form>
    <label for="url">Enter a website address</label>
    <input id="url" inputmode="url" type="text" />
</form>

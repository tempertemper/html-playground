---
title: Virtual keyboards with inputmode
---

<p>With the <code>inputmode</code> attribute, we can help our touchscreen users by giving them the most appropriate virtual keyboard.</p>

<p>For more detailed information, check out <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode">MDN Web Docs on <code>inputmode</code></a>.</p>

<p><i>Note, no formatting is enforced by <code>inputmode</code>.</i></p>

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

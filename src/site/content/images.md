---
title: Images
---

<h2>Alt (or equivalent) text</h2>

<p>Images should normally be described in text, usually using the <code>alt</code> attribute.</p>

<img src="https://i.pinimg.com/originals/1a/a3/60/1aa360e4342c35730bc4d5561fe95685.png" alt="BMO from Adventure Time sitting on Jake the Dog's head, sitting on Finn the Human's head, all of them smiling happily" width="100" height="184" />

<p>If an image is purely decorative and would provide no value to a screen reader user, the <code>alt</code> attribute should be empty.</p>

<p><i>Note: a space or other invisible character does not count as empty and will be attempted to be read by screen readers.</i></p>

<img src="https://i.pinimg.com/originals/1a/a3/60/1aa360e4342c35730bc4d5561fe95685.png" alt="" width="100" height="184" />

<p>If there is no <code>alt</code> attribute, screen readers will read the file name:</p>

<img src="https://i.pinimg.com/originals/1a/a3/60/1aa360e4342c35730bc4d5561fe95685.png" width="100" height="184" />

<h2>Animated images</h2>

<p>Animated Gifs or MP4s can be used to display an animation.</p>

<p>By using the <code><picture></code> element and the <code>media="(prefers-reduced-motion: no-preference)"</code> attribute we can ensure our <a href="https://www.tempertemper.net/blog/progressively-enhanced-animated-content">animations are not given to users who have set their operating system to reduce motion</a>.</p>

<picture>
    <source srcset="https://media.giphy.com/media/pO4UHglOY2vII/giphy.gif" media="(prefers-reduced-motion: no-preference)"></source>
    <img srcset="https://media.tenor.com/images/c18898cf8cc3e1aa5e797d3908151bb0/tenor.png" alt="The image description goes here"/>
</picture>

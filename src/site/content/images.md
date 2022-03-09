---
title: Images
intro: Images are used to convey information in a purely visual way.
---

## Alt (or equivalent) text

Images should normally be described in text, usually using the `alt` attribute.

<img src="https://i.pinimg.com/originals/1a/a3/60/1aa360e4342c35730bc4d5561fe95685.png" alt="BMO from Adventure Time sitting on Jake the Dog's head, sitting on Finn the Human's head, all of them smiling happily" width="100" height="184" />

If an image is purely decorative and would provide no value to a screen reader user, the `alt` attribute should be empty.

<i>Note: a space or other invisible character does not count as empty and will be attempted to be read by screen readers.</i>

<img src="https://i.pinimg.com/originals/1a/a3/60/1aa360e4342c35730bc4d5561fe95685.png" alt="" width="100" height="184" />

If there is no `alt` attribute, screen readers will read the file name:

<img src="https://i.pinimg.com/originals/1a/a3/60/1aa360e4342c35730bc4d5561fe95685.png" width="100" height="184" />

## Animated images

Animated Gifs or MP4s can be used to display an animation.

By using the `<picture>` element and the `media="(prefers-reduced-motion: no-preference)"` attribute we can ensure our [animations are not given to users who have set their operating system to reduce motion](https://www.tempertemper.net/blog/progressively-enhanced-animated-content).

<picture>
    <source srcset="https://media.giphy.com/media/pO4UHglOY2vII/giphy.gif" media="(prefers-reduced-motion: no-preference)"></source>
    <img srcset="https://media.tenor.com/images/c18898cf8cc3e1aa5e797d3908151bb0/tenor.png" alt="The image description goes here"/>
</picture>

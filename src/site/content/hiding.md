---
title: Hiding content
intro: Sometimes it’s necessary to hide content from some users in order to give the best experience.
---

Hiding content is usually either:

- Visually, but not for screen readers
- For screen readers, but not visually

The former is more common as sometimes it’s often helpful to communicate context to screen readers that is implicit visually, for example the ‘Edit’ links on a list of editable items:

<style>
  .visually-hidden {
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>

<dl>
    <dt>Muhammad</dt>
        <dd>Age 30</dd>
        <dd><a href="#">Edit<span class="visually-hidden"> Muhammad</span></a></dd>
    <dt>Wendy</dt>
        <dd>Age 53</dd>
        <dd><a href="#">Edit<span class="visually-hidden"> Wendy</span></a></dd>
    <dt>Oscar</dt>
        <dd>Age 70</dd>
        <dd><a href="#">Edit<span class="visually-hidden"> Oscar</span></a></dd>
    <dt>John</dt>
        <dd>Age 28</dd>
        <dd><a href="#">Edit<span class="visually-hidden"> John</span></a></dd>
    <dt>Brian</dt>
        <dd>Age 39</dd>
        <dd><a href="#">Edit<span class="visually-hidden"> Brian</span></a></dd>
</dl>

Here a `<span>` with the class of `visually-hidden` has been wrapped around the person’s name, which is repeated in the ‘Edit’ link, but only to screen reader users. The CSS looks like this:

```css
.visually-hidden {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

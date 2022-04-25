---
title: Custom landmarks
intro: Elements like headers, footers, and navigation are built into HTML as they’re common to most websites, but sometimes something more individual is called for.
---

Some examples of custom landmarks are:

- Filter panels for product listings
- Calls to action
- ‘About the author’ box-outs on blog articles

Custom landmarks are created using the `<section>` element. They can also be created by using `role="region"`, though [the two methods are not quite interchangeable](/structure/header-and-footer/#role-region-does-not-scope).

Sections should be given an accessible name via `aria-labelledby` or `aria-label`.


## Labelling with a heading

These sections are labelled by their heading, using `aria-labelledby`.

<section aria-labelledby="section-one-heading">
  <h3 id="section-one-heading">Section 1</h3>
  This is the first section on the page.
</section>


## Labelling without a heading

<section aria-label="Section 2">
  This is the second section on the page.
</section>

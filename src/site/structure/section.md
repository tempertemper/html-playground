---
title: Custom landmarks
---

<p>Elements like {{ "<header>" | escape }}, {{ "<footer>" | escape }}, and {{ "<nav>" | escape }} are built into HTML as they're common landmarks across most websites, but sometimes something more individual is called for, for example:</p>

<ul>
    <li>Filter panels for product listings</li>
    <li>Calls to action</li>
    <li>‘About the author’ box-outs on blog articles</li>
</ul>

<p>Custom landmarks are created using the {{ "<section>" | escape }} element. They can also be created by using <code>role="region"</code>, though <a href="/structure/header-and-footer/#role-region-does-not-scope">the two methods are not quite interchangeable</a>.</p>

<p>Sections should be given an accessible name via <code>aria-labelledby</code> or <code>aria-label</code>.</p>


<h2>Labelling with a heading</h2>

<p>These sections are labelled by their heading, using <code>aria-labelledby</code>.</p>

<section aria-labelledby="section-one-heading">
  <h3 id="section-one-heading">Section 1</h3>
  <p>This is the first section on the page.</p>
</section>


<h2>Labelling without a heading</h2>

<section aria-label="Section 2">
  <p>This is the second section on the page.</p>
</section>


<!-- <div tabindex="-1" role="alert">This is a toast <button>Close</button></div> -->

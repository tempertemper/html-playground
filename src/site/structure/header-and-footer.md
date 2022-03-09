---
title: Headers and footers
intro: Headers and footers can be used for the whole page as well as for sections on the page itself.
---

Only one `banner` and `contentinfo` landmark is allowed on each page, but it is possible to add more than one `<header>` and `<footer>`. Scoping a `<header>` or `<footer>` in a `<section>` or `<article>` prevents the `banner` and `contentinfo` landmark roles being exposed.

<i>Note: in theory we [should be able to use `<nav>` and `<aside>` to scope `<header>` and `<footer>` elements](https://www.tempertemper.net/blog/implicit-aria-landmark-roles#in-practice), but in practice this is not always reliable.</i>


## Product tiers available

<section aria-labelledby="section-one-heading">
  <header><h3 id="section-one-heading">Bronze</h3></header>
  <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
  </ul>
  <a href="#">Buy Bronze now</a>
  <footer>Terms and conditions apply.</footer>
</section>

<section aria-labelledby="section-one-heading">
  <header><h3 id="section-one-heading">Silver</h3></header>
  Our most popular tier.
  <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
  </ul>
  <a href="#">Buy Silver now</a>
  <footer>Terms and conditions apply.</footer>
</section>

<section aria-labelledby="section-one-heading">
  <header><h3 id="section-one-heading">Gold</h3></header>
  <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
  </ul>
  <a href="#">Buy Gold now</a>
  <footer>Terms and conditions apply.</footer>
</section>

<h2 id="role-region-does-not-scope">The region role does not scope</h2>

Using a generic element with the `role="region"` attribute may create a custom landmark region but it <em>does not</em> scope `<header>` and `<footer>` elements.

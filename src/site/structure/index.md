---
title: Page structure
---

Page structure can be communicated programmatically.

There is a header, footer and navigation on each page of this website. These are known as ‘landmark regions’ and there are HTML elements for each:

- `<header>`, which conveys the `banner` landmark to screen readers
- `<footer>`, which conveys the `contentinfo` landmark to screen readers
- `<nav>`, which conveys the `navigation` landmark to screen readers

Only one `banner` and `contentinfo` landmark is allowed on each page. Where there is more than one `navigation` landmark, they should be labelled with `aria-label` or `aria-labelledby` in order to distinguish them for screen reader users.

<nav aria-label="On page">

## Play with page structure

- [Custom landmarks](/structure/section)
- [Headers and footers](/structure/header-and-footer)

</nav>

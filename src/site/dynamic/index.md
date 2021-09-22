---
title: Dynamic content
---

<style>
  [id="loading"] {
    display: none;
  }
  .open {
    display: block;
  }
</style>

<p>Sometimes content is loaded with JavaScript. When this happens, <code>aria-live="polite"</code> should be used to convey the presence or status of any new content to screen reader users (in other words, non-visually).</p>

<p>The following button will toggle a ‘loading’ state, both visually and programmatically:</p>

<button id="load">Load</button>
<div id="loading" aria-live="polite" aria-busy="true">Loading</div>

<script>
    const loadButton = document.querySelector("#load");
    const loadingContent = document.querySelector("#loading");
    loadButton.addEventListener("click", () => {
        loadingContent.classList.toggle("open");
    });
</script>

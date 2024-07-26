---
title: Modals
intro: Modals and dialogs are content areas that belong to a page but wouldn't make sense on a new page
---

<style>
    dialog::backdrop {
        background: rgba(0,0,0,0.6);
    }
</style>

<button id="showDialog">Show dialog</button>

<dialog id="confirmationDialog" aria-labelledby="dialogHeading">
    <h1 id="dialogHeading">This is a dialog</h1>
    <button id="closeModal">Close</button>
</dialog>

<script>
    let dialog = document.getElementById("confirmationDialog");
    document
    .getElementById("showDialog")
    .addEventListener("click", function() {
        dialog.showModal();
        dialog.focus();
    });
    dialog.addEventListener("close", function() {
        document.getElementById('showDialog').focus();
    });
    document
    .getElementById("closeModal")
    .addEventListener("click", function () {
        dialog.close();
        document.getElementById("showDialog").focus();
    });
</script>

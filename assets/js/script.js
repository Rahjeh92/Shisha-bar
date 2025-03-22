function toggleMenu(id) {
    var menu = document.getElementById(id);

    if (menu.style.maxHeight) {
        menu.style.maxHeight = null; // Collapse this menu
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px"; // Expand only this menu
    }
}

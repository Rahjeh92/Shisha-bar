/**
 * Toggles the visibility of a menu with a smooth slide effect.
 * @param {string} id - The ID of the menu to toggle.
 */
function toggleMenu(id) {
    var menu = document.getElementById(id);

    if (!menu) {
        console.error("Menu not found: " + id);
        return;
    }

    if (menu.style.maxHeight) {
        menu.style.maxHeight = null; // Collapse this menu
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px"; // Expand this menu
    }
}

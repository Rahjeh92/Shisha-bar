function toggleMenu(id) {
    var menu = document.getElementById(id);
    var menus = document.querySelectorAll('.menu-items');

    if (!menu) {
        console.error("Menu not found: " + id);
        return;
    }

    menus.forEach(function (otherMenu) {
        if (otherMenu.id !== id) {
            otherMenu.style.maxHeight = null;
        }
    });

    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
    }
}
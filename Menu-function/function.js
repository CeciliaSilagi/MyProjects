const menBtn = document.getElementById('menu-btn');
const menuItems = document.getElement('menu');

menBtn.addEventListener('click', () => {
    menBtn.classList.toggle('active');
    menuItems.classList.toggle('active');
});
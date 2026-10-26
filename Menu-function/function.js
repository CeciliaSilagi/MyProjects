const menBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menu');

menBtn.addEventListener('click', () => {
    menBtn.classList.toggle('active');
    menuItems.classList.toggle('active');
});
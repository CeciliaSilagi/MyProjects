function changeSize(menu) {
    if(window.innerWidth >= 768){
        itens.style.display ='block';
    } else {
        itens.style.display = 'none';
    }
}

function clickMenu(){
    if(window.innerWidth >= 768){
        items.style.display = 'block';
    } else {
        items.style.display = 'none';
    }

    if(itens.style.display == 'block') {
        itens.style.display = 'none;'
    } else {
        itens.style.display = 'block';
    }

    const Menu = document.getElementById(Menu);
}

function Mouseover (){
    const burgermenu = document.getElementById("burger-menu");
    document.getElementById("menu-items").innerHTML;

}

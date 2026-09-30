function changeSize() {
    if(window.innerWidth >= 768 && itens.style.display == 'block') {
        itens.style.display ='none';
    } else {
        itens.style.display = 'block';
    }

    const Menu = document.getElementById(Menu);
    document.getElementById("menu-items").innerHTML;
}

function clickMenu(){
    if(window.innerWidth >= 768 && items.style.display == 'block') {
        items.style.display = 'none';
    } else {
        items.style.display = 'block';
    }

     const Menu = document.getElementById(Menu);
     document.getElementById("menu-items").innerHTML;
}

function Mouseover (){
    if(window.innerWidth >= 768 && items.style.display == 'block') {
        items.style.display = 'none';
    } else {
        items.style.display = 'block';
    }
    
    const burgermenu = document.getElementById("burger-menu");
    document.getElementById("menu-items").innerHTML;

}

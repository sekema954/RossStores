//show mobile dropdown when menubar is clicked;

function showDropodwn(){
    const dropdownEl = document.querySelector(".mobile-dropdown-menu");
    const mobileNavbarList = document.querySelector(".mobile-navbar-list");
    dropdownEl.classList.toggle('toggleDropdown');
    mobileNavbarList.classList.toggle("toggleMobileLinks");
}

const menubarEL = document.querySelector(".menu-bar");
menubarEL.addEventListener("click", ()=>{
    showDropodwn();
});


//toggle shop option container
function caretClicked(){
    const shopOption = document.querySelector(".shop-option");
    const shopOptionLinks = document.querySelector(".shop-option-links");
    shopOption.classList.toggle("change-height");
    shopOptionLinks.classList.toggle("toggleShopOptionLinks");
}


const shopCaret = document.querySelector(".shop-option-caret");
shopCaret.addEventListener('click', ()=>{
    caretClicked();
});
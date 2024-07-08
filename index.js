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
    shopCaret.classList.toggle('toggleRotateCaret');
    caretClicked();
});



//navbar fixed on window scroll
function navbarScroll(){
    const navbar = document.querySelector(".navbar");
    if(window.scrollY >= 100) {
        navbar.classList.add("toggleNavbar");
    } else {
        navbar.classList.remove("toggleNavbar");
    }

}


window.addEventListener("scroll", ()=>{
    navbarScroll();
})
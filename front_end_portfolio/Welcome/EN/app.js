import sublinks from './data.js';
import subMenu from './nav.js';
import sideBar from './sidebar.js';

const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const contactBtn = document.querySelector(".contact-btn");
const submenucontact = document.querySelector(".submenu-contact");

subMenu();
sideBar();


//FAIRE DISPARAITRE LE MENU QUAND ON HOVER AILLEURS QUE SUR LE BOUTON
hero.addEventListener("mouseover",function(e){
contactBtn.textContent="Contact me"
submenu.classList.remove("show");
submenucontact.classList.remove("show");
})


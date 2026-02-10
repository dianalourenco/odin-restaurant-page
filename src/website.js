import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


function nav() {
    const homeButton = document.querySelector(".button-nav.home");
    const menuButton = document.querySelector(".button-nav.menu");
    const contactButton = document.querySelector(".button-nav.contact");

    homeButton.addEventListener("click", loadHome);
    menuButton.addEventListener("click", loadMenu);
    contactButton.addEventListener("click", loadContact);
}


function initializeWebsite() {
    loadHome(); 
    nav();      
};

export default initializeWebsite;
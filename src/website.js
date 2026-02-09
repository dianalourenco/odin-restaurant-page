import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


function nav() {
    const homeButton = document.querySelectorAll(".button-nav")[0];
    const menuButton = document.querySelectorAll(".button-nav")[1];
    const contactButton = document.querySelectorAll(".button-nav")[2];

    homeButton.addEventListener("click", loadHome);
    menuButton.addEventListener("click", loadMenu);
    contactButton.addEventListener("click", loadContact);
}


function initializeWebsite() {
    const content = document.getElementById("content");
    loadHome();

    nav();

};

export default initializeWebsite;
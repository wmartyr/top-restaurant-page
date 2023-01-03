import mainPageContent from "./main-page";
import menuPageContent from "./menu-page";
import aboutPageContent from "./about-us-page";
import '../styles/reset.css';
import '../styles/style.css';

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");
var currentPage = "main";

content.appendChild(mainPageContent);

var logo = document.querySelector("#logo");
var menuButton = document.querySelector("#menu-page-button");
var aboutButton = document.querySelector("#about-us-button");
console.log(logo);

logo.addEventListener("click", logoClickActions);

function logoClickActions() {
    if (currentPage === "menu") {
        logo.removeEventListener("click", logoClickActions);
        menuButton.removeEventListener("click", menuClickActions);
        aboutButton.removeEventListener("click", aboutClickActions);
        content.removeChild(menuPageContent);
        content.appendChild(mainPageContent);
        logo = document.querySelector("#logo");
        menuButton = document.querySelector("#menu-page-button");
        aboutButton = document.querySelector("#about-us-button");
        logo.addEventListener("click", logoClickActions);
        menuButton.addEventListener("click", menuClickActions);
        aboutButton.addEventListener("click", aboutClickActions);
        currentPage = "main";
    } else if (currentPage === "about") {
        logo.removeEventListener("click", logoClickActions);
        menuButton.removeEventListener("click", menuClickActions);
        aboutButton.removeEventListener("click", aboutClickActions);
        content.removeChild(aboutPageContent);
        content.appendChild(mainPageContent);
        logo = document.querySelector("#logo");
        menuButton = document.querySelector("#menu-page-button");
        aboutButton = document.querySelector("#about-us-button");
        logo.addEventListener("click", logoClickActions);
        menuButton.addEventListener("click", menuClickActions);
        aboutButton.addEventListener("click", aboutClickActions);
        currentPage = "main";
    };
}

menuButton.addEventListener("click", menuClickActions);

function menuClickActions() {
    console.log("menu clicked");
    if (currentPage === "main") {
        logo.removeEventListener("click", logoClickActions);
        menuButton.removeEventListener("click", menuClickActions);
        aboutButton.removeEventListener("click", aboutClickActions);
        content.removeChild(mainPageContent);
        content.appendChild(menuPageContent);
        logo = document.querySelector("#logo");
        menuButton = document.querySelector("#menu-page-button");
        aboutButton = document.querySelector("#about-us-button");
        logo.addEventListener("click", logoClickActions);
        menuButton.addEventListener("click", menuClickActions);
        aboutButton.addEventListener("click", aboutClickActions);
        currentPage = "menu";
    } else if (currentPage === "about") {
        logo.removeEventListener("click", logoClickActions);
        menuButton.removeEventListener("click", menuClickActions);
        aboutButton.removeEventListener("click", aboutClickActions);
        content.removeChild(aboutPageContent);
        content.appendChild(menuPageContent);
        logo = document.querySelector("#logo");
        menuButton = document.querySelector("#menu-page-button");
        aboutButton = document.querySelector("#about-us-button");
        logo.addEventListener("click", logoClickActions);
        menuButton.addEventListener("click", menuClickActions);
        aboutButton.addEventListener("click", aboutClickActions);
        currentPage = "menu";
    }
}

aboutButton.addEventListener("click", aboutClickActions);

function aboutClickActions() {
    console.log("about us clicked");
    if (currentPage === "main") {
        logo.removeEventListener("click", logoClickActions);
        menuButton.removeEventListener("click", menuClickActions);
        aboutButton.removeEventListener("click", aboutClickActions);
        content.removeChild(mainPageContent);
        content.appendChild(aboutPageContent);
        logo = document.querySelector("#logo");
        menuButton = document.querySelector("#menu-page-button");
        aboutButton = document.querySelector("#about-us-button");
        logo.addEventListener("click", logoClickActions);
        menuButton.addEventListener("click", menuClickActions);
        aboutButton.addEventListener("click", aboutClickActions);
        currentPage = "about";
    } else if (currentPage === "menu") {
        logo.removeEventListener("click", logoClickActions);
        menuButton.removeEventListener("click", menuClickActions);
        aboutButton.removeEventListener("click", aboutClickActions);
        content.removeChild(menuPageContent);
        content.appendChild(aboutPageContent);
        logo = document.querySelector("#logo");
        menuButton = document.querySelector("#menu-page-button");
        aboutButton = document.querySelector("#about-us-button");
        logo.addEventListener("click", logoClickActions);
        menuButton.addEventListener("click", menuClickActions);
        aboutButton.addEventListener("click", aboutClickActions);
        currentPage = "about";
    }
}

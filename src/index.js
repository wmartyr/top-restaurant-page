import mainPageContent from "./main-page";
import '../styles/reset.css';
import '../styles/style.css';

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");
const logo = document.querySelector("#logo");
var currentPage = "main";

content.appendChild(mainPageContent);

// logo.addEventListener("click", () => {
//     if (currentPage === "menu") {
//         content.removeChild(menuPageContent);
//         content.appendChild(mainPageContent);
//         currentPage = "main";
//     } else if (currentPage === "about") {
//         content.removeChild(aboutPageContent);
//         content.appendChild(mainPageContent);
//         currentPage = "main";
//     }
// })

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         if (button.id === "menu-page-button") {
//             if (currentPage === "main") {
//                 content.removeChild(mainPageContent);
//                 content.appendChild(menuPageContent);
//                 currentPage = "menu";
//             } else if (currentPage === "about") {
//                 content.removeChild(aboutPageContent);
//                 content.appendChild(menuPageContent);
//                 currentPage = "menu";
//             }
//         }
//         if (button.id === "about-page-button") {
//             if (currentPage === "main") {
//                 content.removeChild(mainPageContent);
//                 content.appendChild(aboutPageContent);
//                 currentPage = "about";
//             } else if (currentPage === "menu") {
//                 content.removeChild(menuPageContent);
//                 content.appendChild(aboutPageContent);
//                 currentPage = "about";
//             }
//         }
//     });
// });
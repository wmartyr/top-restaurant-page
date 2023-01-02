const mainPageContent = document.createElement("div");

const pageHeader = document.createElement("header");

const headerLeft = document.createElement("div");
headerLeft.classList.add("header-left");

const nameOnMainPage1 = document.createElement("div");
nameOnMainPage1.classList.add("name-main");
nameOnMainPage1.textContent = "MaCh";

const nameOnMainPage2 = document.createElement("div");
nameOnMainPage2.classList.add("name-main");
nameOnMainPage2.textContent = "Bakery";

headerLeft.appendChild(nameOnMainPage1);
headerLeft.appendChild(nameOnMainPage2);

const headerRight = document.createElement("div");
headerRight.classList.add("header-right");

const menuButton = document.createElement("button");
menuButton.classList.add("menu-page");
menuButton.setAttribute("id", "menu-page-button");
menuButton.textContent = "MENU";

const aboutUsButton = document.createElement("button");
aboutUsButton.classList.add("about-us");
aboutUsButton.setAttribute("id", "about-us-button");
aboutUsButton.textContent = "ABOUT US";

headerRight.appendChild(menuButton);
headerRight.appendChild(aboutUsButton);

pageHeader.appendChild(headerLeft);
pageHeader.appendChild(headerRight);

const pageMain = document.createElement("main");
pageMain.classList.add("main-of-main");

const pageFooter = document.createElement("footer");
pageFooter.textContent = "320 Pulteney St, Adelaide South Australia 5000";

mainPageContent.appendChild(pageHeader);
mainPageContent.appendChild(pageMain);
// pageContent,appendChild(pageFooter);

export default pageContent;


// TODO fix issue where page does not follow css rules.

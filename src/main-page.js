const pageContent = document.createElement("div");

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
menuButton.textContent = "MENU";

const aboutUsButton = document.createElement("button");
aboutUsButton.classList.add("about-us");
aboutUsButton.textContent = "ABOUT US";

headerRight.appendChild(menuButton);
headerRight.appendChild(aboutUsButton);

pageHeader.appendChild(headerLeft);
pageHeader.appendChild(headerRight);

pageContent.appendChild(pageHeader);



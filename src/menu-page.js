import image1 from "../images/eiliv-aceron-0FPa5PTEo7M-unsplash.jpg";
import image2 from "../images/marianna-ole-4El3DUkQs2g-unsplash.jpg";
import image3 from "../images/claudio-pantoni-RXIvf9wR60U-unsplash.jpg";

const menuPageContent = document.createElement("div");

const pageHeader = document.createElement("header");

const headerLeft = document.createElement("div");
headerLeft.classList.add("header-left");
headerLeft.setAttribute("id", "logo");

const nameOnMainPage1 = document.createElement("div");
nameOnMainPage1.classList.add("name-secondary");
nameOnMainPage1.textContent = "MaCh";

const nameOnMainPage2 = document.createElement("div");
nameOnMainPage2.classList.add("name-secondary");
nameOnMainPage2.textContent = "Bakery";

headerLeft.appendChild(nameOnMainPage1);
headerLeft.appendChild(nameOnMainPage2);

const headerRight = document.createElement("div");
headerRight.classList.add("header-right");

const menuButton = document.createElement("button");
menuButton.classList.add("menu-page", "highlight");
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
pageMain.classList.add("main-of-menu");

const img1 = document.createElement("img");
img1.classList.add("menu-image", "menu-image-1");
img1.src = image1;

const menuDesc1 = document.createElement("div");
menuDesc1.classList.add("menu-desc", "menu-desc-1");

const foodName1 = document.createElement("div");
foodName1.classList.add("food-name");
foodName1.textContent = "LAMINGTONS";

const foodDesc1 = document.createElement("div");
foodDesc1.classList.add("food-desc");
foodDesc1.textContent = "3 MOIST BUTTER SPONGE CAKES DIPPED IN CHOCOLATE THEN COATED WITH COCONUT";

const foodPrice1 = document.createElement("div");
foodPrice1.classList.add("food-price");
foodPrice1.textContent = "$ 5.0";

menuDesc1.appendChild(foodName1);
menuDesc1.appendChild(foodDesc1);
menuDesc1.appendChild(foodPrice1);

const img2 = document.createElement("img");
img2.classList.add("menu-image", "menu-image-2");
img2.src = image2;

const menuDesc2 = document.createElement("div");
menuDesc2.classList.add("menu-desc", "menu-desc-2");

const foodName2 = document.createElement("div");
foodName2.classList.add("food-name");
foodName2.textContent = "TIRAMISU";

const foodDesc2 = document.createElement("div");
foodDesc2.classList.add("food-desc");
foodDesc2.textContent = "LADYFINGERS DIPPED IN COFFEE WITH MASCARPONE CHEESE AND COCOA";

const foodPrice2 = document.createElement("div");
foodPrice2.classList.add("food-price");
foodPrice2.textContent = "$ 7.0";

menuDesc2.appendChild(foodName2);
menuDesc2.appendChild(foodDesc2);
menuDesc2.appendChild(foodPrice2);

const img3 = document.createElement("img");
img3.classList.add("menu-image", "menu-image-3");
img3.src = image3;

const menuDesc3 = document.createElement("div");
menuDesc3.classList.add("menu-desc", "menu-desc-3");

const foodName3 = document.createElement("div");
foodName3.classList.add("food-name");
foodName3.textContent = "CANNOLI";

const foodDesc3 = document.createElement("div");
foodDesc3.classList.add("food-desc");
foodDesc3.textContent = "3 TUBE SHAPED PASTRY SHELLS WITH A SWEET CREAMY FILLING";

const foodPrice3 = document.createElement("div");
foodPrice3.classList.add("food-price");
foodPrice3.textContent = "$ 7.0";

menuDesc3.appendChild(foodName3);
menuDesc3.appendChild(foodDesc3);
menuDesc3.appendChild(foodPrice3);

pageMain.appendChild(img1);
pageMain.appendChild(menuDesc1);

pageMain.appendChild(img2);
pageMain.appendChild(menuDesc2);

pageMain.appendChild(img3);
pageMain.appendChild(menuDesc3);

menuPageContent.appendChild(pageHeader);
menuPageContent.appendChild(pageMain);

export default menuPageContent;

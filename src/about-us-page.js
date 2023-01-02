const aboutPageContent = document.createElement("div");

const pageHeader = document.createElement("header");

const headerLeft = document.createElement("div");
headerLeft.classList.add("header-left");

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
menuButton.classList.add("menu-page");
menuButton.setAttribute("id", "menu-page-button");
menuButton.textContent = "MENU";

const aboutUsButton = document.createElement("button");
aboutUsButton.classList.add("about-us", "highlight");
aboutUsButton.setAttribute("id", "about-us-button");
aboutUsButton.textContent = "ABOUT US";

headerRight.appendChild(menuButton);
headerRight.appendChild(aboutUsButton);

pageHeader.appendChild(headerLeft);
pageHeader.appendChild(headerRight);

const pageMain = document.createElement("main");
pageMain.classList.add("main-about-us");

const p1 = document.createElement("p");
p1.textContent = "SITUATED IN THE ADELAIDE CBD, MACH BAKERY HAS BEEN SERVING FINE DELICACIES TO THE PEOPLE OF ADELAIDE SINCE 1932.";

const p2 = document.createElement("p");
p2.textContent = "HENRY MASTERS ARRIVED IN AUSTRALIA IN 1926. HE WORKED ODD JOBS UNTIL HE HAD ENOUGH MONEY TO START MASTERS BAKERY IN NORTH ADELAIDE IN 1932.";

const p3 = document.createElement("p");
p3.textContent = "IN 1940, HE MARRIED ELEANOR CHAPMAN AND HE RENAMED HIS BAKERY AFTER THE FIRST TWO LETTERS OF THEIR SURNAMES.";

const p4 = document.createElement("p");
p4.textContent = "THEY MOVED TO THEIR CURRENT LOCATION IN 1952. IT IS NOW OWNED AND OPERATED BY THEIR GREAT GRANDCHILDREN STILL PRODUCING THE BEST DESSERTS IN TOWN.";

pageMain.appendChild(p1);
pageMain.appendChild(p2);
pageMain.appendChild(p3);
pageMain.appendChild(p4);

aboutPageContent.appendChild(pageHeader);
aboutPageContent.appendChild(pageMain);

export default aboutPageContent;
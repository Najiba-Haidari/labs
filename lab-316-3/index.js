// import "./styles.css";
// import "./styles.css";

const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
  {text: 'all', href: '/catalog/all'},
  {text: 'top selling', href: '/catalog/top'},
  {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
  {text: 'new', href: '/orders/new'},
  {text: 'pending', href: '/orders/pending'},
  {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
  {text: 'profile', href: '/account/profile'},
  {text: 'sign out', href: '/account/signout'},
  ]},
  ];

//PART 1
var mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//PART 2
var topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//PART 3
// Menu data structure
// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

for (const link of menuLinks) {
  var linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
}

//PART 2 LAB 316-3
//submenu
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

var topMenuLinks = topMenuEl.querySelectorAll("a");

const handleTopMenu = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  event.target.classList.toggle("active");

  topMenuLinks.forEach((link) => {
    if (link !== event.target) link.classList.remove("active");
  });

  const link = menuLinks.find(
    (link) => event.target.textContent == link.text
  );

  link.subLinks && event.target.classList.contains("active")
    ? (subMenuEl.style.top = "100%")
    : (subMenuEl.style.top = "0");

  console.log("clicked on ", event.target.textContent, link);
  buildSubMenu(link.subLinks);
};

const buildSubMenu = (subLinks) => {
  subMenuEl.innerHTML = "";
  if (!subLinks) return;
  const mappedSubLinks = subLinks.map((link) => {
    var aTag = document.createElement("a");
    aTag.setAttribute("href", link.href);
    aTag.textContent = link.text;
    // subMenuEl.appendChild(linkEl);
    return aTag;
  });
  console.log(`${mappedSubLinks} mappedSubLinks`);
  subMenuEl.append(...mappedSubLinks);
};

// const handleSubMenu = (event) => {
//   event.preventDefault();
//   const activeSubMenuItem = event.target;
//   if (event.target.tagName !== "A") return;
//   subMenuEl.style.top = '0';
//   topMenuEl.forEach((link) => {
//     if (link !== event.target) link.classList.remove('active');
//   })
//   const h1 = 
// }

topMenuEl.addEventListener("click", handleTopMenu);
// subMenuEl.addEventListener("click", handleSubMenu)
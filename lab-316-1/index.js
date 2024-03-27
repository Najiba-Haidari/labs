// import "./styles.css";

//PART 1
var mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//PART 2
var topMenueEl = document.getElementById("top-menu");
topMenueEl.style.height = "100%";
topMenueEl.style.backgroundColor = "var(--top-menu-bg)";
topMenueEl.classList.add("flex-around");

//PART 3
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

for (const link of menuLinks) {
  var linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenueEl.appendChild(linkEl);
}



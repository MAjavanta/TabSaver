let myTabs = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabLst = document.getElementById("tab-lst");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const tabsFromLocalStorage = JSON.parse(localStorage.getItem("tabs"));
if (tabsFromLocalStorage) {
  myTabs = tabsFromLocalStorage;
  renderAllLeads();
}

inputBtn.addEventListener("click", () => {
  addItem(inputEl.value);
  inputEl.value = "";
});

deleteBtn.addEventListener("dblclick", () => {
  myTabs = [];
  localStorage.setItem("tabs", JSON.stringify(myTabs));
  tabLst.innerHTML = "";
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    addItem(tabs[0].url);
  });
});

function addItem(item) {
  myTabs.push(item);
  localStorage.setItem("tabs", JSON.stringify(myTabs));
  console.log(localStorage.getItem("tabs"));
  renderLead(item);
}

function renderLead(item) {
  let listItem = getListItemHTML(item);
  tabLst.innerHTML += listItem;
}

function renderAllLeads() {
  for (let i = 0; i < myTabs.length; i++) {
    tabLst.innerHTML += getListItemHTML(myTabs[i]);
  }
}

function getListItemHTML(link) {
  return `
    <li>
      <a target="_blank" href="${link}">
        ${link}
      </a>
    </li>
    `;
}

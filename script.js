let myTabs = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabLst = document.getElementById("tab-lst");
const deleteBtn = document.getElementById("delete-btn");

const tabsFromLocalStorage = JSON.parse(localStorage.getItem("tabs"));
if (tabsFromLocalStorage) {
  myTabs = tabsFromLocalStorage;
  renderAllLeads();
}

inputBtn.addEventListener("click", () => {
  myTabs.push(inputEl.value);
  localStorage.setItem("tabs", JSON.stringify(myTabs));
  console.log(localStorage.getItem("tabs"));
  renderLead();
  inputEl.value = "";
});

deleteBtn.addEventListener("dblclick", () => {
  myTabs = [];
  localStorage.setItem("tabs", JSON.stringify(myTabs));
  tabLst.innerHTML = "";
});

function renderLead() {
  let listItem = getListItemHTML(inputEl.value);
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

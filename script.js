let myTabs = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabLst = document.getElementById("tab-lst");

inputBtn.addEventListener("click", () => {
  myTabs.push(inputEl.value);
  renderLead();
  inputEl.value = "";
});

function renderLead() {
  let listItem = `
    <li>
      <a target="_blank" href="${inputEl.value}">
          ${inputEl.value}
      </a>
    </li>`;
  console.log(listItem);
  tabLst.innerHTML += listItem;
}

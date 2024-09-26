const saveInputEl = document.getElementById("save-input");
const saveTabEl = document.getElementById("save-tab");
const clearAllEl = document.getElementById("clear-all");
const inputAreaEl = document.getElementById("input-area");
const leadsAreaEl = document.getElementById("leads-area");

leads = [];
saveInputEl.addEventListener("click", () => {
  if (inputAreaEl.value) {
    leads.push(inputAreaEl.value);
    appendLeads(leads);
    inputAreaEl.value = ''
    leads = [];


  }
});

leadsAreaEl.textContent = leads[0];

appendLeads(leads);

function appendLeads(itemsList) {
  for (i = 0; i < itemsList.length; i++) {
    let ulEl = document.createElement("ul");
    let liEl = document.createElement("li");
    let anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", itemsList[i]);
    anchorEl.textContent = itemsList[i];

    liEl.append(anchorEl);
    ulEl.append(liEl);
    leadsAreaEl.append(ulEl);
  }
}

let leadsList = []
const inputBtnEl = document.getElementById("input-btn");
const tabBtnEl = document.getElementById("tab-btn");
const clearAllEl = document.getElementById("clear-all");
const inputAreaEl = document.getElementById("input-area");
const leadsAreaEl = document.getElementById("leads-area");
let leadsFromLocal = JSON.parse(localStorage.getItem('leadsList'))

if (leadsFromLocal) {
  leadsList = leadsFromLocal
  renderLeads(leadsList)
}

inputBtnEl.addEventListener('click', () =>{
  if (inputAreaEl.value) {
    leadsList.push(inputAreaEl.value)
    inputAreaEl.value = ''
    localStorage.setItem('leadsList', JSON.stringify(leadsList))
    renderLeads(leadsList)  
  }
})

clearAllEl.addEventListener('click', ()=>{
  localStorage.clear()
  leadsList = []
  renderLeads(leadsList)
})

tabBtnEl.addEventListener('click', () => {
  
})

function renderLeads(leads) {
  leadsAreaEl.textContent = ''
  for (let i = 0; i < leads.length; i++) {
    let ulEl = document.createElement('ul')
    let liEl = document.createElement('li')
    let anchorEl = document.createElement('a')
    anchorEl.setAttribute("href", leads[i])
    anchorEl.textContent = leads[i]
    // append to dom
    liEl.append(anchorEl)
    ulEl.append(liEl)
    leadsAreaEl.append(ulEl)  
  }
 }
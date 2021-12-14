import { $ } from '../dom.js';
import PurchaseItem from '../purchaseMode/purchaseItem.js';
function drawbuttonInTable() {
  const button = document.createElement("button");
  button.innerText = "구매하기";
  button.addEventListener("click", PurchaseItem);
  return button;
}
function drawItemInTable(itemList) {
  for (let i = 0; i < Object.keys(itemList).length; i++){
    const tr = document.createElement("tr");
    tr.className = "product-manage-item";
    const td = document.createElement("td");
    let nameTd = td.cloneNode(true);
    nameTd.innerText = itemList[i].name;
    nameTd.className = "product-manage-name";
    let priceTd = td.cloneNode(true);
    priceTd.innerText = itemList[i].price;
    priceTd.className = "product-manage-price";
    let countTd = td.cloneNode(true);
    countTd.innerText = itemList[i].count;
    let buttonTd = td.cloneNode(true);
    priceTd.className = "product-manage-quantity";
    buttonTd.appendChild(drawbuttonInTable());
    tr.append(nameTd, priceTd, countTd, buttonTd);
    $("#product-table").appendChild(tr);
  }
}
export default function ManageModeDrawTable() {
  const table = $("#product-table");
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  const itemList = JSON.parse(localStorage.getItem('itemList'));
  drawItemInTable(itemList);
} 
import { $ } from '../../dom.js';
import { buttonElementCreate, divElementCreate, h2ElementCreate, inputElementCreate, tableElmentCreate, tbodyElementCreate, theadElementCreate, trElementCreate } from '../makeElement.js';
import { ResetContents } from '../resetContents.js';
import { ProductAddButtonClicked } from './productAddButtonClicked.js';

function makeAddModeBasic() {
  const addModeInputBlock = divElementCreate('addMode-inputs-Block');
  const title = h2ElementCreate('상품 추가하기');
  const productNameInput = inputElementCreate('product-name-input', 'text', '상품명');
  const productPriceInput = inputElementCreate('product-price-input', 'number', '가격');
  const productCountInput = inputElementCreate('product-quantity-input', 'number', '수량');
  const productAddButton = buttonElementCreate('product-add-button', 'submit', '추가하기');
  addModeInputBlock.append(title, productNameInput, productPriceInput, productCountInput, productAddButton);
  $('#contents').appendChild(addModeInputBlock);
  ProductAddButtonClicked();
}
function makeAddModeTableBasic() {
  const addModeTableBlock = divElementCreate('addMode-table-block'); 
  const addTableTitle = h2ElementCreate('상품 현황');
  const addTable = tableElmentCreate('product-add-table');
  const addTableThead = theadElementCreate('상품명, 가격, 수량');
  const addTableTbody = tbodyElementCreate();
  addTable.appendChild(addTableThead);
  addTable.appendChild(addTableTbody);
  addModeTableBlock.append(addTableTitle, addTable);
  $('#contents').appendChild(addModeTableBlock);
}
function makeAddModeTable() {
  makeAddModeTableBasic();
  const itemList = JSON.parse(localStorage.getItem('itemList'));
  for (let i = 0; i < itemList.length; i++){
    const addTableTr = trElementCreate([
      [itemList[i].name, 'product-manage-name'], [itemList[i].price, 'product-manage-price'], [itemList[i].count, 'product-manage-quantity']
    ], 'product-manage-item');
    $('#product-add-table tbody').appendChild(addTableTr);
  }
}
export default function ProductAddMode() {
  ResetContents();
  makeAddModeBasic();
  makeAddModeTable();
}
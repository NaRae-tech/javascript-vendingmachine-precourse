import { $ } from '../../dom.js';
import { Item } from '../object/itemInformation.js';

function makeInputsToItem() {
  const productName = $('#product-name-input').value;
  const productPrice = $('#product-price-input').value;
  const productCount = $('#product-quantity-input').value;
  const item = new Item(productName, productPrice, productCount);
  return item;
}
function productAdd() {
  const itemList = JSON.parse(localStorage.getItem('itemList'));
  itemList.push(makeInputsToItem());
  localStorage.setItem('itemList', JSON.stringify(itemList));
}
export function ProductAddButtonClicked() {
  $('#product-add-button').addEventListener('click', productAdd);
}
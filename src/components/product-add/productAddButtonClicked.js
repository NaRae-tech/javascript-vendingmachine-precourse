import { $ } from '../../dom.js';
import { Item } from '../object/itemInformation.js';
import { productAddInputValidity } from './productAddInputValidity.js';

function duplicationValidity(name, price, count, itemList) {
  for (let i = 0; i < itemList.length; i++){
    if (itemList[i].name === name && itemList[i].price === price) {
      return i;
    }
  }
  return -1;
}
function productAdd() {
  const itemList = JSON.parse(localStorage.getItem('itemList'));
  const productName = $('#product-name-input').value;
  const productPrice = $('#product-price-input').value;
  const productCount = $('#product-quantity-input').value;
  const duplicationIndex = duplicationValidity(productName, productPrice, productCount, itemList);
  if (duplicationIndex !== -1) {
    itemList[duplicationIndex].count = parseInt(itemList[duplicationIndex].count) + parseInt(productCount);
    console.log(itemList);
  }
  else if (productAddInputValidity(productName, productPrice, productCount)) {
    const item = new Item(productName, productPrice, productCount);
    itemList.push(item);
  }
  localStorage.setItem('itemList', JSON.stringify(itemList));
}
export function ProductAddButtonClicked() {
  $('#product-add-button').addEventListener('click', productAdd);
}
import { $ } from './dom.js';
import { h1ElementCreate, buttonElementCreate, divElementCreate } from './components/makeElement.js';

function setStart() {
  const mainTitle = h1ElementCreate('🥤자판기🥤');
  const purchaseTabButton = buttonElementCreate('product-purchase-menu', 'button', '상품 구매');
  const manageTabButton = buttonElementCreate('vending-machine-manage-menu', 'button', '잔돈 충전');
  const addTabButton = buttonElementCreate('product-add-menu', 'button', '상품 관리');
  const contentDiv = divElementCreate('contents');
  $('#app').append(mainTitle, purchaseTabButton, manageTabButton, addTabButton,contentDiv);
  
}
export function vendingMachine() {
  setStart();
}
vendingMachine();
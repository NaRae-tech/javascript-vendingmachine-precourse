import { $ } from '../dom.js';
import { h1ElementCreate, buttonElementCreate, divElementCreate } from './makeElement.js';
import ProductPurchaseMode from './product-purchase/productPurchaseMode.js';
import MachineManageMode from './vending-machine-manage/vendingMachineManageMode.js';
import ProductAddMode from './product-add/productAddMode.js';

export function SetMainTitleButtons() {
  const mainTitle = h1ElementCreate('🥤자판기🥤');
  const purchaseTabButton = buttonElementCreate('product-purchase-menu', 'button', '상품 구매');
  const manageTabButton = buttonElementCreate('vending-machine-manage-menu', 'button', '잔돈 충전');
  const addTabButton = buttonElementCreate('product-add-menu', 'button', '상품 관리');
  const contentDiv = divElementCreate('contents');
  $('#app').append(mainTitle, purchaseTabButton, manageTabButton, addTabButton, contentDiv);
  mainTabEventListeners();
}
function mainTabEventListeners(){
  $('#product-purchase-menu').addEventListener('click', ProductPurchaseMode);
  $('#vending-machine-manage-menu').addEventListener('click', MachineManageMode);
  $('#product-add-menu').addEventListener('click', ProductAddMode);
}

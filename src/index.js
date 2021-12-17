import { $ } from './dom.js';
import { h1ElementCreate, buttonElementCreate, divElementCreate } from './components/makeElement.js';
import ProductPurchaseMode from './components/product-purchase/productPurchaseMode.js';
import MachineManageMode from './components/vending-machine-manage/vendingMachineManageMode.js';
import ProductAddMode from './components/product-add/productAddMode.js';

function setMainTitleButtons() {
  const mainTitle = h1ElementCreate('🥤자판기🥤');
  const purchaseTabButton = buttonElementCreate('product-purchase-menu', 'button', '상품 구매');
  const manageTabButton = buttonElementCreate('vending-machine-manage-menu', 'button', '잔돈 충전');
  const addTabButton = buttonElementCreate('product-add-menu', 'button', '상품 관리');
  const contentDiv = divElementCreate('contents');
  $('#app').append(mainTitle, purchaseTabButton, manageTabButton, addTabButton,contentDiv);
}
function mainTabEventListeners(){
  $('#product-purchase-menu').addEventListener('click', ProductPurchaseMode);
  $('#vending-machine-manage-menu').addEventListener('click', MachineManageMode);
  $('#product-add-menu').addEventListener('click', ProductAddMode);
}
export function vendingMachine() {
  setMainTitleButtons();
  mainTabEventListeners();
}
vendingMachine();
import { SetMainTitleButtons } from './components/mainTitleTab.js';
import { VendingMachine } from './components/object/vendingMachineInformation.js';

function makeNewVendingMachine() {
  let vendingMachine = new VendingMachine();
  localStorage.setItem('vendingMachine', 'true');
  localStorage.setItem('itemList', JSON.stringify(vendingMachine.itemList));
  localStorage.setItem('coinList', JSON.stringify(vendingMachine.coinList));
}
export function vendingMachine() {
  SetMainTitleButtons();
  if (!localStorage.getItem('vendingMachine')) {
    makeNewVendingMachine();
  } 
}

vendingMachine();
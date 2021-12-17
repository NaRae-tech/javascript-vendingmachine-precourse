import { $ } from '../../dom.js';
import { ResetContents } from '../resetContents.js';
import { buttonElementCreate, divElementCreate, h2ElementCreate, inputElementCreate, pElementCreate, tableElmentCreate, tbodyElementCreate, theadElementCreate, trIdElementCreate } from '../makeElement.js';
import { ManageButtonClicked } from './manageButtonClicked.js';

export const CoinUnit = [500, 100, 50, 10];

export function totalMachineMoneyCalculate() {
  const coinList = JSON.parse(localStorage.getItem('coinList'));
  let money = 0;
  for (let i = 0; i < coinList.count.length; i++){
    money += (coinList.count[i] * CoinUnit[i]);
  }
  return money;
}
function makeManageModeBasic() {
  const manageModeInputBlock = divElementCreate('manageMode-inputs-Block');
  const title = h2ElementCreate('자판기 동전 충전하기');
  const coinInput = inputElementCreate('vending-machine-charge-input', 'number', '자판기가 보유할 금액');
  const coinButton = buttonElementCreate('vending-machine-charge-button', 'submit', '충전하기');
  const coinP = pElementCreate('vending-machine-charge-amount', `보유금액: ${totalMachineMoneyCalculate()}`);
  manageModeInputBlock.append(title, coinInput, coinButton, coinP);
  $('#contents').appendChild(manageModeInputBlock);
  $('#vending-machine-charge-button').addEventListener('click', ManageButtonClicked);
}
function makeManageModeTableBasic() {
  const manageModeTableBlock = divElementCreate('manageMode-table-block');
  const managaTableTitle = h2ElementCreate('자판기가 보유한 동전');
  const manageTable = tableElmentCreate('vending-machine-coin-table');
  const manageTableThead = theadElementCreate('동전, 개수');
  const manageTableTbody = tbodyElementCreate();
  manageTable.appendChild(manageTableThead);
  manageTable.appendChild(manageTableTbody);
  manageModeTableBlock.append(managaTableTitle, manageTable);
  $('#contents').appendChild(manageModeTableBlock);
}
function makeManageModeTable() {
  makeManageModeTableBasic();
  const coinList = JSON.parse(localStorage.getItem('coinList'));
  for (let i = 0; i < coinList.count.length; i++){
    const manageTableTr = trIdElementCreate(
      [[`${CoinUnit[i]}원`,''],[`${coinList.count[i]}개`, `vendig-machine-coin-${CoinUnit[i]}-quantity`]]
    );
    $('#vending-machine-coin-table').appendChild(manageTableTr);
  }
}
export default function ManageMode() {
  ResetContents();
  makeManageModeBasic();
  makeManageModeTable();
}
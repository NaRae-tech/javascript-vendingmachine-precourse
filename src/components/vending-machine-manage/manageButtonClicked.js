import { $ } from '../../dom.js';
import { CoinInputValidity } from './coinInputValidity.js';
import { MakeRandomCharge } from './makeRandomCharge.js';
import {totalMachineMoneyCalculate } from './manageMode.js';
import ManageMode from './manageMode.js';
function changeCoinAmount(money) {
  const totalMoney = totalMachineMoneyCalculate() + parseInt(money);
  $('#vending-machine-charge-amount').innerHTML = `보유 금액: ${totalMoney}`;
}
function changeCoinTable(money) {
  let coinList = JSON.parse(localStorage.getItem('coinList'));
  const randomNewCoins = MakeRandomCharge(parseInt(money));
  console.log(randomNewCoins);
  for (let i = 0; i < coinList.count.length; i++){
    coinList.count[i] = parseInt(coinList.count[i]) + randomNewCoins[i];
  }
  localStorage.setItem('coinList', JSON.stringify(coinList));
}
export function ManageButtonClicked() {
  const moneyInput = $('#vending-machine-charge-input').value;
  if (CoinInputValidity(moneyInput)) {
    changeCoinAmount(moneyInput);
    changeCoinTable(moneyInput);
    ManageMode();
  }
}
import { CoinUnit } from './manageMode.js';

export function MakeRandomCharge(money) {
  let coinCountList = [];
  const coinUnit = CoinUnit;
  for (let i = 0; i < coinUnit.length-1; i++){
    const coinCount = MissionUtils.Random.pickNumberInList([...Array(parseInt(money / coinUnit[i])+1).keys()]);
    coinCountList.push(coinCount);
    money -= (coinUnit[i] * coinCount);
  }
  coinCountList.push(parseInt(money / coinUnit[coinUnit.length - 1]));
  return coinCountList;
}
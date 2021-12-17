export class VendingMachine{
  constructor() {
    this.itemList = [];
    this.coinList = [{ 'FIVE-HUN': 0 }, { 'ONE-HUN': 0 }, { 'FIFTY': 0 }, { 'TEN': 0 }];
  }
  pushItem(item) {
    this.itemList.push(item);
  }
  popItem(item) {
    for (let i = 0; i < this.itemList.length; i++){
      if (this.itemList[i].name === item.name) {
        this.itemList.splice(i, 1);
        break;
      }
    }
  }
}
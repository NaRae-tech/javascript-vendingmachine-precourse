export class VendingMachine{
  constructor() {
    this.itemList = [];
    this.coinList = { 'count':[0,0,0,0] };
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
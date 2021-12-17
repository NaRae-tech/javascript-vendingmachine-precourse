export class Item{
  constructor(_name, _price, _count) {
    this.name = _name;
    this.price = _price;
    this.count = _count;
  }
  upCount(num) {
    this.count += num;
  }
  downCount(num) {
    this.count -= num;
  }
}
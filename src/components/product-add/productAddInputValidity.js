function nameValidity(name) {
  if (name.length === 0) {
    return alert('이름은 1자 이상 입력해주세요.');
  }
  return true;
}
function priceValidity(price) {
  if (isNaN(parseInt(price))) {
    return alert('물품 가격은 숫자로 입력해주세요.');
  }
  if (price < 100) {
    return alert('물품 가격은 100원이상이여야 합니다.');
  }
  if (price % 10 > 0) {
    return alert('물품 가격은 10원이상 단위여야 합니다.');
  }
  return true;
}
function countValidity(count) {
  if (isNaN(parseInt(count))) {
    return alert('물품 개수는 숫자로 입력해주세요.');
  }
  if (parseInt(count) < 1) {
    return alert('물품 개수는 1개 이상이여야 합니다.');
  }
  return true;
}

export function productAddInputValidity(name, price, count) {
  if (!nameValidity(name)) {
    return false;
  }
  if (!priceValidity(price)) {
    return false;
  }
  if (!countValidity(count)) {
    return false;
  }
  return true;
}
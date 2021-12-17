function numberValidity(money) {
  if (isNaN(parseInt(money))) {
    return alert('숫자를 입력해주세요.');
  }
  return true;
}
function rangeValidity(money) {
  if (parseInt(money) < 10) {
    return alert('최소 10원부터 충전 가능합니다.');
  }
  return true;
}
function unitValidity(money) {
  if (parseInt(money) % 10 > 0) {
    return alert('10원 단위로 충전 가능합니다.');
  }
  return true;
}
export function CoinInputValidity(money) {
  if (!numberValidity(money)) {
    return false;
  }
  if (!rangeValidity(money)) {
    return false;
  }
  if (!unitValidity(money)) {
    return false;
  }
  return true;
}
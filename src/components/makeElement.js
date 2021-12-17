export function h1ElementCreate(text) {
  const h1 = document.createElement('h1');
  h1.innerText = text;
  return h1;
}
export function h2ElementCreate(text) {
  const h2 = document.createElement('h2');
  h2.innerText = text;
  return h2;
}
export function divElementCreate(id) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  return div;
}
export function pElementCreate(id, text) {
  const p = document.createElement('p');
  p.setAttribute('id', id);
  p.innerText = text;
  return p;
}
export function inputElementCreate(id, type, placeholder) {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeholder);
  return input;
}
export function buttonElementCreate(id, type, text) {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.setAttribute('type', type);
  button.innerHTML = text;
  return button;
}
export function tableElmentCreate(id) {
  const table = document.createElement('table');
  table.setAttribute('id', id);
  return table;
}
export function theadElementCreate(text) {
  const splitText = text.split(', ');
  const thead = document.createElement('thead');
  const th = document.createElement('th');
  for (let i = 0; i < splitText.length; i++){
    const tempTh = th.cloneNode(true);
    tempTh.innerHTML = splitText[i];
    thead.appendChild(tempTh);
  }
  return thead;
}
export function trElementCreate(text, className) {
  const tr = document.createElement('tr');
  if (className !== '') {
    tr.setAttribute('class', className);
  }
  const td = document.createElement('td');
  for (let i = 0; i < text.length; i++){
    const tempTd = td.cloneNode(true);
    tempTd.innerHTML = text[i][0];
    tempTd.setAttribute('class', text[i][1]);
    tr.appendChild(tempTd);
  }
  return tr;
}
export function trIdElementCreate(text) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  console.log(text);
  for (let i = 0; i < text.length; i++){
    const tempTd = td.cloneNode(true);
    tempTd.innerHTML = text[i][0];
    if (text[i] !== '') {
      tempTd.setAttribute('id', text[i][1]);
    }
    tr.appendChild(tempTd);
  }
  return tr;
}
export function tbodyElementCreate() {
  const tbody = document.createElement('tbody');
  return tbody;
}
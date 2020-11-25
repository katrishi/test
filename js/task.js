let btnCreate = document.querySelector('button.insert');
let taskImg = document.querySelector('div.task-img');
let taskText = document.querySelector('div.task-text');

let selectText = document.getElementById('selectText'); //checkbox
let insertText = document.createElement('textarea'); //textarea

btnCreate.addEventListener('click', function () {
  let valueText = insertText.value;
  let p = document.createElement('p');
  p.innerText =valueText;
  taskText.append(p);
  insertText.style.display="none";
  selectText.checked = false;



});

selectText.addEventListener('click', function () {
  if (selectText.checked) {
    selectText.after(insertText);
  }

});

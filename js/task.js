//button
let btnCreate = document.querySelector('button.insert');
let bntDel = document.querySelector('button.del');

//text
let taskText = document.querySelector('div.task-text');
let selectText = document.getElementById('selectText'); //checkboxText
let insertText = document.createElement('textarea'); //textarea

//image
let taskImg = document.querySelector('div.task-img');
let selectImg = document.getElementById('selectImg'); //checkboxImg
let addImg = document.getElementsByClassName('addImg')[0];
let image = [];

//добвление елемента
btnCreate.addEventListener('click', function (e) {
  e.preventDefault();

  if (selectText.checked) {
    let valueText = insertText.value;
    let p = document.createElement('p');
    p.innerText = valueText;
    taskText.append(p);
    insertText.value = '';
    selectText.checked = false;
    insertText.remove();
  }

  if (selectImg.checked) {
    let img = document.createElement('img');
    image.forEach(el => {
      taskImg.append(el);
      el.classList.remove('sel');

    });
  }

  selectImg.checked = false;
  addImg.className = 'addImg';

});

selectText.addEventListener('click', function () {
  if (selectText.checked) {
    selectText.after(insertText);
  } else {
    insertText.remove();
  }

});

selectImg.addEventListener('click', function () {
  if (selectImg.checked) {
    addImg.classList.add('visible');
    let images = document.querySelectorAll('.addImg img');
    for (let i = 0; i < images.length; i++) {
      images[i].onclick = function () {
        images[i].classList.add('sel');
        image.push(images[i]);
      };
    }
  } else {
    addImg.className = 'addImg';
  }
});

//удаление елемента
let del = [];
let elem = document.getElementsByClassName('sectionUpdate')[0];
let elements = elem.querySelectorAll('h2, p, img');

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    elements[i].style.border = '2px solid red';
    del.push(elements[i]);
  };

}

bntDel.addEventListener('click', function (e) {
  e.preventDefault();

  if (del) {
    del.forEach(el => {
      el.remove();
    });
  }

});



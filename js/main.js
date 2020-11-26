let menu = document.getElementById('menu');

menu.addEventListener('click', function (e) {
  e.preventDefault();
  let resp = document.getElementById('nav');

  if (resp.className === 'nav') {
    resp.className += ' responsive';
  } else {
    resp.className = 'nav';
  }

});

let xhr = new XMLHttpRequest();
let user;
let url = 'https://jsonplaceholder.typicode.com/users/3/';
xhr.open('GET', url, true);

xhr.send();

let userName = document.getElementsByClassName('bg-img')[0];

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let user = JSON.parse(xhr.responseText);
    getUserInfo(user['name']);
  }

};

function getUserInfo(data) {
  userName.innerHTML = `<h2> ${data},</h2><p>приветсвуем Вас</p>`;
}


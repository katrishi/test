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
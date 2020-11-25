const submit = document.getElementById('submit');
const name = document.getElementById('from_name');
const subj = document.getElementById('subject');
const email = document.getElementById('from_email');
const mess = document.getElementById('message');

submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (validateName() && validateSubject() && validateEmail() && validateMessage()) {

    let inputs = document.querySelectorAll('input, textarea');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }
});

function validateName () {

  if (isEmpty(name)) {
    return;
  }
  return true;
}

function validateSubject () {

  if (isEmpty(subj)) {
    return;
  }
  return true;
}

function validateEmail () {
  let emailValue = email.value;
  const patternEmail = /[0-9a-z_-]+@[0-9a-z]+\.[a-z]{2,5}/i;

  if (isEmpty(email)) {
    return;
  }

  if (patternEmail.test(emailValue) === false) {
    setError(email, 'Введите email в формате: somebody@example.com');
  } else {
    setSuccsess(email);
  }

  return true;
}

function validateMessage () {

  if (isEmpty(mess)) {
    return;
  }
  return true;
}

function isEmpty (input) {
  if (input.value.trim() === '' || input.value == null) {
    setError(input, 'Это поле должно быть заполнено');
    return true;
  }

  setSuccsess(input);
  return false;
}

function setSuccsess (input) {
  let element = input.parentElement;
  input.nextElementSibling.innerHTML = '';
  element.classList.add('success');
}

function setError (input, message) {
  let element = input.parentElement;
  input.nextElementSibling.innerHTML = message;
  element.classList.add('error');
}











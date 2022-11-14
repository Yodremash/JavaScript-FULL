export function finishForm() {
  const elemForm = document.querySelector('.login-form');
  const newInput = document.createElement('input');
  const setLogin = document.querySelector('input');
  setLogin.setAttribute('name', 'login');
  elemForm.append(newInput);
  newInput.setAttribute('type', 'password');
  newInput.setAttribute('name', 'password');
}

finishForm();

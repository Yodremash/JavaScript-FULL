const baseUrl = 'https://63a4977b2a73744b007c0712.mockapi.io/api/v1/newusers';

const submitBtn = document.querySelector('.submit-button');
const getFormData = document.querySelector('.login-form');
const errorText = document.querySelector('.error-text');

const changeStatusBtn = () => {
  if (getFormData.reportValidity()) {
    submitBtn.disabled = false;
  }
};

getFormData.addEventListener('input', changeStatusBtn);

const getResult = e => {
  e.preventDefault();
  const myFormDataOnPage = [...new FormData(getFormData)].reduce(
    (acc, arr) => ({ ...acc, [arr[0]]: arr[1] }),
    {},
  );

  addUserData(myFormDataOnPage)
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));
      submitBtn.disabled = true;
      getFormData.reset();
    })
    .catch(() => {
      errorText.textContent = 'Failed to create user';
      submitBtn.disabled = true;
    });

  console.log(myFormDataOnPage);
};

const addUserData = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

getFormData.addEventListener('submit', getResult);

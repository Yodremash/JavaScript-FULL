export function finishList() {
  const elemOne = document.createElement('li');
  elemOne.textContent = '1';
  document.querySelector('.list').prepend(elemOne);

  const elemTwo = document.createElement('li');
  elemTwo.textContent = '4';
  document.querySelector('.special').before(elemTwo);

  const elemThree = document.createElement('li');
  elemThree.textContent = '6';
  document.querySelector('.special').after(elemThree);

  const elemFour = document.createElement('li');
  elemFour.textContent = '8';
  document.querySelector('.list').append(elemFour);
}

finishList();

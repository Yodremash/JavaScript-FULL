export function createButton(buttonText) {
  const elemBody = document.querySelector('body');
  const elemButton = document.createElement('button');
  elemBody.append(elemButton);
  elemButton.textContent = `${buttonText}`;
}

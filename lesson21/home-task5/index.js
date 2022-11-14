export function setButton(buttonText) {
  const elemBody = document.querySelector('body');
  return (elemBody.innerHTML = `<button>${buttonText}</button>`);
}

// function setButton(buttonText) {
//   const elemBody = document.querySelector('body');
//   return (elemBody.textContent = `<button>${buttonText}</button>`);
// }

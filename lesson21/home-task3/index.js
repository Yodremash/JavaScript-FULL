export function getTitle() {
  const elemTitle = document.querySelector('.title');
  console.log(elemTitle.textContent);
  return elemTitle.textContent;
}
export function getDescription() {
  const elemDesc = document.querySelector('.about');
  return elemDesc.innerText;
}
export function getPlans() {
  const elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
}
export function getGoal() {
  const elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
}

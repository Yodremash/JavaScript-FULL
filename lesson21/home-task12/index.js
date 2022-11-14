function getSection(num) {
  const dataNum = document.querySelector(`span[data-number="${num}"]`);
  const newDataTag = dataNum.closest('div');
  newDataTag.getAttribute('data-section');
}
getSection(5);

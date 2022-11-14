function squaredNumbers() {
  const elemNum = document.querySelectorAll('.number');
  // console.log(elemNum);
  // console.log((elemNum.dataset.squaredNumber = elemNum.dataset.number * elemNum.dataset.number));
  elemNum.forEach(
    dataNum => (dataNum.dataset.squaredNumber = dataNum.dataset.number * dataNum.dataset.number),
  );
}

squaredNumbers();

// get the result input element
const resultInput = document.getElementById('result');

// function to add a value to the result input element
function addToResult(value) {
  resultInput.value += value;
}

// function to clear the result input element
function clearResult() {
  resultInput.value = '';
}

// function to calculate the result of the expression in the result input element
function calculate() {
  const expression = resultInput.value;
  const result = eval(expression);
  resultInput.value = result;
}

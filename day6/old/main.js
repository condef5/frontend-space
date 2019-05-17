const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
  '√': (num1, num2) => Math.pow(num1, 1 / num2),
  '**': (num1, num2) => num1 ** num2
};

const $form = document.getElementById('formCalculator');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const num1 = parseInt(event.target.elements.num1.value);
  const num2 = parseInt(event.target.elements.num2.value);
  const operation = event.target.elements.operations.value;
  const output = event.target.elements.result;
  output.innerText = operations[operation](num1, num2);
});

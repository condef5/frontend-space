let operator = '';
let numberOne = '';
let numberTwo = '';
const $result = document.querySelector('.result');

document.querySelectorAll('.number').forEach((number) => {
  number.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    if (numberOne == '') {
      numberOne = e.target.innerText;
      showOperation();
    } else {
      numberTwo = e.target.innerText;
      showOperation();
    }
  });
});

document.querySelectorAll('.symbol').forEach((number) => {
  number.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText == '=') {
      console.log(calcResult(operator));
      showOperation(calcResult(operator));
      numberOne = '';
      numberTwo = '';
      operator = '';
    } else {
      operator = e.target.innerText;
      showOperation();
    }
  });
});

function showOperation(result = '') {
  let resultHtml =
    result == '' ? `${numberOne} ${operator} ${numberTwo}` : result;
  $result.innerHTML = resultHtml;
}

function calcResult(operator) {
  let result = 0;
  switch (operator) {
    case '+':
      result = parseInt(numberOne) + parseInt(numberTwo);
      break;
    case '-':
      result = parseInt(numberOne) - parseInt(numberTwo);
      break;
    case '*':
      result = parseInt(numberOne) * parseInt(numberTwo);
      break;
    case '/':
      if (numberTwo == 0) result = 'You broke it!';
      else result = parseInt(numberOne) / parseInt(numberTwo);
      break;
    default:
      result = parseInt(numberOne);
  }
  return result;
}

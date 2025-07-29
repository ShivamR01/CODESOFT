const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === null) return;

    if (resultShown && !isNaN(value)) {
      currentInput = value;
      resultShown = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});

document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  display.textContent = '0';
});

document.getElementById('equals').addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
    resultShown = true;
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
});

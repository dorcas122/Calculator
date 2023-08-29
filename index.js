
const buttons = document.querySelectorAll(".button");
const resultBox = document.getElementById("result-box");

let currentInput = "";
let previousInput = "";
let operator = "";

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (buttonValue >= "0" && buttonValue <= "9") {
      currentInput += buttonValue;
      updateResult();
    } else if (buttonValue === "." && !currentInput.includes(".")) {
      currentInput += buttonValue;
      updateResult();
    } else if (buttonValue === "AC") {
      clearCalculator();
    } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
      handleOperator(buttonValue);
    } else if (buttonValue === "=") {
      calculateTotal();
    }
  });
});

function updateResult() {
  resultBox.textContent = currentInput;
}

function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateResult();
}

function handleOperator(newOperator) {
  if (currentInput !== "") {
    if (previousInput !== "") {
      calculateTotal();
    } else {
      previousInput = currentInput;
      currentInput = "";
      operator = newOperator;
    }
  }
}

function calculateTotal() {
  if (previousInput !== "" && currentInput !== "" && operator !== "") {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let total = 0;

    switch (operator) {
      case "+":
        total = num1 + num2;
        break;
      case "-":
        total = num1 - num2;
        break;
      case "*":
        total = num1 * num2;
        break;
      case "/":
        total = num1 / num2;
        break;
    }

    currentInput = total.toString();
    previousInput = "";
    operator = "";
    updateResult();
  }
}

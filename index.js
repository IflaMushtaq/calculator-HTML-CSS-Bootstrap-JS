let num1, num2, opr;

//write data function
const writeData = (num) => {
  document.querySelector("#display").value =
    document.querySelector("#display").value + num;
};

//sign function
const sign = (type) => {
  num1 = parseFloat(document.querySelector("#display").value);
  document.querySelector("#display").value = "";
  opr = type;
};

//erase function
const erase = () => {
  document.querySelector("#display").value = "";
};

//backspace function
const backSpace = () => {
  document.querySelector("#display").value = document
    .querySelector("#display")
    .value.slice(0, -1);
};

//equal
const equal = () => {
  num2 = parseFloat(document.querySelector("#display").value);
  switch (opr) {
    case "+":
      document.querySelector("#display").value = parseFloat(num1 + num2);
      break;
    case "-":
      document.querySelector("#display").value = parseFloat(num1 - num2);
      break;
    case "*":
      document.querySelector("#display").value = parseFloat(num1 * num2);
      break;
    case "/":
      document.querySelector("#display").value = parseFloat(num1 / num2);
      break;
    case "%":
      document.querySelector("#display").value = parseFloat(
        (num1 / num2) * 100
      );
      break;
    default:
      break;
  }
};

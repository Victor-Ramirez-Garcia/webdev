// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

let handleClick = function handleClick() {
  let inputs = document.querySelectorAll("input");
  let divs = document.querySelectorAll("div");
  inputs[1].addEventListener("click", function userInput1Click() {
    divs[0].innerHTML = inputs[0].value;
  });
};

handleClick();

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
let newDiv = document.createElement("div");
document.getElementById("inputEventExample").append(newDiv);

let handleInput = function handleInput() {
  let inputs = document.querySelectorAll("input");
  inputs[2].addEventListener("input", function userInput2() {
    newDiv.textContent = inputs[2].value;
  });
};

handleInput();

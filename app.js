// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');


// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
     const number1 = Number(addInput1.value);
     const number2 = Number(addInput2.value);
     const result = number1 + number2;
     addResult.textContent = result;
});

subButton.addEventListener('click', () => {
    const number1 = Number(subInput1.value);
    const number2 = Number(subInput2.value);
    const result = number1 - number2;
    subResult.textContent = result;
});

divButton.addEventListener('click', () => {
    const number1 = Number(divInput1.value);
    const number2 = Number(divInput2.value);
    const result = number1 / number2;
    divResult.textContent = result;
});

multButton.addEventListener('click', () => {
    const number1 = Number(multInput1.value);
    const number2 = Number(multInput2.value);
    const result = number1 * number2;
    multResult.textContent = result;
});





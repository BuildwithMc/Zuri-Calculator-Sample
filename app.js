alert('welcome to the Basic Calculator');
// data storages
const operator = prompt('Please select the operation you want to carry out;  + - / *');
const firstInput = prompt('Input the first number for your calculator');
const secondInput = prompt("Input the second number for your calculator");


const result = (action, No1, No2, Ans) => { 
    // input processing
    if (action === "+") {
      Ans = No1 + No2;
    } else if (action === "-") {
      Ans = No1 - No2;
    } else if (action === "/") {
      Ans = No1 / No2;
    } else if (action === "*") {
      Ans = No1 * No2;
    } else {
       // alert('Please enter a valid value');
        Ans === 0;
    }

    // error set up
    if (Ans === undefined || Ans === Infinity || Ans === NaN || No1 === NaN || No2 === NaN) {
        alert('ERROR : please reload this page and enter valid inputs');
    } else {
        alert("your answer is " + Ans);
    }
   
};

result(operator, firstInput, secondInput); 
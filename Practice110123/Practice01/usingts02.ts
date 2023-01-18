export {};

const button = document.getElementById("btn");
const inputFirst = document.getElementById("num1")! as HTMLInputElement;
const inputSecond = document.getElementById("num2")! as HTMLInputElement;

function add(num1, num2) {
 
    return +num1 + +num2;

}
button.addEventListener('click' , function () {
  console.log(add(inputFirst.value, inputSecond.value));
});

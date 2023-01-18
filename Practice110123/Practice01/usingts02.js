var addButton = document.getElementById("btn");
var inputFirst = document.getElementById("num1");
var inputSecond = document.getElementById("num2");
function add(num1, num2) {
    return +num1 + +num2;
}
addButton.addEventListener('click', function () {
    console.log(add(inputFirst.value, inputSecond.value));
});


let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let buttons = document.querySelectorAll(".button");
let equals = document.querySelector("#keyEqual");
let squareRt = document.querySelector("#keySqRt");
let output = [];
let body = document.querySelector("body");
let outputIndex = [];

squareRt.addEventListener("click", function (e) {
    display.innerHTML = Math.sqrt(display.innerHTML);
    output.push(display.innerHTML);
    outputIndex = output.length - 1;
    console.log(output);
});

equals.addEventListener("click", function (e) {
    display.innerHTML = eval(display.innerHTML);
    output.push(display.innerHTML);
    outputIndex = output.length - 1;
    console.log(output);
});

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function (e) {

        display.innerHTML += e.target.innerHTML;
    });

} //end of for loop

clear.addEventListener("click", function () {
    display.innerHTML = "";
});









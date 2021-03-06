let generateBtn = document.getElementById("generateBtn");
let randomNum;


// Catch Messages

let successMes = document.getElementById("successfulPinMessage");
let unsuccessMes = document.getElementById("unSuccessfulPimMessage");

//coutTry Catch

let countTry = document.getElementById("countTry");


//random code generation
generateBtn.addEventListener("click", function() {

    let randomInput = document.getElementById("randomPinGenerateInput");
    randomNum = Math.ceil(Math.random() * 100000);
    // console.log(randomNum);
    randomInput.value = randomNum;
})


//catch all button
let userPinInput = document.getElementById("userPinInput");
let btnSeven = document.getElementById("btn7");
btnSeven.addEventListener("click", function() {
    userPinInput.value += "7";
})


let btnEight = document.getElementById("btn8");
btnEight.addEventListener("click", function() {
    userPinInput.value += "8";
})

let btnNine = document.getElementById("btn9");
btnNine.addEventListener("click", function() {
    userPinInput.value += "9";
})

let btnFour = document.getElementById("btn4");
btnFour.addEventListener("click", function() {
    userPinInput.value += "4";
})

let btnFive = document.getElementById("btn5");
btnFive.addEventListener("click", function() {
    userPinInput.value += "5";
})

let btnSix = document.getElementById("btn6");
btnSix.addEventListener("click", function() {
    userPinInput.value += "6";
})

let btnOne = document.getElementById("btn1");
btnOne.addEventListener("click", function() {
    userPinInput.value += "1";
})

let btnTwo = document.getElementById("btn2");
btnTwo.addEventListener("click", function() {
    userPinInput.value += "2";
})

let btnThree = document.getElementById("btn3");
btnThree.addEventListener("click", function() {
    userPinInput.value += "3";
})

let btnCut = document.getElementById("btnCut");
btnCut.addEventListener("click", function() {

    userPinInput.value = userPinInput.value.slice(0, -1);
})

let btnZero = document.getElementById("btn0");
btnZero.addEventListener("click", function() {
    userPinInput.value += "0";
})

let btnClearALl = document.getElementById("btnClearALl");
btnClearALl.addEventListener("click", function() {
    userPinInput.value = "";
})

let count = 1;
let pinSubmitBtn = document.getElementById("pinSubmitBtn");
pinSubmitBtn.addEventListener("click", function() {
    let storeValue = userPinInput.value;
    if(count < 3) {
        if (storeValue == randomNum) {
            successMes.style.display = "block";
            pinSubmitBtn.style.display = "none";
            unsuccessMes.style.display = "none";
            countTry.innerHTML = "";
        } else {
            userPinInput.value = "";
            countTry.innerHTML = (3 - count) + "try left";
            count++;
        }
    }
    else {
        countTry.innerHTML = "No more attempt left";
        unsuccessMes.style.display = "block";
        pinSubmitBtn.style.display = "none";
    }
})
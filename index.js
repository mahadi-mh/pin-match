let generateBtn = document.getElementById("generateBtn");

//random code generation
generateBtn.addEventListener("click", function() {
    let randomNum = Math.ceil(Math.random() * 100000);
    let randomInput = document.getElementById("randomPinGenerateInput");
    alert(randomNum);
    randomInput.value = randomNum;
})
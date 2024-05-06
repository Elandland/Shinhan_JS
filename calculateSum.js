function calculateSum() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        resultDisplay.textContent = sum;
    } else {
        resultDisplay.textContent = "수를 입력해주세요";
    }
}
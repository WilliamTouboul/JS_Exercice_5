function multiply() {
    var firstNumber = parseInt((document.getElementById("firstNumber").value),10);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result = firstNumber * secondNumber;
    alert ('Le resultat de votre multiplication est de' + result);

    
}
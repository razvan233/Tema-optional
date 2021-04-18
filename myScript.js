class numbers {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber
        this.secondNumber = secondNumber
    }

}

function bringNumbers(id1, id2) {
    id1 = id1 || ''
    id2 = id2 || ''
    var num1 = parseInt(document.getElementById(id1).value)
    var num2 = parseInt(document.getElementById(id2).value)
    num1 = num1 || 0
    num2 = num2 || 0
    set = new numbers(
        num1,
        num2
    )
    console.log(set)
}


function adunare() {
    var fct = set.firstNumber + set.secondNumber
    document.getElementById('matchNumber').value = fct;
}

function scadere() {
    var fct = set.firstNumber - set.secondNumber
    document.getElementById('matchNumber').value = fct;
}

function inmulutrie() {
    var fct = set.firstNumber * set.secondNumber
    document.getElementById('matchNumber').value = fct;
}

function impartire() {
    var fct = set.firstNumber / set.secondNumber
    document.getElementById('matchNumber').value = fct;
}
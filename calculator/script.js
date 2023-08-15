function clearDisplay() {
    document.getElementsByName("display")[0].value = '';
}

function deleteLastEntry() {
    let displayValue = document.getElementsByName("display")[0].value;
    document.getElementsByName("display")[0].value = displayValue.toString().slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementsByName("display")[0].value += value;
}

function calculate() {
    let displayValue = document.getElementsByName("display")[0].value;
    document.getElementsByName("display")[0].value = eval(displayValue);
}

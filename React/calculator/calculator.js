let displayValue = '';
let history = '';

// Добавление в ввод по кнопкам
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// добавление в ручной ввод
function appendToManualInput(value) {
    document.getElementById('manualInput').value += value;
}

// кнопка очистки дисплея (ручной ввод не очищает)
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    const manualInputValue = document.getElementById('manualInput').value;

    //ручной ввод в приоритете
    if (manualInputValue) {
        displayValue = manualInputValue;
    }
    
    try {
      //подсчет
        const result = eval(displayValue);
        history += `${displayValue} = ${result}<br>`;
        document.getElementById('history').innerHTML = history;
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        //обработка ошибки выражения
        clearDisplay();
        alert('Ошибка в выражении!');
    }
}
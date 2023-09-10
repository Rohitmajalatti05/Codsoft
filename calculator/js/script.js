let result = document.getElementById('result');

function appendToResult(value) {
    if (value === '%') {
        // Calculate the percentage
        try {
            result.value = eval(result.value) / 100;
        } catch (error) {
            result.value = 'Error';
        }
    } else {
        result.value += value;
    }
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

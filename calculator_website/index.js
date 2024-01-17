function appendToResult(value) {
    const resultField = document.getElementById('result');
    
    if (value === 'C') {
        // Clear the input field
        resultField.value = '';
    } else if (value === 'X') {
        // Remove the last character
        resultField.value = resultField.value.slice(0, -1);
    } 
    
    else {
        // Append the value to the input field
        resultField.value += value;
    }

}

function calculateResult() {
    const resultField = document.getElementById('result');

    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}


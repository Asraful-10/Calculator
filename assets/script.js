// Get the display element
const display = document.getElementById('display');

// Get all the buttons
const buttons = document.querySelectorAll('.btn');

// Initialize a variable to keep track of the current input
let currentInput = '';

// Function to update the display
function updateDisplay() {
    display.value = currentInput || '0';
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    switch (buttonValue) {
        case 'Ac':
            currentInput = '';
            break;
        case 'DEL':
            currentInput = currentInput.slice(0, -1);
            break;
        case '=':
            try {
                currentInput = eval(currentInput).toString();
            } catch (e) {
                currentInput = 'Error';
            }
            break;
        default:
            currentInput += buttonValue;
            break;
    }

    updateDisplay();
}

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Initialize the display
updateDisplay();

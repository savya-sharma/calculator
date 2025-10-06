const displayTxt = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.number');  // Plural for clarity
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');  // Renamed for clarity


numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', function () {
        // Optional: console.log(numberBtn.textContent);  // Debug: Logs on click
        displayTxt.textContent += numberBtn.textContent;
    });
});

// Handle operator buttons (including equals)
operatorBtns.forEach((opBtn) => {
    opBtn.addEventListener('click', (e) => {
        const clickedText = e.target.textContent;

        if (clickedText === equalBtn.textContent) {
            try {
                const expression = displayTxt.textContent;
                const answer = eval(expression);
                if (isNaN(answer) || !isFinite(answer)) {
                    throw new Error('Invalid result');
                }
                displayTxt.textContent = answer;

            } catch (error) {
                displayTxt.textContent = 'Error';
                setTimeout(() => { displayTxt.textContent = '0'; }, 1500);
            }
        } else {
            displayTxt.textContent += clickedText;
        }
    });
});

const clearBtn = document.querySelector('.clear');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        displayTxt.textContent = ' ';
    });
}
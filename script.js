const displayTxt = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.number');  
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');  


numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', function () {
        displayTxt.textContent += numberBtn.textContent;
    });
});

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
                setTimeout(() => { displayTxt.textContent = '0'; }, 10);
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
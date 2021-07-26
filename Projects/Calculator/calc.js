class Calculator {

    constructor(previousText, currentText) {
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    }

    clear() {
        this.currentNumber = "";
        this.previousNumber = "";
        this.operation = undefined;
    }

    delete() {
        this.currentNumber = this.currentNumber.toString().slice(0, -1);
        if (this.currentNumber === "-") {
            this.currentNumber = "";
        }
    }

    negative() {
        if (this.currentNumber !== "") {
            this.currentNumber = parseFloat(this.currentNumber) * -1;
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return;
        if (this.currentNumber === '0' && number !== '.') {
            this.currentNumber = number.toString();
        } else {
            this.currentNumber = this.currentNumber.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        console.log(this.currentNumber);
        if (this.currentNumber === "") return;
        if (this.previousNumber !== "") {
            this.calculate();
        }
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = "";
    }

    calculate() {
        let result;
        const firstNumber = parseFloat(this.previousNumber);
        const secondNumber = parseFloat(this.currentNumber);
        if (isNaN(firstNumber) || isNaN(secondNumber)) return;
        switch (this.operation) {
            case '÷':
                if (secondNumber === 0) return;
                result = firstNumber / secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '+':
                result = firstNumber + secondNumber;
                break;
            default:
                return;
        }
        this.currentNumber = result;
        this.operation = undefined;
        this.previousNumber = "";
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const beforeDecimal = parseFloat(stringNumber.split('.')[0]);
        const afterDecimal = stringNumber.split('.')[1];
        let beforeDisplay;
        if (isNaN(beforeDecimal)) {
            beforeDisplay = '';
        } else {
            beforeDisplay = beforeDecimal.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if (afterDecimal != null) {
            return `${beforeDisplay}.${afterDecimal}`;
        } else {
            return beforeDisplay;
        }
    }

    update() {
        this.currentText.innerText = this.getDisplayNumber(this.currentNumber);
        if (this.operation != null) {
            this.previousText.innerText = `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`;
        } else {
            this.previousText.innerText = "";
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const negativeButton = document.querySelector('[data-negative]')
const previousText = document.querySelector('[data-previous]')
const currentText = document.querySelector('[data-current]')

const calcutor = new Calculator(previousText, currentText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calcutor.appendNumber(button.innerText);
        calcutor.update();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calcutor.chooseOperation(button.innerText);
        calcutor.update();
    })
})

equalsButton.addEventListener('click', button => {
    calcutor.calculate();
    calcutor.update();
})

clearButton.addEventListener('click', button => {
    calcutor.clear();
    calcutor.update();
})

deleteButton.addEventListener('click', button => {
    calcutor.delete();
    calcutor.update();
})

negativeButton.addEventListener('click', button => {
    calcutor.negative();
    calcutor.update();
})
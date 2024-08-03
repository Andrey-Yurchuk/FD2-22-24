/*** Создайте программу для вычисления математических выражений, заданных в виде строки (например, "3 + 5 * (2 - 8)").
 Реализуйте поддержку основных арифметических операций и скобок. ***/

const infixToPostfix = (expression) => {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const isOperator = (ch) => /[+\-*/^]/.test(ch);
    const isDigit = (ch) => /\d/.test(ch);

    const output = [];
    const operators = [];

    let i = 0;
    while (i < expression.length) {
        const ch = expression[i];

        if (isDigit(ch)) {
            let num = '';
            while (isDigit(expression[i]) || expression[i] === '.') {
                num += expression[i];
                i++;
            }
            output.push(num);
            continue;
        }

        if (ch === '(') {
            operators.push(ch);
        } else if (ch === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                output.push(operators.pop());
            }
            operators.pop();
        } else if (isOperator(ch)) {
            while (operators.length && precedence[operators[operators.length - 1]] >= precedence[ch]) {
                output.push(operators.pop());
            }
            operators.push(ch);
        }
        i++;
    }

    while (operators.length) {
        output.push(operators.pop());
    }

    return output;
};

const evaluatePostfix = (postfix) => {
    const stack = [];

    postfix.forEach(token => {
        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                case '^':
                    stack.push(Math.pow(a, b));
                    break;
            }
        }
    });

    return stack[0];
};

const calculateExpression = (expression) => {
    const postfix = infixToPostfix(expression.replace(/\s+/g, ''));
    return evaluatePostfix(postfix);
};

/************************************** test **************************************/

const expression = "3 + 5 * (2 - 8)";
const result = calculateExpression(expression);
console.log(`Result: ${result}`);

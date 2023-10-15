const inquirer = require('inquirer');
const commonColors = ['red', 'green', 'blue', 'yellow', 'purple', 'hexadecimal'];
const shapeOptions = ['circle', 'triangle', 'square'];

const questions = [
    {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
            return input.length <= 3;
        },
    },
    {
        name: 'textColor',
        message: 'Enter text color or a hexadecimal:',
        validate: (input) => {
            return commonColors.includes(input) || /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
            // The regex helps ensure that the users input is either a common color or a valid hexadecimal color code
            // Found this on https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/
        },        
    },
    {
        name: 'shape',
        message: 'Choose a shape:',
        type: 'list',
        choices: shapeOptions,
    },
    {
        name: 'shapeColor',
        message: 'Enter shape color or a hexadecimal number:',
        validate: (input) => {
            return commonColors.includes(input) || /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
            // This will be the same thing as line 17
        },
    },
];

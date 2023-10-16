const inquirer = require('inquirer');
const {circle, triangle, square} = require('./lib/shapes');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
            return input.length <= 3;
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color or a hexadecimal:',     
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color or a hexadecimal number:',
        },
];

function writeToFile(fileName, data) {
    const folderPath = path.join(__dirname, 'examples');
    const filePath = path.join(folderPath, fileName);

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('Generated logo.svg in the examples folder.');
        }
    });
}

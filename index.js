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

function generateSVG(answers) {
    let shapeClass;
    switch (answers.shape) {
        case 'circle':
            shapeClass = new circle();
            break;
        case 'triangle':
            shapeClass = new triangle();
            break;
        case 'square':
            shapeClass = new square();
            break;
        default:
            console.error('Invalid shape selection');
        return '';
    }

    shapeClass.setColor(answers.shapeColor);

    const shapeSVG = shapeClass.render();
    const textElement = `<text x="150" y="250" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>`;
    const svgContent = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">${shapeSVG}${textElement}</svg>`;
    return svgContent;
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const svgContent = generateSVG(answers);
        writeToFile('logo.svg', svgContent);
    });
}

init();

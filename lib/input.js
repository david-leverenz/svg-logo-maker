// This file holds all of the questions called by the .prompt section of my init function.
const askQuestions = [
    {
        type: 'maxlength-input',
        name: 'initials',
        message: 'Please enter no more than three characters to appear on your logo.',
        maxLength: 3,
    },
    {
        type: 'input',
        message: 'Please enter the TEXT color for your logo (OR a hexadecimal number, if you are smart enough to know what those are. ).',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please select a shape for your logo.',
        choices: ['circle', 'triangle', 'square'],
        name: 'shapeName',
    },
    {
        type: 'input',
        message: 'Please enter the SHAPE color for your logo (OR a hexadecimal number, if you are smart enough to know what those are).',
        name: 'shapeColor',
    },
]

module.exports = (askQuestions);

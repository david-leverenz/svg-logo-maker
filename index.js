// These enable fs and inquirer.  They also identify the other files needed and create constants for those files.
const fs = require('fs');
const inquirer = require('inquirer');
const askQuestions = require('./lib/input.js');
const {Circle, Square, Triangle} = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

function init() {
    inquirer
        .prompt(askQuestions)
        .then((data) => {
            console.log(data);
            let shape;
            if (data.shapeName === 'circle') {
                shape = new Circle();
            } else if (data.shapeName === "triangle") {
                shape = new Triangle();
            } else shape = new Square();
            shape.setColor(data.shapeColor);
            const svg = new SVG();
            svg.setText(data.initials, data.textColor);
            svg.setShape(shape);
            fs.writeFile(('example.svg'), svg.render(), (err) => {
                err ? console.log(err) : console.log("Success!");
            });
        });
}

init()
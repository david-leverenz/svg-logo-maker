// These enable fs and inquirer.  They also identify the other files needed and create constants for those files.
const fs = require('fs');
const inquirer = require('inquirer');
const getData = require('./lib/input.js');
const getShapeInfo = require('./lib/shapes.js');
const svgGenerator = require('./lib/svgString.js')
const svgClass = require('./lib/svg.js')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// const htmlMaker = require('./htmlReadme.js');



function init() {
    inquirer
        .prompt(getData)
        .then((data) => {
            console.log(data);
            const svg = new SVG();
            svg.setText(textColor, initials);
            svg.setShape(shapeSpecificString, shapeColor);
            fs.writeFile(('example.svg'), svgGenerator({ ...data }), (err) => {
                err ? console.log(err) : console.log("Success!");
            });
        });
}

init()
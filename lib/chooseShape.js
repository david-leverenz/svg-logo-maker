const askQuestions = require('./input.js');
const {Circle, Square, Triangle} = require('./shapes.js');

let shape;
if (data.shapeName === 'circle') {
    shape = new Circle();
} else if (data.shapeName === "triangle") {
    shape = new Triangle();
} else shape = new Square();

module.exports = shape
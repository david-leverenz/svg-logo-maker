// These enable fs and inquirer.  They also identify the other files needed and create constants for those files.
const fs = require('fs');
const inquirer = require('inquirer');
const getData = require('./lib/input.js');
const getShapeInfo = require('./lib/shapes.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// const htmlMaker = require('./htmlReadme.js');

// If we use their test files we need to set methods.

class Shape {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    nap() {
        console.log('Zzzzzzzzz' + " " + this.name);
    }
}

// Use extends and super in here somewhere (lesson ten)
class Triangle {
    constructor(name, age, breed) {
        Shape.call(this, name, age, breed);
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    nap() {
        console.log('Zzzzzzzzz' + " " + this.name);
    }
}

class Circle {
    constructor(name, age, breed) {
        Shape.call(this, name, age, breed);
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    nap() {
        console.log('Zzzzzzzzz' + " " + this.name);
    }
}
class Square {
    constructor(name, age, breed) {
        Shape.call(this, name, age, breed);
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    nap() {
        console.log('Zzzzzzzzz' + " " + this.name);
    }
}
function init() {
    inquirer
        .prompt(getData);
    //   .then((data) => {
    //     let pasteIcon = getIcon(data)
    //     fs.writeFile('readme.md', htmlMaker({ ...data, licenseLink: pasteIcon }), (err) => {
    //       err ? console.log(err) : console.log("success");

    //     });
    //   });
}

init()
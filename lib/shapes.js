const svgGenerator = require('./svgString.js')

// If we use their test files we need to set methods.

class Shape {
    constructor(initials, shapeColor, textColor) {
        this.initials = initials;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
    // printMetaData() {
    //     console.log(this.initials, this.shapeName, this.shapeColor, this.textColor);
    // }
}

// Use extends and super in here somewhere (lesson ten)
class Triangle extends Shape {
    constructor(initials, shapeColor, textColor, shapeSpecificString) {
        super(initials, shapeColor, textColor, shapeSpecificString);
        this.shapeSpecificString = 'polygon points="150, 18 244, 182 56, 182"'
    }
    svgGenerator()
}

class Circle extends Shape {
    constructor(initials, shapeColor, textColor, shapeSpecificString) {
        super(initials, shapeColor, textColor, shapeSpecificString);
        this.shapeSpecificString = 'circle cx="150" cy="100" r="80"'
    }

    svgGenerator()
}
class Square extends Shape {
    constructor(initials, shapeColor, textColor, shapeSpecificString) {
        super(initials, shapeColor, textColor, shapeSpecificString);
        this.shapeSpecificString = 'rect x="90" y="40" width="120" height="120"'
    }

    svgGenerator();
}
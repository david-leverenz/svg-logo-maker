// If we use their test files we need to set methods.

class Shape {
    constructor(initials, shapeName, shapeColor, textColor) {
        this.initials = initials;
        this.shapeName = shapeName;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
    printMetaData() {
        console.log(this.initials, this.shapeName, this.shapeColor, this.textColor);
    }
}

// Use extends and super in here somewhere (lesson ten)
class Triangle extends Shape {
    constructor(initials, shapeName, shapeColor, textColor, shapeSpecificString) {
        super(initials, shapeName, shapeColor, textColor, shapeSpecificString);
        this.shapeSpecificString = shapeSpecficString; // polygon points="150, 18 244, 182 56, 182"
    }
}

class Circle extends Shape {
    constructor(initials, shapeName, shapeColor, textColor, shapeSpecificString) {
        super(initials, shapeName, shapeColor, textColor, shapeSpecificString);
        this.shapeSpecificString = shapeSpecficString; // circle cx="150" cy="100" r="80"
    }

    // nap() {
    //     console.log('Zzzzzzzzz' + " " + this.name);
    // }
}
class Square extends Shape {
    constructor(initials, shapeName, shapeColor, textColor, shapeSpecificString) {
        super(initials, shapeName, shapeColor, textColor, shapeSpecificString);
        this.shapeSpecificString = shapeSpecficString; // rect x="90" y="40" width="120" height="120"
    }

    // nap() {
    //     console.log('Zzzzzzzzz' + " " + this.name);
    // }
}
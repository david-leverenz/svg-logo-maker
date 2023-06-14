// This constructor function creates the "shell" in which I insert all of the data collected and exported thus far.  I then export the results of this function.
class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }


    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    // There is a test to throw an error here.  Although I found another npm that limits the number of characters the user can enter.
    setText(text, color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.")
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }

    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = SVG;
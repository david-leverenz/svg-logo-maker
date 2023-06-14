class Shape {
    constructor() {
        this.color = "";
        this.text = "";
        this.initials="";
        }
    setColor(color) {
        this.color=color
    }
    setInitials(initials) {
        this.initials= initials
}
    setText(text) {
        this.text=text
    }
}
class Triangle extends Shape {

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.text}">${this.initials}</text>`
        
    }

}

class Circle extends Shape {

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text}">${this.initials}</text>`
    }
}
class Square extends Shape {

    render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text}">${this.initials}</text>`
    }

}

module.exports = {Circle, Square, Triangle}
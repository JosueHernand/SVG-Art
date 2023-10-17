class shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}

class circle extends shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill = "${this.color}" />`;
    }
}

class triangle extends shape {
    render() {
        return `<polygon points = "150, 18 244, 182 56, 182" fill = "${this.color}" />`;
    }
}

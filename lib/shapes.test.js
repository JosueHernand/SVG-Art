const {circle, triangle, square} = require('./shapes');

describe("Circle test", () => {
    test("test for a circle with orange background", () => {
        const shape = new circle();
        shape.setColor("orange");
        expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill = "orange" />`);
    });
});

describe("Triangle test", () => {
    test("test a triangle with blue background", () => {
        const shape = new triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill = "blue" />');
    })
})

describe("Square test", () => {
    test("test a square with a red hexadecimal color background", () => {
        const shape = new square();
        shape.setColor("#FF0000");
        expect(shape.render()).toEqual('<rect x = "73" y = "40" width = "160" height = "160" fill = "#FF0000" />')
    })
})

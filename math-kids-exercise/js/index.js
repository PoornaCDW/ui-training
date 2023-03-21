// Shape object and the shapes

let shapes = {
    circle: {
        name: "Circle",
        textToDisplay: "2. Enter Radius",
        tableContents : {
            RADIUS: "π",
            AREA: "πr²",
            PERIMETER: "2*π*r"
        },
        circleArea: (radius) => Math.PI*radius*radius,
        circlePerimeter: (radius) => 2*Math.PI*radius
    },
    square: {
        name: "Square",
        textToDisplay: "2. Enter Side",
        tableContents: {
            SIDE: "s",
            AREA: "s*s",
            PERIMETER: "4*s"
        },
        squareArea: (side) => side*side,
        squarePrimeter: (side) => 4*side
    },
    triangle: {
        name: "Triangle",
        textToDisplay: "2. Enter ",
        tableContents: {
            SIDE: "s",
            AREA: "s*s",
            PERIMETER: "4*s"
        },
        squareArea: (side) => side*side,
        squarePrimeter: (side) => 4*side
    }
}
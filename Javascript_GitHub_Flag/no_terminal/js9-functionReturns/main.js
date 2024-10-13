function rectArea(width, height) {
    return width * height; 
}

const xArea = rectArea(4, 5);
console.log(xArea)


function rectPerimeter(width, height) {
    return (width + height) * 2;
}

const xPerimeter = rectPerimeter(4, 5);
console.log(xPerimeter);

function circumference(radius) {
    return 2 * Math.PI * radius;
}

const xCircumference = circumference(3);
console.log(xCircumference);


function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const xCircleArea = circleArea(3);
console.log(xCircleArea);

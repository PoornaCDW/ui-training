//Calculator
let calculator = {
    add(number1, number2) {
        return parseFloat(number1)+parseFloat(number2);
    },
    subtract(number1, number2) {
        return parseFloat(number1)-parseFloat(number2);
    },
    multiply(number1, number2) {
        return parseFloat(number1)*parseFloat(number2);
    },
    divide(number1, number2) {
        if(number2 == 0) {
            return "Cannot divide the number by 0.";
        } else {   
            return parseFloat(number1)/parseFloat(number2);
        }
    }
}

//Calculator call
console.log("Sum: ", calculator.add(2, 5));
console.log("Difference: ", calculator.subtract("78", 28));
console.log("Product: ", calculator.multiply(45, "2.1"));
console.log("Quotient: ", calculator.divide(42, 0));
console.log("Quotient: ", calculator.divide(42, 10));
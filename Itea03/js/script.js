
function calc() {
    const text = "Result is: ";
    this.sum = function(a, b) {
        result = a + b;
        return text + "sum=" + result;
    }
    this.multiply = function(a, b) {
        result = a * b;
        return text + "multiply=" +  result;
    }
    this.divide = function(a, b) {
        result = a / b;
        return text + "divide=" +  result;
    }
    this.subtraction = function(a, b) {
        result = a - b;
        return text + "subtraction=" +  result;
    }
}
const math = new calc();
console.log(math.sum(45, 45));
console.log(math.multiply(5, 10));
console.log(math.divide(333, 3));
console.log(math.subtraction(999, 995));
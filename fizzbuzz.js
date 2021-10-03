function fizzBuzz(i) {
    if (i == 0) {
        return "invalid input";
    } else if (i % 15 == 0) {
        return "FizzBuzz!";
    } else if (i % 5 == 0) {
        return "Buzz!";
    } else if (i % 3 == 0) {
        return "Fizz!";
    } else {
        return i;
    }
}

function button() {
    let val = document.getElementById('value').value;
    let output = fizzBuzz(val);
    document.getElementById('result').innerHTML = output;
}

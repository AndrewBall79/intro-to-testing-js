// helloWorld function 
function helloWorld() {
    return  "Hello, World!";
}

function sayHello(input) {
    if (input === Number){
        return "Hello, World!";
    }
    if (input === null){
        return "Hello, World!";
    }
    if (input === undefined){
        return "Hello, World!";
    }
    if (input === true){
        return "Hello, World!";
    }
    if (input === false){
        return "Hello, World!";
    }
    else {
        return "Hello, " + input + "!";
    }
}


function isFive(input) {
    if (parseFloat(input) === 5) {
        return true;
    }
    else {
        return input === Number;
    }
}


function isEven(input) {
    return parseFloat(input) % 2 === 0
}

function isVowel(input) {
    if (['a', 'e', 'i', 'o', 'u']){
        return true
    }
    if (parseFloat(input.isNaN)){
        return true
    }
}

function add(input1, input2) {
    var sum = parseFloat(input1) + parseFloat(input2);
    if (isNaN(sum)) {
        return NaN
    }
    return sum
}


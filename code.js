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

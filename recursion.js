function sumTo(n) {
    return (n == 1) ? n : n + sumTo(n - 1)
}

console.log(sumTo(3))

function factorial (n) {
    return (n == 1) ? n : n * factorial(n - 1)
}

console.log(factorial(4))


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(3)) // неэффективный метод, бдует долго выводиться

function optiFibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b
}

console.log(optiFibonacci(77))
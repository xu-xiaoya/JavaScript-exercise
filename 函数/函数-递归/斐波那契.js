function fibonacci(n) {
    if (n===1) return 1;
    if (n===2) return 1;
    let f1 = 1,f2=1, temp;
    for (let i = 2; i < n; i++) {
        temp = f1;
        f1 = f2;
        f2 = temp+f2;
    }
    return f2;
}
console.log(fibonacci(10));
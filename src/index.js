module.exports = function reverse (n) {
    let res = 0;
    n = Math.abs(n);
    while (n > 0.9) {
        res = res * 10 + n % 10;
        n = Math.trunc(n / 10);
    }
    return res;
}

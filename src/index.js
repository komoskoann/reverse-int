module.exports = function reverse (n) {
    let str = n.toString().split('').reverse().join('');
    if (n > 0) {
        return +str;
    } else {
        return +str.slice(0,str.length - 1);
    }
}

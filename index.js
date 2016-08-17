module.exports = (x) => {
    if (x) {
        return x + 2;
    } else {
        throw new Error(`Need to pass a value to this function. You passed ${x}`);
    }
}

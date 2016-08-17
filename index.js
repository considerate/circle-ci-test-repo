module.exports = (x) => {
    if (x) {
        return x;
    } else {
        throw new Error(`Need to pass a value to this function. You passed ${x}`);
    }
}

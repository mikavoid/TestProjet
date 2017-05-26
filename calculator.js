module.exports = {
  add(x, y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x + y;
  },
  multiply(x, y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x * y;
  },
  substract(x, y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x - y;
  },
  divide(x, y) {
    x = parseFloat(x)
    y = parseFloat(y)
    if (y == 0) {
      throw new Error("Division by zero");
    }
    return x / y;
  }
}
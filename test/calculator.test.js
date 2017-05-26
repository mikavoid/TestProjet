const calculator = require('../calculator')
const chai = require('chai')
const expect = require('chai').expect

describe('#calculator.add()', function() {
  it('should return the sum of 2 numbers', function() {
    expect(calculator.add(5, 6)).to.equal(5 + 6)
    expect(calculator.add(-5, -6)).to.equal(-5 + -6)
    expect(calculator.add(-10, 10)).to.equal(-10 + 10)
  })
  it('should return NaN when non numeric value is sent in arguments', function() {
    expect(calculator.add('a', 2)).to.be.NaN
    expect(calculator.add(2, 'b')).to.be.NaN
    expect(calculator.add([], 0)).to.be.NaN
  })
})

describe('#calculator.multiply()', function() {
  it('should return the product of 2 numbers', function() {
    expect(calculator.multiply(5, 6)).to.equal(5 * 6)
    expect(calculator.multiply(-5, -6)).to.equal(-5 * -6)
    expect(calculator.multiply(-10, 10)).to.equal(-10 * 10)
  })
  it('should return NaN when non numeric value is sent in arguments', function() {
    expect(calculator.multiply('a', 2)).to.be.NaN
    expect(calculator.multiply(2, 'b')).to.be.NaN
    expect(calculator.multiply([], 0)).to.be.NaN
  })
})

describe('#calculator.substract()', function() {
  it('should return the substraction of 2 numbers', function() {
    expect(calculator.substract(5, 6)).to.equal(5 - 6)
    expect(calculator.substract(-5, -6)).to.equal(-5 - -6)
    expect(calculator.substract(-10, 10)).to.equal(-10 - 10)
  })
  it('should return NaN when non numeric value is sent in arguments', function() {
    expect(calculator.substract('a', 2)).to.be.NaN
    expect(calculator.substract(2, 'b')).to.be.NaN
    expect(calculator.substract([], 0)).to.be.NaN
  })
})

describe('#calculator.divide()', function() {
  it('should return the division of 2 numbers', function() {
    expect(calculator.divide(5, 6)).to.equal(5 / 6)
    expect(calculator.divide(-5, -6)).to.equal(-5 / -6)
    expect(calculator.divide(-10, 10)).to.equal(-10 / 10)
  })
  it('should return NaN when non numeric value is sent in arguments', function() {
    expect(calculator.divide('a', 2)).to.be.NaN
    expect(calculator.divide(2, 'A')).to.be.NaN
  })
  it('should return an error division by zero', function() {
    expect(() => { calculator.divide(10, 0) }).to.throw(Error, 'Division by zero')
  })
})
const generateToken = require('../generate-token')
const chai = require('chai')
const expect = require('chai').expect

function testRandomTokenFormat() {
  describe('#generateToken()', function() {
    it('should return  alphanumerical string of length >= 6', function() {
      expect(generateToken()).to.match(/[a-zA-Z0-9]{6,}$/)
    })
  })
}

for (i = 0; i < 10; i++) {
  testRandomTokenFormat();
}

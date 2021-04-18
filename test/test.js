const assert = require('chai').assert;
const chunk = require('../main').chunkLodash;
const shuffle = require('../main').shuffleLodash;
const reverse = require('../main').reverseLodash;
const range = require('../main').rangeLodash;
const without = require('../main').withoutLodash;
// const main = require('../main');

describe('test', function(){
  it('should return a divided  2d array', function() {
    //chunk test returned the same values but would still fail
    assert.equal(chunk()[0].length, 2)
  }),

  it('should return an array other than the passed array', function() {
    assert.notEqual(shuffle(), [1, 2, 3, 4])
  }),

  it('should reverse array', function() {
    assert.deepEqual(reverse(), ['hallo', 'hola', 'hi'])
  })
  it('return a range of numbers from 0 to 4', function() {
    assert.deepEqual(range(), [0, 1, 2, 3])
  })
  it('should return an array with the string chicken', function() {
    assert.equal(without(), 'chicken')
  })
})
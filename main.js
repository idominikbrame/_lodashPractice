
// _.chunk(), _.reverse(), _.without(), _.shuffle(), _.range()

const _ = require('lodash');

module.exports = {
  chunkLodash: function() { 
    let myArray = [1, 2, 3, 4];
    let chunkArray = _.chunk(myArray, 2)
    return chunkArray

  },
  shuffleLodash: function() {
    let myArray = [1, 2, 3, 4];
    let shuffleArray = _.shuffle(myArray)
    return shuffleArray
  },
  reverseLodash: function () {
    let myArray = ['hi', 'hola', 'hallo'];
    let reverseArray = _.reverse(myArray)
    return reverseArray
  },
  rangeLodash: function() {
    return _.range(4)
  },
  withoutLodash: function() {
    return _.without(['hands', 'feet', 'hands', 'chicken'], 'hands', 'feet')
  }
}
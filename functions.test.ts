const {shuffleArray} = require('./utils')

const testArr = [1, 2, 3, 4, 'Shampoo']

describe('shuffleArray should', () => {
    it('Check that items have been shuffled', () => {
        expect(shuffleArray(testArr)).not.toEqual(testArr)
    })
    it('Should return an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toEqual(true)
    })
    it('Return array of the same length', () => {
        expect(shuffleArray(testArr).length).toEqual(testArr.length)
    })
    it('Same array contents', () => {
        expect(shuffleArray(testArr).sort()).toEqual(testArr.sort())
    })
})
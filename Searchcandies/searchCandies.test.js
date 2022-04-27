const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('takes Ma and 10 to return Mars and Malteasers', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    })
    it('takes Ma and 2 to return Mars', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
    })
    it('takes S and 10 to return Skitties, Skittles and Starburst', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    })
    it('takes S and 4 to return Skitties and Skittles', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
    })
    it('takes ma and 10', () => {
        expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    })
})
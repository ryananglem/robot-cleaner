 import { main } from './index'

describe('app starts', () => {
    it('should start', () => {
        expect(main()).toEqual(true)
    })
})
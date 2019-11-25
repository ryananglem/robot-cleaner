import 'babel-polyfill'
import { getStartingCoordinates } from './getStartingCoordinates'

describe('get starting coordinates', () => {

    let stdin: any
    beforeEach((done) => {
      done()
        stdin = require('mock-stdin').stdin()
      })

    it('should return array of coordinates', async () => {
    
        const enteredValue = '4 4';

        process.nextTick(() => {
          stdin.send(`${enteredValue}\r`);
        });

        const result = await getStartingCoordinates()
        expect(result).toEqual([4, 4])
    })
})

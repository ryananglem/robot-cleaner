 import 'babel-polyfill'
 import { main } from './index'

describe('app', () => {
    let stdin
    beforeEach(() => {
        stdin = require('mock-stdin').stdin();
      });

    afterAll(done => {
        done()
    })
    it('should get number of commands to use', async () => {

        const enteredValue = '4';

        process.nextTick(() => {
          stdin.send(`${enteredValue}\r`);
        });

        const result = await main()
        expect(result).toEqual(4)
    })
})
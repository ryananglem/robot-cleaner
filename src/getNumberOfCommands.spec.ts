import 'babel-polyfill'
import { getNumberOfCommands } from './getNumberOfCommands'

describe('get number of commands', () => {

    let stdin
    beforeEach((done) => {
        done()
        stdin = require('mock-stdin').stdin();
      });

    it('should get number of commands to use', async () => {
    
        const enteredValue = '4';

        process.nextTick(() => {
          stdin.send(`${enteredValue}\r`);
        });

        const result = await getNumberOfCommands()
        expect(result).toEqual(4)
    })
})
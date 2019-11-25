import 'babel-polyfill'
import { getListOfCommands } from './getInstructions'

describe('get instructions', () => {

    let stdin:any
    beforeEach((done) => {
        done()
        stdin = require('mock-stdin').stdin();
      });

    it('should get the list of commands to process', async () => {
    
        const firstCommand = 'N 1'

        process.nextTick(() => {
          stdin.send(`${firstCommand}\r`)

        });
        
        const result = await getListOfCommands(1)
        expect(result).toEqual([{
                direction: 'N',
                distance: 1
            }
        ])
        })
})
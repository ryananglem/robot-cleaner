import { processCommand, processCommands} from './calculateArea'
import { Command } from './types'

describe('calculate area', () => {

    it('should calculate the points on the grid covered by the robot from a command', () => {

        const command: Command = { direction: 'N', distance: 2} 
        const result = processCommand(command, [0, 0])
        expect(result).toEqual([
            [0, 1],
            [0, 2]
        ])

    })

    it('should calculate area covered by robot', () =>
    
        expect(processCommands([], [])).toEqual(2)
    )
})
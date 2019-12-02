import { processCommand, processCommands} from './calculateArea'

describe('calculate area', () => {

    it('should calculate the points on the grid covered by the robot from a command', () => {

        const result = processCommand('N 2', [0, 0])
        expect(result).toEqual([
            [0, 1],
            [0, 2]
        ])

    })

    it('should calculate area covered by robot', () =>
    
        expect(processCommands([], [])).toEqual(2)
    )
})
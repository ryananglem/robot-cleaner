import { processCommand, processCommands} from './calculateArea'
import { Command, Direction } from './types'

describe('calculate area', () => {

    it('should calculate the points on the grid covered by the robot from a command', () => {

        const command: Command = { direction: 'N', distance: 2} 
        const result = processCommand(command, [0, 0])
        expect(result).toEqual([
            [0, 1],
            [0, 2]
        ])

    })

    it('should calculate area covered by robot for simple journey', () => {
        const command: Command = { direction: 'N', distance: 2} 
    
        expect(processCommands([command], [0, 0])).toEqual(2)
    }
    )

    it('should calculate area covered by robot for journey revisiting places', () => {
        const command1: Command = { direction: 'N', distance: 2} 
        const command2: Command = { direction: 'S', distance: 1} 
    
        expect(processCommands([command1, command2], [0, 0])).toEqual(2)
    }
    )
    it('should calculate area covered by robot for complex journey ', () => {
        const command1: Command = { direction: 'N', distance: 2} 
        const command2: Command = { direction: 'S', distance: 1}
        const command3: Command = { direction: 'E', distance: 1} 
        const command4: Command = { direction: 'W', distance: 3}

        expect(processCommands([command1, command2, command3, command4], [0, 0])).toEqual(5)
    }
    )

})
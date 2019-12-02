import { Command, Direction } from './types'

export const getListOfCommands = async (numberOfCommands: number): Promise<Command[]> => {

    let commandsList: Command[] = []
    let i = 0 
    while (i < numberOfCommands) {
        const command = new Promise(resolve => {
                process.stdin.once('data', (data) => {
                    resolve(data.toString().replace('\r', ''))
                }) 
            })
        const cleanData = await command
        const instruction = parseCommand(cleanData.toString())
        commandsList.push(instruction)
        i ++
    }
    return commandsList
}

const parseCommand = (command: string): Command => {
    const instructionArray = command.split(' ')
    const instruction: Command = {
            direction: instructionArray[0] as Direction,
            distance: Number(instructionArray[1])
        }
    return instruction
} 
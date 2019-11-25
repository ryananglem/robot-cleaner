

type Direction =  'N' | 'S' | 'E' | 'W'

export interface Command { 
    direction: Direction
    distance: number
}

export const getListOfCommands = async (numberOfCommands: number) => {

    let commandsList = []
    let i = 0 
    while (i < numberOfCommands) {
        const command = new Promise(resolve => {
                process.stdin.once('data', (data) => {
                    resolve(data.toString().replace('\r', ''))
                }) 
            })
        const cleanData = await command
        const instructionArray = cleanData.toString().split(' ')
        const instruction: Command = {
            direction: instructionArray[0] as Direction,
            distance: Number(instructionArray[1])
        }
        commandsList.push(instruction)
        i ++
    }
    return commandsList
}
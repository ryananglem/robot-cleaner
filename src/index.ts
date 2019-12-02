import { getNumberOfCommands} from './getNumberOfCommands'
import { getStartingCoordinates} from './getStartingCoordinates'
import { getListOfCommands} from './getInstructions'
import { processCommands} from './calculateArea'

export const main = async () => {

    const commandsToExecute: number = await getNumberOfCommands()

    const startingCoordinates: Array<number> = await getStartingCoordinates()

    const listOfCommands = await getListOfCommands(commandsToExecute)

    const totalArea = processCommands(listOfCommands, startingCoordinates)

    console.log(` => Cleaned: ${totalArea.toString().trim()}`)

    process.exit()
}


main()
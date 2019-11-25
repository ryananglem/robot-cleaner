import { getNumberOfCommands} from './getNumberOfCommands'

export const main = async () => {

    const commandsToExecute = await getNumberOfCommands()

    return commandsToExecute
}


main()
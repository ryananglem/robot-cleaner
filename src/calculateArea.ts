import { Command } from './types'

export const processCommands = (listOfCommands: Array<Command>, startingCoordinates: number[]) => {

    const placesCleaned: number[][] = []

    let coordinates = startingCoordinates
    listOfCommands.forEach(command => {
        const placesVisited  = processCommand(command, coordinates)
        placesVisited.forEach(place => {
            if (!placesCleaned.find(findPlace => findPlace[0]=== place[0] && findPlace[1]==place[1])) {
                placesCleaned.push(place)
            }
            coordinates = place
        })
        
    })
    return placesCleaned.length
}

export const processCommand = (command: Command, startingCoordinates: number[]) : number[][] => {

    const journey: number[][] = []
    let coordinates = startingCoordinates
    let i=0
    while(i < command.distance ) {
        switch (command.direction) {
            case 'N':
                journey.push([ coordinates[0], coordinates[1] + 1])
                break
            case 'S': 
                journey.push([ coordinates[0], coordinates[1] -1])
                break
            case 'E':
                journey.push([ coordinates[0] +1, coordinates[1]])
                break
            case 'W':
                journey.push([ coordinates[0] -1, coordinates[1]])
                break
        }
        coordinates = journey[journey.length-1]
        i++
    }
    return journey
}




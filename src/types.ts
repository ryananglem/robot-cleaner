export interface Command { 
    direction: Direction
    distance: number
}

export type Direction =  'N' | 'S' | 'E' | 'W'
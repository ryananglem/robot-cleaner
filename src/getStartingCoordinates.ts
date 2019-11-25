
export const getStartingCoordinates = (): Array<number> => {
  // @ts-ignore
  return new Promise((resolve) => {
    process.stdin.once('data', (data) => {
      const coords = data.toString().trim().split(' ')
      resolve(coords.map(coord => Number(coord)))
    })
  })
}
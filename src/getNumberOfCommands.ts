export const getNumberOfCommands = (): Promise<number> => {

    return new Promise((resolve) => {
      process.stdin.once('data', (data) => {
        resolve(Number(data.toString().trim()))
      })
    })
}
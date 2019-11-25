export const getNumberOfCommands = () => {

    return new Promise((resolve) => {
      process.stdin.once('data', (data) => {
        resolve(Number(data.toString().trim()));
      })
    })
}
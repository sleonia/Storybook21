import http from 'http'

import inquirer, { QuestionCollection } from 'inquirer'

const getQuestion = (port: number): QuestionCollection => ({
    type: 'confirm',
    name: 'isAnotherPort',
    message: `Port ${port} is already busy. Try another one?`,
    default: false
})

const isPortFree = (port: number): Promise<boolean> =>
    new Promise((resolve) => {
        const server = http.createServer()
        server.listen(port, () => {
            server.close()
            resolve(true)
        })
            .on('error', () => {
                resolve(false)
            })
    })

export const checkPort = (port: number): Promise<number> => isPortFree(port)
    .then((res) => {
        if (res) {
            return port
        }

        return inquirer.prompt([getQuestion(port)])
            .then(({ isAnotherPort }: Record<string, boolean>) => {
                if (isAnotherPort) {
                    return checkPort(port + 1)
                }
                process.exit(1)
            })
            .catch((e: unknown) => {
                console.log(e)
                process.exit(1)
            })
    })

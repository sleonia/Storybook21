import { opine, OpineResponse } from 'opine/mod.ts'
import colors from 'colors/safe'

const { log } = console


colors.enable();
const app = opine()

app.get('/', (_: unknown, res: OpineResponse) => {
    res.setStatus(200).send('ok')
})

app.listen(8080, () => {
    log(colors.random('Hello world on 🚀 http://localhost:8080 🚀'))
})

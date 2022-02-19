import { opine, OpineResponse } from 'opine/mod.ts'
import { createRequire } from 'node/module.ts'

console.log(createRequire)

const app = opine()

app.get('/', (_: unknown, res: OpineResponse) => {
    res.setStatus(200).send('ok')
})

app.listen(8080, () => {
    console.log('hello world on http://localhost:8080')
})

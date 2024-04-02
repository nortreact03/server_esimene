const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/tervitus', (req, res) => {
    res.end(`
    <h1>Hello world and galaxy, too</h1>
    `)
})

app.get('/api/tervitus', (req, res) => {
    res.json({
        message: 'Hello world and galaxy, too'
    })
})

app.listen(5500)



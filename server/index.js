const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const env = process.env.ENV || 'development'


console.log('ENV', env);

app.get('/', (req, res) => {
    res.send(`Hello World from ${env} !`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

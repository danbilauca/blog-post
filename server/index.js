const express = require('express')
const fs = require('fs');

const app = express()

app.use(express.json());

const port = process.env.PORT || 3000

const env = process.env.ENV || 'development'

console.log('ENV', env);

app.get('/read', (req, res) => {
    fs.readFile('./tmp/quotes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
        } else {
            res.send(JSON.stringify(data));
        }
    });
});

app.post('/write', (req, res) => {
    const payload = req.body;
    fs.writeFile('./tmp/quotes.json', JSON.stringify(payload), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to file');
        } else {
            res.send('Payload written to file');
        }
    });
});


app.get('/', (req, res) => {
    res.send(`Hello World from ${env} !`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello ATC! Devops Task Completed'))
app.listen(8080, () => console.log('Server ready'))

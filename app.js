const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        me: ['Andres', '32', 'Ecuador'],
        verb: request.method
    })
})

app.post('/metas', (request, response) => {
    response.status(200).json({
        hobbies: ['Jugar futbol, bailar, beber'],
        verb: request.method
    })
})

app.patch('/metas', (request, response) => {
    response.status(200).json({
        metas: ['Aprender ingles', 'Graduarme en academlo'],
        verb: request.method
    })
})

app.put('/business', (request, response) => {
    response.status(200).json({
        business: ['Globant, 365Scores, TecSys'],
        verb: request.method
    })
})

app.listen(9000, () => {
    console.log('Server started at port 9000')
})
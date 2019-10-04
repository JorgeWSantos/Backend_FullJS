const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json({message:'helo world'})
})

app.listen(3333)
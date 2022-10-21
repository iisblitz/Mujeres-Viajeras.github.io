const express = require("express")

//init app and middleware

const app = express()

app.listen(3000, () => {
    console.log('app running on port 3000')
})

// routers
app.get('/Catalogo', (req, res) => {
    res.json({ mssg: "welcome to the api" })
})

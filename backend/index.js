const connectToMongoo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongoo()
const app = express()
const port = 5000

app.use(express.json()) // it is moddleware which is used to send req.body
app.use(cors())
app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))
app.use('/api/contactD', require("./routes/contactD"))
app.use('/api/otherD', require("./routes/otherD"))
app.use('/api/attorneyD', require("./routes/attorneyD"))
app.use('/api/nomineeD', require("./routes/nomineeD"))

// app.get('/', (req, res) => {
//         res.send('Hello World!')
//     })
// app.get('/about', (req, res) => {
//     res.send('about Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}*/
// MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })//避開警告訊息
// MongoDB-connection status
const db = mongoose.connection
db.on('error', () => {
    console.log('mongodb error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
})


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const originalURL = req.body.original_URL
    let alphabetNumber = 'abcdefghijklmnopqrstuvwxyz1234567890'
    alphabetNumber = alphabetNumber.split('')
    let shortUrl = ''
    function randomCode(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
    for (let i = 0; i < 5; i++) {
        shortUrl += randomCode(alphabetNumber)
    }
    res.render('shortenUrl', { shortUrl })
})

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`)
})
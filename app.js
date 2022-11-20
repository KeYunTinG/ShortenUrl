const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    res.render('shortenUrl')
})

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`)
})
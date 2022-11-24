const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(routes)

require('./config/mongoose')

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`)
})
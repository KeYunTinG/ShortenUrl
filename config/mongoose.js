const mongoose = require('mongoose')

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

module.exports = db
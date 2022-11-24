const express = require('express')
const URL = require('../../models/url')
const generate_shortenURL = require('../../generate_shortenURL')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const originalURL = req.body.original_URL
  URL.findOne({ originalURL })
    .then((item) => {
      if (!item) {
        let shortUrl = generate_shortenURL()
        URL.create({ originalURL, shortUrl })
          .then(() => res.render('shortenUrl', { shortUrl }))
          .catch(err => console.log(err))
      } else {
        shortUrl = item.shortUrl
        res.render('shortenUrl', { shortUrl })
      }
    })

})

router.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  URL.findOne({ shortUrl })
    .lean()
    .then((item) => {
      if (!item) {
        res.redirect('/')
      } else {
        res.redirect(`${item.originalURL}`)
      }
    })
})

module.exports = router


function randomCode(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function generate_shortenURL() {
    let alphabetNumber = 'abcdefghijklmnopqrstuvwxyz1234567890'
    alphabetNumber = alphabetNumber.split('')
    let shortUrl = ''
    for (let i = 0; i < 5; i++) {
        shortUrl += randomCode(alphabetNumber)
    }
    return shortUrl
}
module.exports = generate_shortenURL
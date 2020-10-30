// Importeren dependencies
const express = require('express')
const server = express()
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const { Http2ServerRequest } = require('http2')
const { response } = require('express')
const PORT = 1337

// Declare view engine
server.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  handlebars: allowInsecurePrototypeAccess(handlebars)
}))
server.set('views', path.join(__dirname, 'templates'))
server.set('view engine', '.hbs');

server.get('/', (req, res) => {
  // Database import
  const date = new Date
  const currentDay = date.getDay()
  console.log(currentDay)

  if (currentDay === 5){
    let dayName = 'Vrijdag'
    res.status(200)
    res.render('intro', {
      day: dayName
    })
  }

  res.status(200)
})



server.post('/', (req, res) => {
  
})



// server.get('/bewoners', (req, res) => {
//   res.redirect('/404')
// })


server.get('/bewoners/:id', (req, res) => {
  // Doe iets met database
})

server.listen(PORT, () => {
  console.log(`Server is gestart op port ${PORT}!`)
})

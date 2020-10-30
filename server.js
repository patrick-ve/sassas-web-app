// Importeren dependencies
const express = require('express')
const server = express()
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const bodyParser = require('body-parser')

const PORT = 1337

// Declare view engine
server.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  handlebars: allowInsecurePrototypeAccess(handlebars)
}))
server.set('views', path.join(__dirname, 'templates'))
server.set('view engine', '.hbs');

// Server middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(bodyParser.urlencoded({
	extended: false
}));
server.use(bodyParser.json());

// Declare all routes
const indexRouter = require('./routes/indexRouter.js')
const signUpRouter = require('./routes/signUpRouter.js')

// Import server routers
server.use('/', indexRouter)
server.use('/signup', signUpRouter)


server.get('/bewoners/:id', (req, res) => {
  // Doe iets met database
})

server.listen(PORT, () => {
  console.log(`Server is gestart op port ${PORT}!`)
})

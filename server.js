// Importeren dependencies
const express = require('express')
const server = express()
const favicon = require('serve-favicon')
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
server.use(favicon(path.join(__dirname, 'public', 'favicon.png')))


// Database Connect - Voor sqlite gekozen omdat mongodb en postgressql scheit documentatie hadden. Danku
var sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./database/database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to database.');
}); 

let sql = `SELECT Name FROM name `; 

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});




// Declare all routes
const indexRouter = require('./routes/indexRouter.js')
const signUpRouter = require('./routes/signUpRouter.js')
const dashboardRouter = require('./routes/dashboardRouter.js')
 
// Import server routers
server.use('/', indexRouter)
server.use('/signup', signUpRouter)
server.use('/dashboard', dashboardRouter)


server.get('/bewoners/:id', (req, res) => {
  // Doe iets met database
})

server.listen(PORT, () => {
  console.log(`Server is gestart op port ${PORT}!`)
})

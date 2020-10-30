const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')


router.get('/', (req, res) => {
  res.status(200)
  res.render('signup')
})

router.post('/', (req, res) => {
  const name = req.body.name
  const password = req.body.password

// Voeg nieuwe gebruiker aan database toe
// SQL injection here we go...
// Hoe zorg je ervoor dat database connection global wordt
var sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./database/database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to database.');
}); 


bcrypt.hash(password, 10, (err, hash) => {
  db.run(`INSERT into users(name,password,score)values("${name}","${hash}", 0)`) 
});
console.log(`Er is een nieuwe gebruiker gemaakt met naam: ${name}!`)

  res.status(201)
  res.redirect('/')
})

module.exports = router

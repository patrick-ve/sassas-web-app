const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.status(200)
  res.render('signup')
})

router.post('/', (req, res) => {
  const name = req.body.name
  const password = req.body.password


// Voeg nieuwe gebruiker aan database toe



  console.log(`Er is een nieuwe gebruiker gemaakt met naam: ${name}!`)
  console.log(`Het wachtwoord is: ${password}!`)
  res.status(201)
  res.redirect('/')
})

module.exports = router

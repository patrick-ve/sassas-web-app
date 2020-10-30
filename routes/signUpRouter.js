const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.status(200)
  res.render('signup')
})

router.post('/', (req, res) => {
  const name = req.body.name
  console.log(`Er is iets gepost met ${name}!`)
  res.status(201)
  res.redirect('/')
})

module.exports = router

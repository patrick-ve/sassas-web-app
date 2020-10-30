const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.status(200)
  res.render('dashboard')
})

router.post('/', (req, res) => {
  const name = req.body.name
  const password = req.body.password


  
console.log('post request')
  res.status(201)
  res.redirect('/')
})

module.exports = router



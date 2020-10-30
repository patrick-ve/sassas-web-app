const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
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

module.exports = router

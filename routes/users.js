const express = require('express')
const router = express.Router()

router.get('/' , (req,res) => {
  res.send('You are in users (router)')
})

module.exports = router
const router = require('express').Router()

router.get('/employee', (req, res) => {
  res.send({
    ok: 123
  })
})

module.exports = router
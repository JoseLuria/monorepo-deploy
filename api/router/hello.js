const { Router } = require('express')

const router = Router()

router.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

module.exports = router

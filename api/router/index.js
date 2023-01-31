const { readdirSync } = require('fs')
const { Router } = require('express')

const router = Router()

readdirSync(__dirname).forEach((fileName) => {
  const cleanName = fileName.split('.').shift()

  if (cleanName !== 'index') {
    const moduleRouter = require(`./${cleanName}`)
    router.use(`/${cleanName}`, moduleRouter)
  }
})

module.exports = router

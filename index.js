/* eslint-disable no-console */
const express = require('express')
const { getManufacturersWithProducts } = require('./constrollers/manufacturers')

const app = express()

app.get('/manufacturers', getManufacturersWithProducts)

app.listen(1337, () => {
  console.log('listening on port 1337...')
})

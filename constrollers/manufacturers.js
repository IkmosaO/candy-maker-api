/* eslint-disable no-console */
const models = require('../models')

const getManufacturersWithProducts = async (request, response) => {
  try {
    const allManufacturersWithProducts = await models.Manufacturers.findAll({
      includes: [{ model: models.Products }]
    })

    // console.log(allManufacturersWithProducts)

    return allManufacturersWithProducts
      ? response.send(allManufacturersWithProducts)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('didn\'t work')
  }
}

module.exports = { getManufacturersWithProducts }


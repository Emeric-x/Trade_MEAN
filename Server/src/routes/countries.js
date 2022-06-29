const express = require('express')
const router = express.Router()
const countriesController = require('../controllers/countries')

router.get('/', countriesController.GetAllCountries)
router.post('/', countriesController.PostCountry)
router.put('/:id', countriesController.UpdateCountry)
router.get('/:id', countriesController.GetCountry)
router.delete('/:id', countriesController.DeleteCountry)

module.exports = router
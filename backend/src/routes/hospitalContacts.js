const express = require ('express')
const hospitalRouter = express.Router()
const controller = require('../controllers/hospitalController')

hospitalRouter.get('contacts/hospital/', controller.getHospitalContacts)
hospitalRouter.post('contacts/hospital', controller.createHospitalContact)
hospitalRouter.get('contacts/hospital/:id', controller.getHospitalContactById)

module.exports = hospitalRouter;
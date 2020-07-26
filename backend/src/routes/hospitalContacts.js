const express = require ('express')
const hospitalRouter = express.Router()
const controller = require('../controllers/hospitalController')

hospitalRouter.get('/', controller.getHospitalContacts)
hospitalRouter.post('/', controller.createHospitalContact)
hospitalRouter.get('/:id', controller.getHospitalContactById)

module.exports = hospitalRouter;
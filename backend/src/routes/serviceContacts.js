const express = require ('express')
const serviceRouter = express.Router()
const controller = require('../controllers/serviceController')

serviceRouter.get('/', controller.getServiceContacts)
serviceRouter.post('/', controller.createServiceContact)
serviceRouter.get('/:id', controller.getServiceContactById)

module.exports = serviceRouter;
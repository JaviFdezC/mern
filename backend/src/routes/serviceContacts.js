const express = require ('express')
const serviceRouter = express.Router()
const controller = require('../controllers/serviceController')

serviceRouter.get('contacts/service/:idService', controller.getServiceContacts)
serviceRouter.post('contacts/service/:idService', controller.createServiceContact)
serviceRouter.get('contacts/service/:idService/:id', controller.getServiceContactById)

module.exports = serviceRouter;
const express = require ('express')
const customerRouter = express.Router()
const controller = require('../controllers/customerController')

customerRouter.get('contacts/customer/:uuid', controller.getCustomerContacts)
customerRouter.post('contacts/customer/:uuid', controller.createCustomerContact)
customerRouter.get('contacts/customer/:uuid/:id', controller.getCustomerContactById)

module.exports = customerRouter;

const express = require ('express')
const customerRouter = express.Router()
const controller = require('../controllers/customerController')

customerRouter.get('/', controller.getCustomerContacts)
customerRouter.post('/', controller.createCustomerContact)
customerRouter.get('/:id', controller.getCustomerContactById)

module.exports = customerRouter;

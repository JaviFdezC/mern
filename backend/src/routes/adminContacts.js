const express = require ('express')
const adminRouter = express.Router()
const controller = require('../controllers/adminController')

adminRouter.get('contacts/admin', controller.getAdminContacts)
adminRouter.post('contacts/admin', controller.createAdminContact)
adminRouter.get('contacts/admin/:id', controller.getAdminContactById)

module.exports = adminRouter;
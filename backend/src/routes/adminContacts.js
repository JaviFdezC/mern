const express = require ('express')
const adminRouter = express.Router()
const controller = require('../controllers/adminController')

adminRouter.get('/', controller.getAdminContacts)
adminRouter.post('/', controller.createAdminContact)
adminRouter.get('/:id', controller.getAdminContactById)

module.exports = adminRouter;
const express = require ('express')
const allContactsRouter = express.Router()
const controller = require('../controllers/allContactsController')

allContactsRouter.put('contacts/:id', controller.updateContact)
allContactsRouter.delete('contacts/:id', controller.deleteContact)

module.exports = allContactsRouter;
const express = require ('express')
const allContactsRouter = express.Router()
const controller = require('../controllers/allContactsController')

allContactsRouter.put('/', controller.updateContact)
allContactsRouter.delete('/', controller.deleteContact)

module.exports = allContactsRouter;
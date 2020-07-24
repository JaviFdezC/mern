const { Router } = require ('express')
const allContactsRouter = Router()

allContactsRouter.route('/contacts/:id')
    .put((req, res) => res.json({'message':'Contact updated'}))
    .delete((req, res) => res.json({'message':'Contact deleted'}))

module.exports = allContactsRouter;
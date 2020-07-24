const { Router } = require ('express')
const adminRouter = Router()

adminRouter.route('/contacts/admin')
    .get((req, res) => res.json({'message':'All the qdmin contacts'}))
    .post((req, res) => res.json({'message':'New admin contact created'}))

adminRouter.route('/contacts/admin/:id')
    .get((req, res) => res.json({'message':'Admin contact details'}))

module.exports = adminRouter;
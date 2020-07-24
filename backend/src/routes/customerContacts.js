const { Router } = require ('express')
const customerRouter = Router()

customerRouter.route('/contacts/customer/:uuid')
    .get((req, res) => res.json({'message':'All the customer contacts'}))
    .post((req, res) => res.json({'message':'New customer contact created'}))

customerRouter.route('/contacts/customer/:uuid/:id')
    .get((req, res) => res.json({'message':'Customer contact details'}))

module.exports = customerRouter;
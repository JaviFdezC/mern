const { Router } = require ('express')
const serviceRouter = Router()

serviceRouter.route('/contacts/service/:idService')
    .get((req, res) => res.json({'message':'All the service contacts'}))
    .post((req, res) => res.json({'message':'New service contact created'}))

serviceRouter.route('/contacts/service/:idService/:id')
    .get((req, res) => res.json({'message':'Service contact details'}))

module.exports = serviceRouter;
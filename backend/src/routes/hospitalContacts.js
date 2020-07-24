const { Router } = require ('express')
const hospitalRouter = Router()

hospitalRouter.route('/contacts/hospital')
    .get((req, res) => res.json({'message':'All the hospital contacts'}))
    .post((req, res) => res.json({'message':'New hospital contact created'}))

    hospitalRouter.route('/contacts/hospital/:id')
    .get((req, res) => res.json({'message':'Hospital contact details'}))

module.exports = hospitalRouter;
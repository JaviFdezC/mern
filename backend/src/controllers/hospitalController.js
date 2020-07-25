const hospitalController = {}

hospitalController.getHospitalContacts = (req, res) => res.json({'message':'All the hospital contacts'})
hospitalController.createHospitalContact = (req, res) => res.json({'message':'New hospital contact created'})
hospitalController.getHospitalContactById = (req, res) => res.json({'message':'Hospital contact details'})

module.exports = hospitalController
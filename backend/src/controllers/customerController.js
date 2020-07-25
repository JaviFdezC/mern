const customerController = {}

customerController.getCustomerContacts = (req, res) => res.json({message:'All the customer contacts'})
customerController.createCustomerContact = (req, res) => res.json({message:'New customer contact created'})
customerController.getCustomerContactById = (req, res) => res.json({message:'Customer contact details'})

module.exports = customerController;
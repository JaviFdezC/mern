const adminController = {}

adminController.getAdminContacts = (req, res) => res.json({'message':'All the admin contacts'})
adminController.createAdminContact = (req, res) => res.json({'message':'New admin contact created'})
adminController.getAdminContactById = (req, res) => res.json({'message':'Admin contact details'})

module.exports = adminController;
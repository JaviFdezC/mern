const serviceController = {}

serviceController.getServiceContacts = (req, res) => res.json({message:'All the service contacts'})
serviceController.createServiceContact = (req, res) => res.json({message:'New service contact created'})
serviceController.getServiceContactById = (req, res) => res.json({message:'Service contact details'})

module.exports = serviceController;
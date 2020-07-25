const allContactsController = {}

allContactsController.updateContact = (req, res) => res.json({'message':'Contact updated'})
allContactsController.deleteContact = (req, res) => res.json({'message':'Contact deleted'})

module.exports = allContactsController;
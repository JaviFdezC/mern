const allContactsController = {}
const Contact = require('../models/contact')

allContactsController.updateContact = async (req, res) => {
    const { type, label, telephone } = req.body
    await Contact.findOneAndUpdate(req.params.id, {
        type: type.value,
        label,
        telephone
    })
    res.json({message:'Contact updated'})
}

allContactsController.deleteContact = async (req, res) => {
    await Contact.findOneAndDelete(req.params.id)
    res.json({message:'Contact deleted'})
}

module.exports = allContactsController;
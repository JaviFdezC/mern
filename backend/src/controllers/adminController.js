const adminController = {}
const Contact = require('../models/contact')

adminController.getAdminContacts = async (req, res) => {
    const contacts = await Contact.find()
    res.json(contacts)
}

adminController.createAdminContact = async (req, res) => {
    const { type, label, telephone } = req.body
    const newContact = new Contact({
        type: 'admin',
        label,
        telephone
    })
    console.log(newContact)
    await newContact.save()
    res.json({message:'New admin contact created'})
}

adminController.getAdminContactById = async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    res.json(contact)
}

module.exports = adminController;
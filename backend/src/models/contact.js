const { Schema, model} = require('mongoose')

const contactSchema = new Schema = ({
    type: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true,
        trim: true
    },
    telephone: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Contact', contactSchema)
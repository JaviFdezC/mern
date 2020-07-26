const express = require('express')
const cors = require('cors')
const app = express()

// Settings
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/contacts/customers/:uuid', require('./routes/customerContacts'))
app.use('/contacts/hospital', require('./routes/hospitalContacts'))
app.use('/contacts/service/:idService', require('./routes/serviceContacts'))
app.use('/contacts/admin', require('./routes/adminContacts'))
app.use('/contacts/:id', require('./routes/allContacts'))

module.exports = app
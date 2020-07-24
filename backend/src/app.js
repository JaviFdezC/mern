const express = require('express')
const cors = require('cors')
const app = express()

// Settings
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/', require('./routes/customerContacts'))
app.use('/', require('./routes/hospitalContacts'))
app.use('/', require('./routes/serviceContacts'))
app.use('/', require('./routes/adminContacts'))
app.use('/', require('./routes/allContacts'))

module.exports = app
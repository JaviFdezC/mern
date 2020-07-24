const mongoose = require('mongoose')

const URI = 'mongodb://localhost/phonedirectory'

mongoose.connect(URI, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('connected to the database')
})
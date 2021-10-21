const mongoose = require('mongoose')
const db = mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

module.export = db;
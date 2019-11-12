const mongoose = require('mongoose');

const connectionString = "mongodb+srv://user:user@cluster0-5axkj.azure.mongodb.net/test?retryWrites=true&w=majority";

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}
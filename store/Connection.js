const mongoose = require('mongoose');

const openConnection = () => mongoose.connect("mongodb+srv://teste:1234@cluster0-5axkj.azure.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })

module.exports = {
    openConnection,
}
const mongoose = require("mongoose")

const uri = "mongodb+srv://admin:123@cluster0.oqo17.mongodb.net/TuAgenda?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => console.log("Conectado a Mongo"))
    .catch((e) => console.log("Fallo en la conexion: " + e));

module.exports = mongoose;
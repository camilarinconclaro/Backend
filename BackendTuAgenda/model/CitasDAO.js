const conexion = require("../DB/conexionDB")

const citasSchema = conexion.Schema({
    fecha: Date,
    estado: String,
    precio: Number,
    paciente: {
        id: String,
        nombre: String,
        apellido: String,
        documento: String,
        fechaNacimiento: Date
    },
    medico: {
        id: String,
        nombre: String,
        apellido: String,
        especialidad: String
    }
}, {
    collection: "Citas",
    versionKey: false
});

const citasDAO = conexion.model('Citas', citasSchema);

module.exports = citasDAO;
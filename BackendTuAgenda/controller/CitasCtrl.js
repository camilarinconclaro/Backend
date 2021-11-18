const citasDAO = require("../model/CitasDAO")

const citasCtrl = {}


citasCtrl.listar = async() => {
    let citas = citasDAO.find();
    return citas;
}

citasCtrl.insertar = async(cita) => {
    return await citasDAO.create(cita);
}

citasCtrl.actualizar = async(cita) => {
    let id = cita._id;
    delete cita._id;
    return await citasDAO.findByIdAndUpdate(id, cita);
}

citasCtrl.eliminar = async(id) => {
    await citasDAO.deleteOne({ _id: id });
}


module.exports = citasCtrl;
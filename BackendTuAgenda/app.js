const express = require("express")
const citasCtrl = require("./controller/CitasCtrl")

const app = express();
app.use(express.json());


app.listen(1600, () => {
    console.log("Conectado al servidor");
});


app.get('/api/citas', async(request, response) => {
    try {
        const citas = await citasCtrl.listar();
        response.status(200).json(citas);
    } catch (error) {
        console.log("Get Error: " + error);
        response.status(400).send("Get Error: " + error);
    }
})


app.post('/api/citas', async(request, response) => {
    const cita = request.body;
    try {
        await citasCtrl.insertar(cita);
        response.status(201).send("Cita registrada exitosamente");
    } catch (error) {
        console.log("Insert Error: " + error);
        response.status(400).send("Insert Error: " + error);
    }

});


app.put('/api/citas', async(request, response) => {
    const cita = request.body;
    try {
        await citasCtrl.actualizar(cita);
        response.status(200).send("Cita actualizada exitosamente");
    } catch (error) {
        console.log("Update Error: " + error);
        response.status(400).send("Update Error: " + error);
    }
})


app.delete('/api/citas/:id', async(request, response) => {
    const id = request.params.id;
    try {
        await citasCtrl.eliminar(id);
        response.status(200).send("Cita eliminada exitosamente");
    } catch (error) {
        console.log("Insert Error: " + error);
        response.status(400).send("Insert Error: " + error);
    }
})
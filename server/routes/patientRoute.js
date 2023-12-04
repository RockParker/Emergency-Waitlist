import express, {json} from 'express'
import {Patient} from "../MyClasses/Patient.js"
import {connection} from "../server.js"
export const patientRouter = express.Router()

patientRouter.post("/new", async (req, res) => {
    await Patient.InsertIntoDatabase(connection, (out, status)=>{
        res.status(status)
        res.send(out)
    }, Patient.CreatePatient(req.body["patient"]))
})

patientRouter.get('/get-all', async (req, res) => {
    await Patient.GetAll(connection, (output, status)=>{
        res.status(status)
        res.send(output)
    })
})

patientRouter.get('/get/:id', async (req, res) =>{
    let id = req.params.id
    await Patient.Get(connection, (o,s)=>{
        res.status(s)
        res.send(o)
    }, id)
})


patientRouter.put('/update', (req, res) => {
    let patient = req.body["patient"]; // assume json with all values
})

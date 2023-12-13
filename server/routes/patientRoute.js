import express, {json} from 'express'
import {Patient} from "../MyClasses/Patient.js"
export const patientRouter = express.Router()

//patient only needs firstName and lastName

patientRouter.post("/new", async (req, res) => {
    await Patient.InsertIntoDatabase((out, status)=>{
        res.status(status)
        res.send(out)
    }, Patient.CreatePatient(req.body["patient"]))
})

patientRouter.get('/get-all', async (req, res) => {
    await Patient.GetAll((output, status)=>{
        res.status(status)
        res.send(output)
    })
})

patientRouter.get('/get/:id', async (req, res) =>{
    let id = req.params.id
    await Patient.Get((o,s)=>{
        res.status(s)
        res.send(o)
    }, id)
})


import express, {json} from 'express'
import {connection} from "../server.js"
import {PatientHistory} from "../MyClasses/PatientHistory.js";

export const historyRouter = express.Router()

historyRouter.post('/new', async (req, res) =>{

    await PatientHistory.InsertIntoDatabase(connection, (o,s) =>{
        res.status(s)
        res.send(o)
    }, PatientHistory.CreatePatientHistory(req.body["history"]))
})

historyRouter.get('/get-all', async (req, res)=>{
    await PatientHistory.GetAll(connection, (o, s) =>{
        res.status(s)
        res.send(o)
    })
})

historyRouter.get('/get-incomplete', async (req, res) =>{
    await PatientHistory.GetIncomplete(connection, (o, s)=>{
        res.status(s)
        res.send(o)
    })
})


historyRouter.put('/update', async (req, res) =>{
    await PatientHistory.Update(connection, (o,s)=>{
        res.status(s)
        res.send(o)
    }, PatientHistory.CreatePatientHistory(req.body["history"]))

})

historyRouter.get('/get/:id', async (req, res) => {
    await PatientHistory.Get(connection, (o, s)=>{
        res.status(s)
        res.send(o)
        }, req.params.id)
})
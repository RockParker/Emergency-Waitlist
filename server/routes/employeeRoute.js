import express from "express";
import {Employee} from "../MyClasses/Employee.js";

export const employeeRouter = express.Router()

employeeRouter.get('/get/:id', async (req, res) => {
    await Employee.Get((output, status)=>{
        res.status(status)
        res.send(output)
    } , req.params.username)
})

employeeRouter.get('/get-all', async (req, res) => {
    await Employee.GetAll((output, status)=>{
        res.status(status)
        res.send(output)
    } )
})

employeeRouter.post('/new', async (req, res) =>{

    await Employee.InsertIntoDatabase((output, status)=>{
        res.status(status)
        res.send(output)
    } , Employee.CreateEmployee(req.body["employee"]))//change this to take from the body
})


employeeRouter.put('/update', async (req, res) => {
    await Employee.Update((output, status)=>{
        res.status(status)
        res.send(output)
    }, Employee.CreateEmployee(req.body["employee"]))
})

import express from "express";
import {connection} from "../server.js";
import {Employee} from "../MyClasses/Employee.js";

export const employeeRouter = express.Router()

employeeRouter.get('/get/:id', async (req, res) => {
    let id = req.params.id
    await Employee.Get(connection, (output, status)=>{
        res.status(status)
        res.send(output)
    } , id)
})

employeeRouter.get('/get-all', async (req, res) => {
    await Employee.GetAll(connection, (output, status)=>{
        res.status(status)
        res.send(output)
    } )
})

employeeRouter.post('/new', async (req, res) =>{

    await Employee.InsertIntoDatabase(connection, (output, status)=>{
        res.status(status)
        res.send(output)
    } , Employee.CreateEmployee(req.body["employee"]))//change this to take from the body
})

employeeRouter.put('/update', async (req, res) => {
    await Employee.Update(connection, (output, status)=>{
        res.status(status)
        res.send(output)
    }, new Employee())
})
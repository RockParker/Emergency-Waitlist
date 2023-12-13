import sql from 'mysql'
import express from 'express'

import {patientRouter} from './routes/patientRoute.js'
import {employeeRouter} from './routes/employeeRoute.js'
import {historyRouter} from "./routes/historyRoute.js";

import {DoesDBExist} from "./SQLCreationMethods.js";
import {Employee} from "./MyClasses/Employee.js";

export const connection = sql.createPool({host:'localhost',user:'ross',password:'password'}) //by default this DOES NOT allow multiple queries, this stops blind injection
const app = express()
const PORT_NUMBER = 3000

app.listen(PORT_NUMBER)

app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.use("/patient", patientRouter) //here be the middleware
app.use("/history", historyRouter)
app.use("/employee", employeeRouter)


app.get('/exists/tables', (req, res) => {

    DoesDBExist((ret, statusCode)=>{
        console.log(ret)
        res.status(statusCode)
        res.send(ret)
    })

})

app.get('/login/:username&:password', async (req, res) =>{
    await Employee.Login((o,s)=>{
        res.sendStatus(s)
    }, req.params.username, req.params.password )
})
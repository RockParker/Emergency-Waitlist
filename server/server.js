const express = require('express')
const app = express()
const PORT_NUMBER = 3000

app.listen(PORT_NUMBER)

app.use('/' , (req,res,next)=>{
    res.setHeader('Allow-Access-Control-Origin', '*')
    console.log('saw ping')
    next()
})

app.get('/temp/:id', (req,res)=>{
    let dict = {
        arrival:"10:30",
        wait:"90"
    }

    let resp = JSON.stringify(dict)
    res.status(200)
    res.send(resp)
})

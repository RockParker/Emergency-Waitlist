import {Employee, Patient, PatientHistory} from './ServerConnection.js'

/*

*** note, the create and update methods do NOT return instances of the created entry in the database
*** it is not supposed to either. e.g. the line below "json => np.id = json.insertId" is very important even though
*** we aren't getting an instance of the object


let np = new Patient('Victoria', 'Parker')
Patient.CreateInDatabase(np)
    .then(res => res.json())
    .then(json => np.id = json.insertId)


let temp
Patient.GetAll()
    .then(res => res.json())
    .then(json => {
        temp = Patient.FromJson(json)
    })
*/
/*
Patient.GetById(2)
    .then(res => res.json())
    .then(json =>{
        console.log(json)
    })


let nph = new PatientHistory(14, 'lost stick up ass', 1, 1)
PatientHistory.CreateInDatabase(nph)
    .then(res => res.json())
    .then(json => {
        nph.id = json.insertId
})

PatientHistory.GetAll()
    .then(res => res.json())
    .then(json =>
    {
        console.log(json)
    })


PatientHistory.GetById(2)
    .then(res => res.json())
    .then(json =>
    {
        console.log(json)
    })

let nph = new PatientHistory()
nph.id = 2
nph.resolution = 'pulled stick out of asshole'
PatientHistory.Update(nph)
    .then(res => res.json())
    .then(json =>
    {
        console.log(json)
    })



Employee.GetAll()
    .then(res => res.json())
    .then(json =>{
        console.log(json)
    })


Employee.GetById(5)
    .then(res => res.json())
    .then(json =>{
        console.log(json)
    })


let e = new Employee("Anthony", "Dicaire", "User6", "not sure", "licence", "password123")
Employee.CreateInDatabase(e)
    .then(res => res.json())
    .then(json =>{
        e.id = json.insertId
    })

let e = new Employee("Anthony", "Dicaire", "User6", "not sure", "licence", "password123")
e.id = 9
e.lastName = "not Dicaire"
Employee.Update(e)
    .then(res => res.json())
    .then(json =>{
        console.log(json)
    })
*/

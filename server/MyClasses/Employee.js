//import {connection} from "../server.js"
import {UseConnection} from "./SharedConnection.js";

export class Employee{
    firstName
    lastName
    role
    license
    password
    id

    constructor(firstname, lastname, role, license, password, id){
    this.firstName = firstname
        this.lastName = lastname
        this.role = role
        this.license = license
        this.password = password
        this.id = id
    }

    static async GetAll(connection, callback){
        let query = `SELECT * FROM triage_schema.employee`
        await UseConnection(connection, callback, query)
    }

    static async Get(connection, callback, id){
        let query = `SELECT * FROM triage_schema.employee WHERE employee_id = ${id};`
        await UseConnection(connection, callback, query)
    }

    static async InsertIntoDatabase(connection, callback, employee){
        let query = `INSERT INTO triage_schema.employee (`+`fname, lname, role, medical_license, password) `+
            `VALUES ('${employee.firstName}', '${employee.lastName}', '${employee.role}', '${employee.license}', '${employee.password}');`
        //lastname = '; DROP S'
        await UseConnection(connection, callback, query)
    }


    static async Update(connection, callback, e){
        let query =
            `UPDATE triage_schema.employee `+
            `SET fname = '${e.firstName}', lname = '${e.lastName}', role ='${e.role}', `+
            `medical_license = '${e.license}', password = '${e.password}' ` +
            `WHERE employee_id = ${e.id};`


        await UseConnection(connection, callback, query)

    }

    static async Login(connection, callback, e)
    {
        let query = `SELECT * FROM triage_schema.employee WHERE password = '${e.password}';`
        console.log(query)
        let output
        await UseConnection(connection, (o, s)=>
        {
/*            let json = JSON.parse(o)
            for(let o in json)
            {

            }*/
            callback(o,s)
        }, query)
    }

    static CreateEmployee(j){
        return new Employee(
            j["fname"],
            j["lname"],
            j["role"],
            j["license"],
            j["password"],
            j["employee_id"]
        )
    }
}
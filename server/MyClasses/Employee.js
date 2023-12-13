import {UseConnection} from "./SharedConnection.js"


export class Employee{
    firstName
    lastName
    userName
    role
    license
    password
    id

    constructor(firstname, lastname, username, role, license, password, id){
        this.firstName = firstname
        this.lastName = lastname
        this.userName = username
        this.role = role
        this.license = license
        this.password = password
        this.id = id
    }

    static async Get(callback, id){
        let query = `SELECT * FROM triage_schema.employee WHERE id like '${id}';`
        await UseConnection(callback, query)
    }

    static async GetAll(callback){
        let query = `SELECT * FROM triage_schema.employee`
        await UseConnection(callback, query)
    }

    static async InsertIntoDatabase(callback, employee){
        let query = `INSERT INTO triage_schema.employee (`+`fname, lname, username, role, medical_license, password) `+
            `VALUES ('${employee.firstName}', '${employee.lastName}', '${employee.userName}', '${employee.role}', '${employee.license}', '${employee.password}');`
        await UseConnection(callback, query)
    }

    static async Update(callback, e){
        let query =
            `UPDATE triage_schema.employee `+
            `SET fname = '${e.firstName}', lname = '${e.lastName}', role ='${e.role}', `+
            `medical_license = '${e.license}', password = '${e.password}' ` +
            `WHERE employee_id = ${e.id};`
        await UseConnection(callback, query)
    }

    static async Login(callback, username, password)
    {
        throw new Error('Not Implemented')
        let query = `SELECT * FROM triage_schema.employee WHERE password = '${password}' AND username = '${username}';`
        console.log(query)
        let output
        await UseConnection((o, s)=>
        {
/*            let json = JSON.parse(o)
            for(let o in json)
            {

            }*/
            callback(o,s)
        }, query)
    }

    static CreateEmployee(j){
        if(j == null)
            return;
        return new Employee(
            j["firstName"],
            j["lastName"],
            j["userName"],
            j["role"],
            j["license"],
            j["password"],
            j["id"]
        )
    }
}
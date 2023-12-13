/**
 * This file will be used to connect to the server
 * through a handful of methods that  will be exported
 */
import {json} from "express";

const patient_endpoint = 'patient/'
const history_endpoint = 'history/'
const employee_endpoint = 'employee/'
const base = 'http://localhost:3000/';

class Entity { // these methods will all need to access the endpoints

    static async GetById(tableName, id) {
        let link = base + tableName + 'get/' +id
        return await fetch(link)
    }

    static async GetAll(tableName) {
        let link = base + tableName + 'get-all'
        return await fetch(link)
    }

    static async CreateInDatabase(tableName, toBeEncoded) {
        let link = base + tableName + 'new'
        return await fetch(link, {method:"POST", body:toBeEncoded, headers: {'Accept':'application/json', 'Content-Type':'application/json'}})
    }
}

class MutableEntity extends Entity {
    static async Update(tableName, toBeEncoded) {
        let link = base + tableName + 'update'
        return await fetch(link, {method:"PUT", body:toBeEncoded, headers: {'Accept':'application/json', 'Content-Type':'application/json'}})
    }
}

/**
 * Handles patient related functions, overriding the super classes
 */
export class Patient extends Entity {
    id
    firstName
    lastName

    constructor(firstName, lastName) {
        super();
        this.firstName = firstName
        this.lastName = lastName
    }

    static GetById(id) {
        return super.GetById(patient_endpoint, id)
    }

    static GetAll() {
        return super.GetAll(patient_endpoint)
    }

    /**
     * @param {Patient} patient
     * @constructor
     */
    static CreateInDatabase(patient) {
        let jsonString = `{"patient":{"firstName":"${patient.firstName}", "lastName":"${patient.lastName}"}}`
        return super.CreateInDatabase(patient_endpoint, jsonString)
    }

    /**
     * @param json
     * @returns {{Patient}}
     * @constructor
     */
    static FromJson(json) {
        let array = JSON.parse(json)
        let ret = {}

        for(let i = 0; i < array.length; i++)
        {
            let p = new Patient()
            p.id = array[i]["id"]
            p.fname = array[i]["fname"]
            p.lname = array[i]["lname"]
            ret.append(p)
        }

        return ret
    }
}


/**
 * Handles patient history related functions, overriding the super classes
 */
export class PatientHistory extends MutableEntity {

    id
    severity
    problem
    resolution
    patient_id
    attending_id

    constructor(severity, problem, patient_id, attending_id) {
        super()
        this.severity = severity
        this.problem = problem
        this.patient_id = patient_id
        this.attending_id = attending_id
    }

    static async GetById(id) {
        return await super.GetById(history_endpoint, id)
    }

    static async GetAll() {
        return await super.GetAll(history_endpoint)
    }

    /**
     *
     * @param {PatientHistory} history
     * @constructor
     */
    static CreateInDatabase(history) {
        let jsonString = `{"history":{"severity":${history.severity}, "problem":"${history.problem}", "patient_id":${history.patient_id},"attending_id":${history.attending_id} }}`

        return super.CreateInDatabase(history_endpoint, jsonString)
    }

    /**
     *
     * @param {PatientHistory} history
     * @constructor
     */
    static Update(history) {
        let jsonString = `{     "history":{ "resolution":"${history.resolution}", "id":${history.id} }     }`

        return super.Update(history_endpoint, jsonString)
    }

    static FromJson(json) {
        let h = new History()
        h.id = json["id"]
        h.severity = json["severity"]
        h.problem = json["problem"]
        h.resolution = json["resolution"]
        h.patient_id = json["patient_id"]
        h.attending_id = json["attending_id"]
    }
}

/**
 * Handles employee related functions, overriding the super classes
 */
export class Employee extends MutableEntity {

    firstName
    lastName
    userName
    role
    license
    password
    id

    constructor(firstname, lastname, username, role, license, password){
        super()
        this.firstName = firstname
        this.lastName = lastname
        this.userName = username
        this.role = role
        this.license = license
        this.password = password
    }
    static async GetById(id) {
        return await super.GetById(employee_endpoint, id)
    }

    static async GetAll() {
        return await super.GetAll(employee_endpoint)
    }

    /**
     *
     * @param {Employee} employee
     * @constructor
     */
    static CreateInDatabase(employee) {
        let jsonString = `{ "employee":{ "firstName":"${employee.firstName}","lastName":"${employee.lastName}",`+
            `"userName":"${employee.userName}","role":"${employee.role}","license":"${employee.license}","password":"${employee.password}" }}`

        return super.CreateInDatabase(employee_endpoint, jsonString)
    }

    /**
     *
     * @param {Employee} employee
     * @constructor
     */
    static async Update(employee) {
        let jsonString = `{ "employee":{ "firstName":"${employee.firstName}","lastName":"${employee.lastName}",`+
            `"userName":"${employee.userName}","role":"${employee.role}","license":"${employee.license}",`+
                `"password":"${employee.password}", "id":${employee.id} }}`
        return await super.Update(employee_endpoint, jsonString)
    }

    static FromJson(json) {
        let h = new History()
        h.firstName  = json["firstName"]
        h.lastName = json["lastName"]
        h.userName = json["userName"]
        h.role = json["role"]
        h.license = json["license"]
        h.password = json["password"]
        h.id = json["id"]
        return h
    }


}
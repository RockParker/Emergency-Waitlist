import {UseConnection} from './SharedConnection.js'

export class Patient
{
    firstName
    lastName
    constructor (firstname, lastname)
    {
        this.firstName = firstname;
        this.lastName = lastname;
    }

    static async Get(callback, id){
        let query = `SELECT * FROM triage_schema.patient WHERE id = ${id};`
        await UseConnection(callback, query)
    }

    static async GetAll(callback){
        let query = `SELECT * FROM triage_schema.patient;`
        await UseConnection(callback, query)
    }

    static async InsertIntoDatabase(callback, patient){
        //Should add injection protection in the future****
        let query = `INSERT INTO triage_schema.patient`+` (firstName, lastName)`+` values (\'${patient.firstName}\' , \'${patient.lastName}\');`
        await UseConnection(callback, query)
    }

    static CreatePatient(j){
        return new Patient(
            j["firstName"],
            j["lastName"]
        )
    }
}
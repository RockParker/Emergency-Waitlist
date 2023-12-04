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

    static async InsertIntoDatabase(connection, callback, patient){
        //Should add injection protection in the future****
        let query = `INSERT INTO triage_schema.patient`+` (fname, lname)`+` values (\'${patient.firstName}\' , \'${patient.lastName}\');`

        await UseConnection(connection, callback, query)
    }

    static async GetAll(connection, callback){
        let query = `SELECT * FROM triage_schema.patient;`
        await UseConnection(connection, callback, query)
    }

    static async Get(connection, callback, id){
        let query = `SELECT * FROM triage_schema.patient WHERE id = ${id};`
        await UseConnection(connection, callback, query)
    }

    static CreatePatient(j){
        return new Patient(
            j["fname"],
            j["lname"]
        )
    }
}
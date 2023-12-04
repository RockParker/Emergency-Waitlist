import {UseConnection} from "./SharedConnection.js";

export class PatientHistory{
    id
    severity
    problem
    resolution
    patient_id
    attending_id

    constructor (severity, problem, patient_id, attending_id, resolution, id)
    {
        this.severity = severity
        this.problem = problem
        this.patient_id = patient_id
        this.attending_id = attending_id
        this.resolution = resolution
        this.id = id
    }

    static async InsertIntoDatabase(connection, callback, history){
        let query =
            `INSERT INTO triage_schema.patient_history (arrival, severity, problem, patient_id, attending_doctor) `+
            `VALUES (NOW(), ${history.severity}, '${history.problem}', ${history.patient_id}, ${history.attending_id});`

        await UseConnection(connection, callback, query)
    }

    static async Update(connection, callback, history){
        let query =
            `UPDATE triage_schema.patient_history `+
            `SET departure = NOW(),  resolution = '${history.resolution}' `+
            `WHERE history_id = ${history.id};`

        await UseConnection(connection, callback, query)
    }


    static async GetAll(connection, callback){
        let query = `SELECT * FROM triage_schema.patient_history;`

        await UseConnection(connection, callback, query)
    }

    static async GetIncomplete(connection, callback){
        let query = `SELECT * FROM triage_schema.patient_history WHERE departure IS NULL;`

        await UseConnection(connection, callback, query)
    }
    static async Get(connection, callback, id){
        let query = `SELECT * FROM triage_schema.patient_history WHERE history_id = ${id};`

        await UseConnection(connection, callback, query)
    }

    static CreatePatientHistory(j){
        return new PatientHistory(
            j["severity"],
            j["problem"],
            j["patient_id"],
            j["attending_id"],
            j["resolution"],
            j["id"])
    }
}
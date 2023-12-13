import {connection} from "./server.js";
const CreationQueries =
    [

    `CREATE TABLE triage_schema.employee
    (
        employee_id INT AUTO_INCREMENT PRIMARY KEY,
        fname           VARCHAR(20),
        lname           VARCHAR(20),
        username        VARCHAR(20) UNIQUE,
        role             VARCHAR(20),
        medical_license VARCHAR(35),
        password        VARCHAR(28)
    );`,

    `CREATE TABLE triage_schema.patient
    (
        id    INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(20),
        lastName VARCHAR(20)
    );`,

    `CREATE TABLE triage_schema.patient_history
    (
        history_id       INT AUTO_INCREMENT PRIMARY KEY,
        arrival          DATETIME,
        departure        DATETIME,
        severity         TINYINT,
        problem          VARCHAR(1000),
        resolution       VARCHAR(1000),
        patient_id       INT NOT NULL,
        attending_doctor INT NOT NULL,
        FOREIGN KEY (patient_id) REFERENCES triage_schema.patient (id),
        FOREIGN KEY (attending_doctor) REFERENCES triage_schema.employee (employee_id)
    );`,

    `INSERT INTO triage_schema.employee (fname, role, password) VALUES ('admin', 'admin', 'password')
    `
]
const DoesExistQuery = `
    SELECT IF(EXISTS(SELECT *
                     FROM information_schema.TABLES
                     where TABLE_NAME = 'password'),
              "TRUE",
              "FALSE");`


/**
 * uses the connection to create ALL tables
 * @param connection a setup sql connection
 * @param callBack
 */
export async function CreateTables(callBack) {

    for (let i = 0; i < CreationQueries.length; i++) {
        await connection.query(CreationQueries[i], function (err) {
            if (err) {
                console.log(err)
                callBack('Fail', 500)
                throw err;
            }
        })
    }
    callBack('success', 200)
}


export function DoesDBExist(callback) {

    connection.query(DoesExistQuery, function (err, results) {
        if (err) {
            console.log('error with query')
            callback(err, 500)
            throw err
        }
        let val = JSON.stringify(results).split(':')[1].includes('TRUE')

        if(!val)
        {
            CreateTables(callback)
        }
        else callback(val, 200)
    })

}
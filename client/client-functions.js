import {Employee, Patient} from "./ServerConnection.js"
console.log('FUCK THIS RETARDED SHIT')
export function LoginUser()
{

    let username = document.getElementById('loginId').value
    let password = document.getElementById('password').value

    if(password === '' || password === null){


        Patient.GetById(username)
            .then(response => response.text())
            .then(text =>{
                console.log(text)
                //this is where we should be loading the new web page with the data from the response
            })
    }
    else{
        Employee.Login(username, password)
            .then(response => response.text())
            .then(text =>{
                console.log(text)
                //this is where we should load the new web page with the data from the response
            })
    }

}

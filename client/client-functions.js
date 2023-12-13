import {Patient} from "./ServerConnection.js";

function getById() {
    let id = document.getElementById('client-id').value;

    fetch('http://localhost:3000/temp/' + id)
        .then(async response => {
            if (response.status !== 200) {
                console.log('bad response')
                return
            }
            let obj = JSON.parse(await response.text())
            displayClient(obj["wait"])

        })
}


function displayClient(time)
{
    let newEl = document.createElement('client-output')
    changeBody(newEl)
    document.getElementById('time-span').innerText = time
}

function displayForm()
{
    let newEl = document.createElement('id-form')
    changeBody(newEl)
}

function changeBody(newEl)
{
    let main = document.getElementById('main-body')
    main.innerHTML = ''
    main.appendChild(newEl)
}
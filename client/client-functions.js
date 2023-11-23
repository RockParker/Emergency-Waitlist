

function getById(id)
{
    console.log('calling server')
    //do the server call here
    fetch('http://localhost:3000/temp/'+id)
        .then(response =>
        {
            if(response.status !== 200)
            {
                //BAD SERVER RESPONSE
                console.log('bad response')
            }

            else
            {
                response.text().then(text=>{
                    let obj = JSON.parse(text)
                    let time = obj["wait-time"]
                    document.getElementById('time-span').innerText = time

                    document.getElementById('expandable-span').style.visibility = 'visibility: visible'
                })
            }
        })
}
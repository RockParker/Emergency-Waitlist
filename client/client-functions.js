function getById(id) {
    console.log('calling server')
    //do the server call here
    fetch('http://localhost:3000/temp/' + id)
        .then(async response => {
            console.log(response)
            if (response.status !== 200) {
                console.log('bad response')
                return
            }

            let obj = JSON.parse(await response.text())
            document.getElementById('time-span').innerText = obj['wait']
            document.getElementById('expandable-span').style.visibility = 'visible'


        })
}

class MyForm extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback()
    {
        this.innerHTML = `    
        <div id="centered-div">
            <p>Please Enter Your ID<br>or Patient Number: </p>
            <input class="my-input" id="client-id"/>
            <button class="my-button" onclick="getById()">Submit</button>
        </div>`
    }

}


class ClientOutput extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback()
    {
        this.innerHTML = `
        <div id="centered-div">
            <p>
            Your estimated wait time is: 
            <span id="time-span"></span> 
            minutes <br>
            How we calculate wait times:<br>
            </p>
            <button style="background: transparent;cursor:pointer;" onclick="displayForm()"><</button>
        </div>`
    }
}

customElements.define('id-form',MyForm)
customElements.define('client-output', ClientOutput)
function infoContent() {

    //just a string
    var content = `
    <div class="info" >
        <h2>Information</h2>
        <p >
            This js rendering is pretty neat. Were basically just calling
            a function when a linked is clicked. That function performs a
            'getElementById' to grab a certain dom element. Once found we fill it with "nothing"
            and then we do the same but instead we append a method like this one
            that is returning a dom element
        </p>
    </div>
    `;

    var ele = document.createElement("div"); //creates a dom element with div tags
    ele.innerHTML = content; //put that string from above in our ele div tagged dom element

    return ele; //return our element
}
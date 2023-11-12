function setError(name, bool, error) {
    var input = document.getElementById(name + '-div')

    input.className = 'input-div ' + (bool ? "false" : "")
    input.querySelector('p').textContent = error;
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()

    var form = document.forms['form'];
    var error = false

    for (var i = 0; i < 5; i++) {
        if (form.elements[i].value === '') {
            setError(form.elements[i].name, true,  "Can't be blank");
            error = true;
        }
        else
            setError(form.elements[i].name, false, "");
    }

    if (error)
        return false;

    console.log("CACA ")

    document.getElementById('form-card').className = 'form-card hidden'
    document.getElementById('thank-message').className = 'thank-message'

    document.getElementById('return').addEventListener('click', function(event) {
        event.preventDefault()

        document.getElementById('form-card').className = 'form-card'
        document.getElementById('thank-message').className = 'thank-message hidden'

    })
})
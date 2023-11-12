function displayNameCard(event) {
    var value = event.target.value

    if (value.length > 23)
        event.target.value = value.slice(0, 23);

    if (value.length === 0)
        document.getElementsByClassName('name-card-preview')[0].innerText = "Jane Appleseed";
    else 
        document.getElementsByClassName('name-card-preview')[0].innerText = event.target.value;

}

function displayNumberCard(number, text) {
    document.getElementsByClassName('number-' +  number)[0].innerText = text !== undefined ? text : '0000';
}

function parseNumber(number) {
    const chars = number.split('');
    var indexN = 0;

    const charsWithSlash = chars.map((char, index) => {
        indexN++;
        if (indexN === 4 && (index < chars.length - 1)) {
            indexN = 0;
            return char + ' '
        }
        return char
    })
    return charsWithSlash.join('');
}

function reformNumberCard(event) {
    var number = event.target.value

    number = parseNumber(number)

    number = number.replace(/\D/g, '');
    number = number.replace(/(\d{4})(?=\d)/g, '$1 ')
    event.target.value = number;

    const maxLength = 19;
    if (number.length > maxLength)
        event.target.value = number.slice(0, maxLength);

    numberSplited = number.split(' ');

    numberSplited.map((char, index) => {
        if (numberSplited.length !== 4){
            var sizeNumber = numberSplited.length;
            while (sizeNumber !== 4) {
                displayNumberCard(sizeNumber + 1, "0000");
                sizeNumber++;
            }
        }
        displayNumberCard(index + 1, char)
    })

    if (numberSplited[0] === '')
        displayNumberCard(1, "0000");
}

function displayMonthCard(event) {
    var value = event.target.value;

    value = value.replace(/\D/g, '');
    event.target.value = value

    if (value.length > 2)
        event.target.value = value.slice(0, 2);

    if (value.length === 0)
        document.getElementsByClassName('month-prev')[0].innerText = "00";
    else
        document.getElementsByClassName('month-prev')[0].innerText = event.target.value;
}

function displayYearCard(event) {
    var value = event.target.value;

    value = value.replace(/\D/g, '');
    event.target.value = value

    if (value.length > 2)
        event.target.value = value.slice(0, 2);

    if (value.length === 0)
        document.getElementsByClassName('year-prev')[0].innerText = "00";
    else
        document.getElementsByClassName('year-prev')[0].innerText = event.target.value;
}

function displayCvcCard(event) {
    var value = event.target.value;

    value = value.replace(/\D/g, '');
    event.target.value = value

    if (value.length > 3)
        event.target.value = value.slice(0, 3);

    if (value.length === 0)
        document.getElementsByClassName('cvc-card-preview')[0].innerText = '000';
    else
        document.getElementsByClassName('cvc-card-preview')[0].innerText = event.target.value;

}

document.getElementById('name').addEventListener('input', displayNameCard)
document.getElementById('number').addEventListener('input', reformNumberCard)
document.getElementById('date-month').addEventListener('input', displayMonthCard)
document.getElementById('date-year').addEventListener('input', displayYearCard)
document.getElementById('cvc').addEventListener('input', displayCvcCard)
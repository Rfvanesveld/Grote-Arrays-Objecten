const database = document.getElementById('DataBase');
const toelichting = document.getElementById("Toelichting")
const radioButtons = document.getElementById('RadioButtons');
const toelichting2 = document.getElementById("Toelichting2")

function removeDatabase() {
    toelichting.innerHTML = ''
    document.getElementById("DataBase").innerHTML = "";
}

function removeExtraRadioButtons() {
    toelichting.innerHTML = ''
    document.getElementById("RadioButtons").innerHTML = "";
}
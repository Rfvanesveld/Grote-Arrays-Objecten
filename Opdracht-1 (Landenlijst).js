document.getElementById("opdracht1").addEventListener('click', showLandenLijst)

function showLandenLijst() {
    removeDatabase()
    removeExtraRadioButtons()
    const getCountries = randomPersonData.map(element => element.region)
    const noDoubles = [... new Set(getCountries)]
    noDoubles.forEach(result => {
        toelichting.innerHTML = "De Landenlijst"
        li = document.createElement("li")

        li.innerHTML = result

        database.appendChild(li)

    })
}





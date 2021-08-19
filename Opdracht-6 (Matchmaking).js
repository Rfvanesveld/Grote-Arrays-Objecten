const getHoroscopeFromBirthDate = birthdate => {
    if (birthdate >= '01/21' && birthdate <= '02/19') {
        return 'Waterman';
    }
    if (birthdate >= '02/20' && birthdate <= '03/20') {
        return 'Vissen';
    }
    if (birthdate >= '03/21' && birthdate <= '04/20') {
        return 'Ram';
    }
    if (birthdate >= '04/21' && birthdate <= '05/20') {
        return 'Stier';
    }
    if (birthdate >= '05/21' && birthdate <= '06/21') {
        return 'Tweelingen';
    }
    if (birthdate >= '06/22' && birthdate <= '07/22') {
        return 'Kreeft';
    }
    if (birthdate >= '07/23' && birthdate <= '08/23') {
        return 'Leeuw';
    }
    if (birthdate >= '08/24' && birthdate <= '09/22') {
        return 'Maagd';
    }
    if (birthdate >= '09/23' && birthdate <= '10/23') {
        return 'Weegschaal';
    }
    if (birthdate >= '10/24' && birthdate <= '11/22') {
        return 'Schorpioen';
    }
    if (birthdate >= '11/23' && birthdate <= '12/21') {
        return 'Boogschutter';
    }
    return 'Steenbok';

}

document.getElementById("opdracht6").addEventListener('click', showMatchMaking)

let allPersons = randomPersonData.filter(result => result)
let birthday = allPersons.filter(result => result.birthday.mdy)
let horoscope = getHoroscopeFromBirthDate.filter(result => result.birthday.mdy.substring(0, 5))


function showMatchMaking() {
    removeDatabase()
    removeExtraRadioButtons()
    toelichting.innerHTML = "Match Making"
    allPersons.forEach(result => {

        fullName = document.createElement("div")
        fullName.innerText = (result.name + "  " + result.surname)
        database.appendChild(fullName)

        country = document.createElement("li")
        country.innerText = ("is from: " + result.region)
        database.appendChild(country)

        photo = document.createElement("img")
        photo.src = (result.photo)
        database.appendChild(photo)

        age = document.createElement("li")
        age.innerHTML = ("is " + result.age + " years old")
        database.appendChild(age)

        birthday = document.createElement("li")
        birthday.innerHTML = ("his/her birthday is:  " + result.birthday.mdy)
        database.appendChild(birthday)


        // Het sterrenbeeld selecteren lukt gewoon niet, ik laat hem gaan....

        // sterrenbeeld = document.createElement("li")
        // sterrenbeeld.innerHTML = ("his/her starsign is: ")
        // database.appendChild(sterrenbeeld)

        // Het matchen is voor nu gewoon niet te doen, ik laat hem gaan

        // button = document.createElement("button")
        // button.innerHTML = ("Click this button to see matches for this person")
        // database.appendChild(button)

        emptyLine = document.createElement("div")
        emptyLine.innerText = "======================"
        database.appendChild(emptyLine)

    })
}
















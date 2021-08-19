// const log = console.log
document.getElementById("opdracht2").addEventListener('click', showSteenbokVrouwen);

function showSteenbokVrouwen() {
    removeDatabase()
    removeExtraRadioButtons()
    toelichting.innerHTML = "De Steenbok Vrouwen";
    zoekVrouwen = randomPersonData.filter(result => result.gender == 'female')
    zoek30PlusVrouwen = zoekVrouwen.filter(result => result.age >= 30)
    zoekSteenbokVrouwen = zoek30PlusVrouwen.filter(result => result.birthday.dmy.split("/")[0] >= "22" && result.birthday.dmy.split("/")[1] == "12" || (result.birthday.dmy.split("/")[0] <= "19" && result.birthday.dmy.split("/")[1] == "01"))

    zoekSteenbokVrouwen.forEach(result => {

        nameLi = document.createElement("div");
        surnameLi = document.createElement("div");
        photo = document.createElement("img");
        // li = document.createElement("li");

        nameLi.innerHTML = (result.name);
        surnameLi.innerHTML = (result.surname);
        photo.src = (result.photo);
        // li.innerHTML = (result);

        database.appendChild(nameLi);
        database.appendChild(surnameLi);
        database.appendChild(photo);
        // database.appendChild(li);
    });
};


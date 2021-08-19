document.getElementById("opdracht4").addEventListener('click', showTheMostPeople);

let = log = console.log
const getCountries = randomPersonData.map(element => element.region)
const noDoubles = [... new Set(getCountries)]


let numberOfCountries = []
let nieuweArray = noDoubles.forEach(country => {

    let personsFromOneCountry = randomPersonData.filter(persons => persons.region == country);

    numberOfCountries.push(country + " has " + personsFromOneCountry.length + " person(s) on the list..")
})
let sortedCountries = numberOfCountries.sort((a, b) => (parseFloat(a.split(" ")[1] > parseFloat(b.split(" ")[1])) ? -1 : 1));

function showTheMostPeople() {
    removeDatabase()
    removeExtraRadioButtons()
    toelichting.innerHTML = "De Meeste Mensen";
    sortedCountries.forEach(result => {

        sortedCountries1 = document.createElement("div");
        emptyLine = document.createElement("div");

        sortedCountries1.innerHTML = (result);
        emptyLine.innerHTML = ("---------------------------------");

        database.appendChild(sortedCountries1);
        database.appendChild(emptyLine)

    });
};


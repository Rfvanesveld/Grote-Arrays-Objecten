const log = console.log

document.getElementById("opdracht5").addEventListener('click', showButtons)

const getFrance = randomPersonData.filter(result => result.region === "France")
const getFranceAges = getFrance.map(result => result.age)
const getFranceTotalAge = getFranceAges.reduce((a, b) => a + b)

const getNumberOfPersonsInFrance = getFrance.length
const getFranceAverageAge = Math.round(getFranceTotalAge / getNumberOfPersonsInFrance)

// log(getFranceAverageAge)

const getSlovakia = randomPersonData.filter(result => result.region === "Slovakia")
const getSlovakiaAges = getSlovakia.map(result => result.age)
const getSlovakiaTotalAge = getSlovakiaAges.reduce((a, b) => a + b)

const getNumberOfPersonsInSlovakia = getSlovakia.length
const getSlovakiaAverageAge = Math.round(getSlovakiaTotalAge / getNumberOfPersonsInSlovakia)

// log(getSlovakiaAverageAge)

const getColombia = randomPersonData.filter(result => result.region === "Colombia")
const getColombiaAges = getColombia.map(result => result.age)
const getColombiaTotalAge = getColombiaAges.reduce((a, b) => a + b)

const getNumberOfPersonsInColombia = getColombia.length
const getColombiaAverageAge = Math.round(getColombiaTotalAge / getNumberOfPersonsInColombia)

// log(getColombiaAverageAge)

function showButtons() {
    removeDatabase()

    const franceButton =
        `<li><input type="radio" id="opdracht7" name="filter" value="opdracht7"></input>
            <label for="opdracht7"> FRANKRIJK</label></li>`;

    const slovakiaButton =
        `<li><input type="radio" id="opdracht8" name="filter" value="opdracht8"></input>
         <label for="opdracht8"> SLOVAKIA</label></li>`;

    const colombiaButton =
        `<li><input type="radio" id="opdracht9" name="filter" value="opdracht9"></input>
         <label for="opdracht9"> COLOMBIA</label></li>`;

    const radioButtons = document.getElementById('RadioButtons');
    radioButtons.innerHTML = franceButton + slovakiaButton + colombiaButton;

    document.getElementById("opdracht7").addEventListener('click', showTheAverageAgeInFrance);
    document.getElementById("opdracht8").addEventListener('click', showTheAverageAgeInSlovakia);
    document.getElementById("opdracht9").addEventListener('click', showTheAverageAgeInColombia);

};

function showTheAverageAgeInFrance() {
    removeDatabase()

    toelichting.innerHTML = "De gemiddelde leeftijd in Frankrijk is: ";

    franceAverageAge = document.createElement("div");
    emptyLine = document.createElement("div");

    franceAverageAge.innerHTML = (getFranceAverageAge);
    emptyLine.innerHTML = ("");

    database.appendChild(franceAverageAge)
    database.appendChild(emptyLine);
};

function showTheAverageAgeInSlovakia() {
    removeDatabase()

    toelichting.innerHTML = "De gemiddelde leeftijd in Slovakia is:";

    slovakiaAverageAge = document.createElement("div");
    emptyLine = document.createElement("div");

    slovakiaAverageAge.innerHTML = (getSlovakiaAverageAge);
    emptyLine.innerHTML = ("");

    database.appendChild(slovakiaAverageAge)
    database.appendChild(emptyLine);
};

function showTheAverageAgeInColombia() {
    removeDatabase()

    toelichting.innerHTML = "De gemiddelde leeftijd in Colombia is:";
    colombiaAverageAge = document.createElement("div");
    emptyLine = document.createElement("div");

    colombiaAverageAge.innerHTML = (getColombiaAverageAge);
    emptyLine.innerHTML = ("");

    database.appendChild(colombiaAverageAge)
    database.appendChild(emptyLine);

    ;
};

// ALTERNATIEVE METHODE

// function showButtons() {
//     removeDatabase()

//     france = document.createElement("input");
//     france.setAttribute("type", "radio")
//     france.setAttribute("name", "filter")
//     france.setAttribute("value", "opdracht7")
//     slovakia.id = ("opdracht7")

//     franceLable = document.createElement("lable");
//     franceText = document.createTextNode("FRANCE")

//     franceLable.appendChild(franceText)
//     radioButtons.appendChild(france)
//     radioButtons.appendChild(franceLable)

//     slovakia = document.createElement("input");
//     slovakia.setAttribute("type", "radio")
//     slovakia.setAttribute("name", "filter")
//     slovakia.setAttribute("value", "opdracht8")
//     slovakia.id = ("opdracht8")

//     slovakiaLable = document.createElement("lable");
//     slovakiaText = document.createTextNode("SLOVAKIA")

//     slovakiaLable.appendChild(slovakiaText)
//     radioButtons.appendChild(slovakia)
//     radioButtons.appendChild(slovakiaLable)

//     colombia = document.createElement("input");
//     colombia.setAttribute("type", "radio")
//     colombia.setAttribute("name", "filter")
//     colombia.setAttribute("value", "opdracht9")

//     colombia.id = ("opdracht9")
//     colombiaLable = document.createElement("lable");
//     colombiaText = document.createTextNode("COLOMBIA")

//     colombiaLable.appendChild(colombiaText)
//     radioButtons.appendChild(colombia)
//     radioButtons.appendChild(colombiaLable)

//     document.getElementById("opdracht7").addEventListener('click', showTheAverageAgeInFrance);
//     document.getElementById("opdracht8").addEventListener('click', showTheAverageAgeInSlovakia);
//     document.getElementById("opdracht9").addEventListener('click', showTheAverageAgeInColombia);

// };
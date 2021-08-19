document.getElementById("opdracht3").addEventListener('click', showOudeCreditcards);

let = log = console.log
let year = new Date().getFullYear();
let nextYear = new Date().getFullYear() + 1 - "2000";

function showOudeCreditcards() {
    removeDatabase()
    removeExtraRadioButtons()
    toelichting.innerHTML = "De Oude CreditCards";

    zoekCreditcards = randomPersonData.filter(result => result.credit_card)
    ccHoldersAdults = zoekCreditcards.filter(result => result.age >= 18)
    ccExpirationUpcomingYear = ccHoldersAdults.filter(result => result.credit_card.expiration.split("/")[1] == year || (result.credit_card.expiration.split("/")[1] == nextYear))
    sortedExperiationCreditcards = ccExpirationUpcomingYear.sort((a, b) => parseFloat(a.credit_card.expiration) - parseFloat(b.credit_card.expiration))

    ccExpirationUpcomingYear.forEach(result => {

        nameLi = document.createElement("div");
        surnameLi = document.createElement("div");
        phoneLi = document.createElement("li");
        ccNumberLi = document.createElement("li");
        ccNumberLi = document.createElement("li");
        ccExpiration = document.createElement("li");
        emptyLine = document.createElement("li");

        nameLi.innerHTML = (result.name);
        surnameLi.innerHTML = (result.surname);
        phoneLi.innerHTML = ("Phone nr: " + result.phone);
        ccNumberLi.innerHTML = ("CC nr: " + result.credit_card.number);
        ccExpiration.innerHTML = ("Experiration date: " + result.credit_card.expiration);
        emptyLine.innerHTML = ("-----------------------------------");

        database.appendChild(nameLi);
        database.appendChild(surnameLi);
        database.appendChild(phoneLi);
        database.appendChild(ccNumberLi);
        database.appendChild(ccExpiration);
        database.appendChild(emptyLine);
    });
};
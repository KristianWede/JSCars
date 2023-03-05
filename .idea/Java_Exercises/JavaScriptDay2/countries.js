document.getElementById("svg2").onclick = getDetailsOnCountry;


const URL = "https://countries.plaul.dk/api/countries/";

function getDetailsOnCountry(event){
    const target = event.target;
    const id = target.id;

    fetch(URL+id)
    .then(res => res.json())
    .then(data => {

        const countryName = data.name.common;
        document.getElementById("name").innerText = countryName;

        let memberOfUN = data.unMember;
    
        if(memberOfUN){
            memberOfUN = "Yes";
        } else {
            memberOfUN = "No";
        }
        document.getElementById("un-member").innerText = memberOfUN;

        let currencies = Object.entries(data.currencies);

        currencies = currencies.map((currency) => currency[1].name)
        
        document.getElementById("currencies").innerText = currencies;

        const capital = data.capital;
        document.getElementById("capital").innerText = capital;

        const borders = data.borders;
        document.getElementById("borders").innerText = borders;
        
        
    })
}
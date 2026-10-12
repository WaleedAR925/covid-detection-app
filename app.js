const baseURL = "https://disease.sh/v3/covid-19/countries";

let countryDropdown = document.querySelectorAll(".dropdown select");
let selectCountry = document.querySelector("select"); 
let img  = document.querySelector("img");
let btn = document.querySelector("button");
let confmCases = document.querySelector(".confirm"); 
let deaths = document.querySelector(".death");;
let recovered = document.querySelector(".recover");
let countryInfo = document.querySelector("h2");
for (let select of countryDropdown){
    for (let countryName in countryList){
        let newOption = document.createElement("option");
        newOption.innerText= countryName;
        newOption.value = countryName;
        select.append(newOption);
    
}
select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);

})
}
const updateFlag=(element)=>{
    let countryName = element.value;
    let countryCode = countryList[countryName];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    img.src = newSrc;

}
async function getData(){
    let countryName = selectCountry.value;
    let countryCode = countryList[countryName];
    
    let url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    let response = await fetch(url);
    let data = await response.json();
    confmCases.innerText = data.cases;
    deaths.innerText = data.deaths;
    recovered.innerText = data.recovered;
    countryInfo.innerText = data.country;
       
}

btn.addEventListener("click", ()=>{
    
    getData();
})

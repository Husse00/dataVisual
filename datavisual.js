let root = document.getElementById("root")
let data = document.getElementById("data")
let divAttribute = document.getElementById("divAttribute")
// CREATING PARAGRAPHS TO STORE THE FECTHED DATA IN.

let tilltalsnamn = document.createElement("p"); tilltalsnamn.classList.add("data")
let efternamn = document.createElement("p"); efternamn.classList.add("data")
let fdatum = document.createElement("p"); fdatum.classList.add("data")




// FETCHING THE DATA
fetch('data.json').then(function (response){
return response.json();

}).then(function(obj){
   
    console.log(obj.attribut)

tilltalsnamn.innerHTML +=  `Tilltalsnamn: ${obj.attribut.tilltalsnamn}` ;
efternamn.innerHTML += `Efternamn: ${obj.attribut.efternamn}`;
fdatum.innerHTML += `Födelsedatum: ${obj.attribut.födelsedatum}`;


` Efternamn: ${obj.attribut.efternamn}`,
` 
    Födelsedatum: ${obj.attribut.födelsedatum} --
    folkbokförinsadress: ${obj.attribut.folkbokförinsAdress} --
    särskild postadress: ${obj.attribut.särskildpostAdress} --
    E-postadress Arbetet: ${obj.attribut.EpostadressaArbetet} --
   `;


  
    data.append(tilltalsnamn,efternamn,fdatum)
    
  
}).catch(function(err){

    console.log(err + "404")
})
data.style.display = "none"
divAttribute.addEventListener('click', ()=>{
    if(data.style.display == 'none'){
        data.style.display = 'block';
    } else {
        data.style.display = 'none'
    }
})

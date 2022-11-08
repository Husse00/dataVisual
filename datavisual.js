let root = document.getElementById("root")
let data = document.getElementById("data")
let divAttribute = document.getElementById("divAttribute")
// CREATING PARAGRAPHS TO STORE THE FECTHED DATA IN.

let tilltalsnamn = document.createElement("p"); tilltalsnamn.classList.add("data")
let efternamn = document.createElement("p"); efternamn.classList.add("data")
let fdatum = document.createElement("p"); fdatum.classList.add("data")
let folkbokförinsAdress = document.createElement("p"); folkbokförinsAdress.classList.add("data")
let särskildpostAdress = document.createElement("p"); särskildpostAdress.classList.add("data")
let EpostadressaArbetet = document.createElement("p"); EpostadressaArbetet.classList.add("data")
let län = document.createElement("p"); län.classList.add("data")
let kommun = document.createElement("P"); kommun.classList.add("data");
let kod = document.createElement("p"); kod.classList.add("data");
let TypAvMedarbetare = document.createElement("p"); TypAvMedarbetare.classList.add("data")
let organisationstillhöriget = document.createElement("p"); organisationstillhöriget.classList.add("data")
let organisatoriskEnhetstillhöriget = document.createElement("p"); organisatoriskEnhetstillhöriget.classList.add("data")
let Titel = document.createElement("p"); Titel.classList.add("data")
let Anställningsform = document.createElement("p"); Anställningsform.classList.add("data")
let Etikett = document.createElement("p"); Etikett.classList.add("data")


// FETCHING THE DATA
fetch('data.json').then(function (response){
return response.json();

}).then(function(obj){
   
    console.log(obj.attribut)

tilltalsnamn.innerHTML +=  `Tilltalsnamn: ${obj.attribut.tilltalsnamn}` ;
efternamn.innerHTML += `Efternamn: ${obj.attribut.efternamn}`;
fdatum.innerHTML += `Födelsedatum: ${obj.attribut.födelsedatum}`;
folkbokförinsAdress.innerHTML += "Folkbokförings Adress: " + obj.attribut.folkbokförinsAdress 
särskildpostAdress.innerHTML += `Särskild post-Adress: ${obj.attribut.särskildpostAdress}`
EpostadressaArbetet.innerHTML += `Epostadress Arbetet: ${obj.attribut.EpostadressaArbetet}`
län.innerHTML += "Län: " + obj.attribut.län
kommun.innerHTML += "Kommun: " + obj.attribut.kommun
kod.innerHTML += "Kod: " + obj.attribut.kod
TypAvMedarbetare.innerHTML += "Typ Av Medarbetare: " + obj.attribut.TypAvMedarbetare
organisationstillhöriget.innerHTML += "organisations tillhöriget: " + obj.attribut.organisationstillhöriget
organisatoriskEnhetstillhöriget.innerHTML += "organisatorisk Enhetstillhöriget: " + obj.attribut.organisatoriskEnhetstillhöriget
Titel.innerHTML += "Titel: " + obj.attribut.Titel
Anställningsform.innerHTML += "Anställningsform: " + obj.attribut.Anställningsform
Etikett.innerHTML += "Etikett: " + obj.attribut.Etikett
  
data.append(tilltalsnamn,efternamn,fdatum,folkbokförinsAdress,särskildpostAdress,EpostadressaArbetet,län,kommun,kod,TypAvMedarbetare,
organisationstillhöriget,organisatoriskEnhetstillhöriget,Titel,Anställningsform,Etikett)
    
  
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

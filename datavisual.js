let root = document.getElementById("root")
let data = document.createElement("div")
data.classList.add("data")
fetch('data.json').then(function (response){
return response.json();

}).then(function(obj){
   
    console.log(obj.attribut)
    data.innerHTML +=
    `Tilltalsnamn: ${obj.attribut.tilltalsnamn} --
    Efternamn: ${obj.attribut.efternamn} --
    Födelsedatum: ${obj.attribut.födelsedatum} --
    folkbokförinsadress: ${obj.attribut.folkbokförinsAdress} --
    särskild postadress: ${obj.attribut.särskildpostAdress} --
    E-postadress Arbetet: ${obj.attribut.EpostadressaArbetet} --
    Län: ${obj.attribut.län}`


    root.append(data)
    
  
}).catch(function(err){

    console.log(err + "404")
})
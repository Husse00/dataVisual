let root = document.getElementById("root")
let data = document.getElementById("data")
let divAttribute = document.getElementById("divAttribute")
let dataInfo = document.getElementById("dataDisplayId")
let infoBtn1 = document.querySelector(".infoBtn1") 
let infoBtn2 = document.querySelector(".infoBtn2") 
let closeBtn = document.querySelector(".exitImg") 
let p = document.querySelector(".dataP")

//// importing data info card from the html
let synonym = document.getElementById("data1"); synonym.innerHTML = "";
let attributENG = document.getElementById("data2"); attributENG.innerHTML = "";
let attributMap = document.getElementById("data3"); attributMap.innerHTML = "";
let källsystem = document.getElementById("data4"); källsystem.innerHTML = "";
let syfte = document.getElementById("data5"); syfte.innerHTML = "";
let def = document.getElementById("data6"); def.innerHTML = "";
let kommentar = document.getElementById("data7"); kommentar.innerHTML = "";
let källa = document.getElementById("data8"); källa.innerHTML = "";
let syntax = document.getElementById("data9"); syntax.innerHTML = "";
let tecken = document.getElementById("data10"); tecken.innerHTML = "";
let kodverk = document.getElementById("data11"); kodverk.innerHTML = "";
let exData = document.getElementById("data12"); exData.innerHTML = "";



data.style.display = "none"
divAttribute.addEventListener('click', ()=>{
    if(data.style.display == 'none'){
        data.style.display = 'block';

    } else {
        data.style.display = 'none'
        dataInfo.style.display = "none"
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#3c0580"
    }
})

dataInfo.style.display = "none"
infoBtn1.addEventListener('click', ()=>{

    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Personnummer"
        synonym.innerHTML = "HELLO"
        attributENG.innerHTML = ""
        infoBtn1.style.backgroundColor = "#b41083"
        infoBtn2.style.backgroundColor = "#3c0580"
    } 
    else {
        dataInfo.style.display = "none"
        infoBtn1.style.backgroundColor = "#3c0580"
    }


})
infoBtn2.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Sammordningsnummer"
        synonym.innerHTML = "BYE"
        attributENG.innerHTML = "123"
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#b41083"
    } 
    else{
        dataInfo.style.display = "none"
        infoBtn2.style.backgroundColor = "#3c0580"
        
    }

})


// data pop-up close Btn events, removes the popup and the pink highlight colour on the button.
closeBtn.addEventListener('click', ()=>{
dataInfo.style.display = "none"
infoBtn1.style.backgroundColor = "#3c0580"
infoBtn2.style.backgroundColor = "#3c0580"
})


let root = document.getElementById("root")
let data = document.getElementById("data")
let divAttribute = document.getElementById("divAttribute")
let dataInfo = document.getElementById("dataDisplayId")
let infoBtn1 = document.querySelector(".infoBtn1") 
let infoBtn2 = document.querySelector(".infoBtn2") 
let infoBtn3 = document.querySelector(".infoBtn3") 
let infoBtn4 = document.querySelector(".infoBtn4")
let infoBtn5 = document.querySelector(".infoBtn5")
let infoBtn6 = document.querySelector(".infoBtn6") 
let closeBtn = document.querySelector(".exitImg") 
let infoLogo = document.querySelector(".idImg")
let p = document.querySelector(".dataP")
let dataDiv1 = document.querySelector(".dataDiv1")
let dataDiv2 = document.querySelector(".dataDiv2")
p.classList.add("dataParagraph")
let underline = document.getElementById("underline1")
underline.classList.add("line")
infoLogo.classList.add("dropdown")
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
        dataDiv1.style.backgroundColor = "rgb(180, 16, 131)"
    } else {
        data.style.display = 'none'
        dataInfo.style.display = "none"
        dataDiv1.style.backgroundColor = "rgb(36, 206, 172)"
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#3c0580"
        infoBtn3.style.backgroundColor = "#3c0580"
        infoBtn4.style.backgroundColor = "#3c0580"
        infoBtn5.style.backgroundColor = "#3c0580"
        infoBtn6.style.backgroundColor = "#3c0580"
    }
})

dataInfo.style.display = "none"

// INFO BUTTON 1 - personnummer

infoBtn1.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Personnummer"
        // inside data
        synonym.innerHTML = ""
        attributENG.innerHTML = "Social Security Number"
        attributMap.innerHTML = `SAMBI | INERA <br></br>` + `<p class="sambi"> Personal <br></br> identity <br></br>Number </p>`
        källsystem.innerHTML = "personuppgiftstjänsten"
        syfte.innerHTML = "Identifiering av användare"
        def.innerHTML = "Personer som är folkbokförda i Sverige får ett personnummer som identitetsbeteckning. Denna fås från Skatteverket och består av födelsetid, födelsenummer och kontrollsiffra."
        kommentar.innerHTML = ""
        källa.innerHTML = "Skatteverket"
        syntax.innerHTML = "ÅÅÅÅMMDDNNNK (navet)"
        tecken.innerHTML = "12"
        kodverk.innerHTML = ""
        exData.innerHTML = `198601014528 <br></br> (kvinna) <br></br> 198601016556 <br></br> (man)`
        /////////////////////////////////////////////////////////////////////////////////
        /////// changing colors of the selected button (1)
        infoBtn1.style.backgroundColor = "#b41083"

        // changing buttons of the UNselected buttons
        infoBtn2.style.backgroundColor = "#3c0580"
        infoBtn3.style.backgroundColor = "#3c0580"
        infoBtn4.style.backgroundColor = "#3c0580"
        infoBtn5.style.backgroundColor = "#3c0580"
        infoBtn6.style.backgroundColor = "#3c0580"
       
        underline.classList.add("line")
    } 
    else {
        dataInfo.style.display = "none"
        infoBtn1.style.backgroundColor = "#3c0580"
    }


})
// INFO BUTTON 2 - sammordningsnummer
infoBtn2.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Sammordningsnummer"
         // inside data
         synonym.innerHTML = ""
         attributENG.innerHTML = "Co-Ordination Number"
         attributMap.innerHTML = `SAMBI | INERA <br></br>`  + `<p class="sambi"> Personal <br></br> identity <br></br>Number </p>`
         källsystem.innerHTML = "Personuppgiftstjänsten"
         syfte.innerHTML = "Identifiering av användare"
         def.innerHTML = "Är en en identitetsbeteckning för en person som inte är eller har varit folkbokförd i Sverige"
         kommentar.innerHTML = ""
         källa.innerHTML = "Skatteverket"
         syntax.innerHTML = "ÅÅÅÅMMDDNNNK där MM = 00 - 12, DD = 60 - 91"
         tecken.innerHTML = ""
         kodverk.innerHTML = ""
         exData.innerHTML = `19700161XXXX`
         /////////////////////////////////////////////////////////////////////////////////
         // changing colors of the selected button (2)
         infoBtn2.style.backgroundColor = "#b41083"

        /////// changing buttons of the UNselected buttons
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn3.style.backgroundColor = "#3c0580"
        infoBtn4.style.backgroundColor = "#3c0580"
        infoBtn5.style.backgroundColor = "#3c0580"
        infoBtn6.style.backgroundColor = "#3c0580"

        underline.classList.add("line")
    } 
    else{
        dataInfo.style.display = "none"
        infoBtn2.style.backgroundColor = "#3c0580"

       
    }

})
//// INFO BUTTON 3 - Tilltalsman
infoBtn3.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Tilltalsnamn"
         // inside data
         synonym.innerHTML = "Namn"
         attributENG.innerHTML = "Given Name"
         attributMap.innerHTML = `SAMBI | INERA <br></br>`
         källsystem.innerHTML = ""
         syfte.innerHTML = ""
         def.innerHTML = "Personens tilltalsnamn i klartext"
         kommentar.innerHTML = ""
         källa.innerHTML = ""
         syntax.innerHTML = ""
         tecken.innerHTML = ""
         kodverk.innerHTML = ""
         exData.innerHTML = ``
         /////////////////////////////////////////////////////////////////////////////////
         /////// changing colors of the selected button (3)
        infoBtn3.style.backgroundColor = "#b41083"
        
        /////// changing buttons of the UN-selected buttons
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#3c0580"
        infoBtn4.style.backgroundColor = "#3c0580"
        infoBtn5.style.backgroundColor = "#3c0580"
        infoBtn6.style.backgroundColor = "#3c0580"
        underline.classList.add("line")
    } 
    else{
        dataInfo.style.display = "none"
        infoBtn3.style.backgroundColor = "#3c0580"

       
    }

})
infoBtn4.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Efternamn"
         // inside data
         synonym.innerHTML = "Efternamn"
         attributENG.innerHTML = "Last Name"
         attributMap.innerHTML = `SAMBI | INERA <br></br>`  + `<p class="sambi"> Surname </p>`
         källsystem.innerHTML = "Personuppgiftstjänsten"
         syfte.innerHTML = ""
         def.innerHTML = "namn som anger släkt- eller familjetillhörighet"
         kommentar.innerHTML = ""
         källa.innerHTML = "Socialstyrelsen"
         syntax.innerHTML = "1 - max antal tecken, Kan innehålla ’/’. Kan innehålla dubbla efternamn from 170701 $ "
         tecken.innerHTML = "60"
         kodverk.innerHTML = ""
         exData.innerHTML = `van Basten Karlsson, Andersson, Larsson-Nilsson`
         /////////////////////////////////////////////////////////////////////////////////
         /////// changing colors of the selected button (3)
        infoBtn4.style.backgroundColor = "#b41083"
        
        /////// changing buttons of the UN-selected buttons
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#3c0580"
        infoBtn3.style.backgroundColor = "#3c0580"
        infoBtn5.style.backgroundColor = "#3c0580"
        infoBtn6.style.backgroundColor = "#3c0580"
        underline.classList.add("line")
    } 
    else{
        dataInfo.style.display = "none"
        infoBtn4.style.backgroundColor = "#3c0580"

       
    }

})
infoBtn5.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Födelsedatum"
         // inside data
         synonym.innerHTML = ""
         attributENG.innerHTML = "Date Of Birth"
         attributMap.innerHTML = ``
         källsystem.innerHTML = "Personuppgiftstjänsten"
         syfte.innerHTML = ""
         def.innerHTML = "Datum då personen föddes"
         kommentar.innerHTML = "Relevant när person inte har personnummer"
         källa.innerHTML = ""
         syntax.innerHTML = "Tre varianter av datum: ÅÅÅÅ, ÅÅÅÅMM, ÅÅÅÅMMDD"
         tecken.innerHTML = ""
         kodverk.innerHTML = ""
         exData.innerHTML = ``
         /////////////////////////////////////////////////////////////////////////////////
         /////// changing colors of the selected button (3)
        infoBtn5.style.backgroundColor = "#b41083"
        
        /////// changing buttons of the UN-selected buttons
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#3c0580"
        infoBtn3.style.backgroundColor = "#3c0580"
        infoBtn4.style.backgroundColor = "#3c0580"
        infoBtn6.style.backgroundColor = "#3c0580"
        underline.classList.add("line")
    } 
    else{
        dataInfo.style.display = "none"
        infoBtn5.style.backgroundColor = "#3c0580"

       
    }

})
infoBtn6.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "Folkbokförings-Address"
         // inside data
         synonym.innerHTML = ""
         attributENG.innerHTML = "Registration Address"
         attributMap.innerHTML = ``
         källsystem.innerHTML = "Personuppgiftstjänsten"
         syfte.innerHTML = ""
         def.innerHTML = `<p class="pdef">Folkbokföringsadress är adressen till en persons folkbokföringsfastighet (bostadsadress). Adressen är uppbyggd enligt svensk standard SS 61 34 01. Uppgifterna gäller enbart för uppgifter som kommer från Skatteverket (i praktiken personer med PNR/SNR). </p>`
         kommentar.innerHTML = ""
         källa.innerHTML = "Personuppgift-tjänsten"
         syntax.innerHTML = "utdelningsadress1, utdelningsadress2, careOf, postnummer, postort"
         tecken.innerHTML = ""
         kodverk.innerHTML = ""
         exData.innerHTML = ``
         /////////////////////////////////////////////////////////////////////////////////
         /////// changing colors of the selected button (3)
        infoBtn6.style.backgroundColor = "#b41083"
        
        /////// changing buttons of the UN-selected buttons
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#3c0580"
        infoBtn3.style.backgroundColor = "#3c0580"
        infoBtn4.style.backgroundColor = "#3c0580"
        infoBtn5.style.backgroundColor = "#3c0580"
        underline.classList.add("line")
    } 
    else{
        dataInfo.style.display = "none"
        infoBtn6.style.backgroundColor = "#3c0580"

       
    }

})
// data pop-up close Btn events, removes the popup and the pink highlight colour on the button.
closeBtn.addEventListener('click', ()=>{
dataInfo.style.display = "none"
infoBtn1.style.backgroundColor = "#3c0580"
infoBtn2.style.backgroundColor = "#3c0580"
infoBtn3.style.backgroundColor = "#3c0580"
infoBtn4.style.backgroundColor = "#3c0580"
infoBtn5.style.backgroundColor = "#3c0580"
infoBtn6.style.backgroundColor = "#3c0580"
})
/////////////



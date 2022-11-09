let root = document.getElementById("root")
let data = document.getElementById("data")
let divAttribute = document.getElementById("divAttribute")
let dataInfo = document.getElementById("dataDisplayId")
let infoBtn1 = document.querySelector(".infoBtn1") 
let infoBtn2 = document.querySelector(".infoBtn2") 
let p = document.createElement("p")
dataInfo.append(p)
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
        p.innerHTML = "hello world"
        infoBtn1.style.backgroundColor = "#b41083"
        infoBtn2.style.backgroundColor = "#3c0580"
    } else {
        dataInfo.style.display = "none"
        infoBtn1.style.backgroundColor = "#3c0580"
    }


})
infoBtn2.addEventListener('click', ()=>{
    if(dataInfo.style.display == 'none' || dataInfo.style.display == 'block')
    {
        dataInfo.style.display = "block"
        p.innerHTML = "bye world"
        infoBtn1.style.backgroundColor = "#3c0580"
        infoBtn2.style.backgroundColor = "#b41083"
    } else{
        dataInfo.style.display = "none"
        infoBtn2.style.backgroundColor = "#3c0580"
    }

})
dataInfo.addEventListener('click', ()=>{
dataInfo.style.display = "none"

})


let root = document.getElementById("root")
let data = document.getElementById("data")
let divAttribute = document.getElementById("divAttribute")
let dataInfo = document.getElementById("dataDisplayId")
let infoBtn = document.getElementById("infoBtn") 

data.style.display = "none"
divAttribute.addEventListener('click', ()=>{
    if(data.style.display == 'none'){
        data.style.display = 'block';
    } else {
        data.style.display = 'none'
        dataInfo.style.display = "none"
    }
})

dataInfo.style.display = "none"
infoBtn.addEventListener('click', ()=>{

if(dataInfo.style.display == 'none')
{
    dataInfo.style.display = "block"
    infoBtn.style.backgroundColor = "#b41083"
} else {
    dataInfo.style.display = "none"
    infoBtn.style.backgroundColor = "#3c0580"
}

})
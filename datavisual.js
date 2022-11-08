let root = document.getElementById("root")
let data = document.getElementById("data")
let divAttribute = document.getElementById("divAttribute")
// CREATING PARAGRAPHS TO STORE THE FECTHED DATA IN.

let personnummer = 


data.style.display = "none"
divAttribute.addEventListener('click', ()=>{
    if(data.style.display == 'none'){
        data.style.display = 'block';
    } else {
        data.style.display = 'none'
    }
})

let root = document.getElementById("root")

fetch('data.json').then(function (response){
return response.json();

}).then(function(obj){
    console.log(obj)
  
}).catch(function(error){

    console.log(error + "404")
})

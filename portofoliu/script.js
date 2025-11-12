// Cache the DOM
var button = document.getElementById("button")


var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var experiente = document.getElementById("experiente")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")
const d = new Date()
var year = d.getFullYear()

// Add event listener to button
button.addEventListener("click",altaViata)
an.addEventListener("mouseover",displayAge)


// Define function
function altaViata() {
          nume.innerHTML= "Software Engineer"     
          prenume.innerHTML= "Presedinte"    
          experiente.innerHTML="Experiente<ul><li>Am terminat ETTI</li><li>Am lucrat la Bosch</li></ul>"
          
          body.style.backgroundImage = "url('imagini/casaalba.jpg')"
          body.style.backgroundSize = "cover"
          body.style.backgroundRepeat = "no-repeat"
          body.style.backgroundPosition ="center"
          body.style.backgroundAttachment ="fixed"
          body.style.color="yellow"
          body.style.fontFamily = "Montserrat"
               
      


          img.src = "imagini/tigru.jpg"
          img.style.opacity = "80%"
          img.style.height = "200px"
          img.style.width = "300px"
          img.style.border = "3px solid black"
}
function displayAge(){
an.innerHTML = year - an.innerHTML
}

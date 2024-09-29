var sidenav=document.querySelector(".side-navbar") 

function showNavbar(){
    sidenav.style.left="0"
}
function closeNavbar(){
    sidenav.style.left="-60%"
    
}

var followbox = document.querySelector(".follow-overlay")
var followbox1 = document.querySelector(".follow-box")
var followbtn = document.getElementById("button")


followbtn.addEventListener("click",function(){
    followbox.style.display="block"
    followbox1.style.display="block"

})

var  closefollow = document.querySelector(".follow-cross")
var followbox = document.querySelector(".follow-overlay")
var followbox1 = document.querySelector(".follow-box")

closefollow.addEventListener("click",function(){
    followbox.style.display="none"
    followbox1.style.display="none"
})
const ele = document.getElementById("modal")
function appear ()
{
     ele.classList.add("animate__bounceInDown")
    ele.style.display = 'block'
   
}
function disappear() {
    
    ele.classList.remove("animate__bounceInDown")
    ele.classList.add("animate__bounceOutUp")
    
}
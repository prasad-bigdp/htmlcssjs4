const rotateBtn = document.getElementById('rotate')
rotateBtn.addEventListener('click', rotate);
let cardItems= document.getElementsByClassName('card')
function rotate ()
{
    console.log(cardItems)
    for (let i = 0; i < cardItems.length; i++)
    {
        cardItems[i].classList.remove("animate__animated")
        cardItems[i].classList.add("rotate")
       
    }
}
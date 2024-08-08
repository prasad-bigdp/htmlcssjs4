function change ()
{
   let color="#"+Math.round(Math.random()*10000000).toString(16)
    document.body.style.backgroundColor=color
}
let colors=["red","blue","black","orange","indigo","violet","green","yellow"]
function change2 ()
{
    let ri= Math.floor(Math.random()*8) /*0.0-1.0*8--->0.0-8.0*/;
    document.body.style.backgroundColor = colors[ri];

}
function changeMode ()
{
    document.getElementById('para').classList.toggle('dark')
}
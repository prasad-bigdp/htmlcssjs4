console.log(document)
// access buttons using getElementsByTagName
// let x = document.getElementsByTagName('button')
// console.log(x[2])
// let x = document.getElementsByClassName('para')
// console.log(x[0])
// let x = document.getElementById('p')
// console.log(x)
// let x = document.querySelector('.para')
// console.log(x)
// let x = document.querySelectorAll(".para")
// console.log(x)
let c2= document.getElementById('count')
let c = 0;
function incr ()
{
    c++;
    c2.textContent = c
    alert("haiiiiiiiiiiiii")
}
function decr ()
{
    c--;
     c2.textContent = c
}
function reset ()
{
    c = 0;
     c2.textContent = c
}
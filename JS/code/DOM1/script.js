console.log(document)

// to change anything, we need to select
let x1 = document.getElementsByTagName('p');
console.log(x1[1])

let x2 = document.getElementsByClassName('para')
console.log(x2[0])

let x3 = document.getElementById('pa');
console.log(x3)
function change ()
{
    x3.textContent = "Byeeeeeeeeeeeeeeeeee"
}

let x4 = document.querySelector('.para')
console.log(x4)


let x5 = document.querySelectorAll(".para")
console.log(x5[0])
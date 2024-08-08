let ele = document.getElementById("heading")
console.log(ele.textContent)
console.log(ele.innerText) //innerText also checks the CSS
const input = document.getElementById('inp')
function change ()
{
    ele.textContent="Hello " + input.value
}
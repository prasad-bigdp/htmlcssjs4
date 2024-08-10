const input1 = document.getElementById('inp1');
const input2 = document.getElementById('inp2');
const button = document.getElementById('btn')
const result = document.getElementById("result")
button.addEventListener('click', fun)
function fun ()
{
    const random_number = Math.floor(Math.random() * 100)
    result.textContent = `The Likeness between ${input1.value} and ${input2.value} ` + random_number + "%"
    
}
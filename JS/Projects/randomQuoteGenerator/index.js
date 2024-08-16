const mainDiv = document.getElementById('main');
let myData;
function fetchData ()
{
    fetch('https://api.quotable.io/random')
        .then(function (res){
					return res.json()
				})
        .then(function (data)
        {
            console.log(data);
            myData = data;
            displayData()
        })
        .catch(function(err){ console.log("Error: "+ err)  })
}
function fetchData2 ()
{
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (res) { return res.json() })
    .then(function(data){console.log(data)})
}
fetchData()
document.getElementById('btn').addEventListener('click',fetchData)
function displayData ()
{
    mainDiv.textContent=""
    const para = document.createElement('p');
    para.textContent = myData.content;
    const author = document.createElement('h2');
    author.textContent = myData.author;
    mainDiv.append(para,author)
}
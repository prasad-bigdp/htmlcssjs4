const mainDiv = document.getElementById('main');
// function fetchData ()
// {
//     fetch("https://opentdb.com/api_config.php?amount=10")
//         .then(function (res) { return res.json() })
//         .then(function (data) { console.log(data) })
//         .catch(function (err) { console.log(err) })
    
// }
 const fetchData2 = () =>
{
    // arrow functions are a modern way of writing functions in JS. arrow functions by default return the value  
    fetch("https://opentdb.com/api_config.php?amount=10")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    
}
const fetchData3 = async () =>
{
    try
    {
        const res = await fetch("https://opentdb.com/api_config.php?amount=10", {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    const data = await res.json();
    console.log(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData3()



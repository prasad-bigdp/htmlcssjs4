const para = document.getElementById('count');
let c = 10;
function display ()
{
    c++;
    para.textContent = c;
    if (c >= 20)
    {
        clearInterval(myInterval)
    }
}
let myInterval = setInterval(function ()
{
    para.textContent = c;
  
    if (c < 1)
    {
        clearInterval(myInterval);
        para.textContent="Let's Begin"
    }
      c--
}, 1000)
para.textContent="loading............"
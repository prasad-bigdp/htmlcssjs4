console.log(window)
console.log(window.location)
const button = document.getElementById('btn');
const vd = document.getElementById('vd')
button.addEventListener('click', function ()
{
    window.navigator.mediaDevices.getUserMedia({ video: true, audio:true}).then((s)=>vd.srcObject=s)
})
// chating - webSockets
// video chatting -- webRTC
// window.navigator
//     .geolocation
//     .getCurrentPosition((pos)=>console.log(pos.coords))
console.log(localStorage)
localStorage.setItem('age', 50);
console.log(localStorage.getItem('age')) //50
localStorage.removeItem('name');
localStorage.clear()// session storage also similar to localStorage but stores the data only until broser closes

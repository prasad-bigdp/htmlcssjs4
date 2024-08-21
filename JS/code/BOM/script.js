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
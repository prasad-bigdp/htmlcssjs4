let cartItems = JSON.parse(localStorage.getItem('cartItems'))
console.log(cartItems);
const mainDiv = document.getElementById("cartList")
function displayData (data)
{
    mainDiv.textContent=''
    data.forEach((p,i) =>
    {
        const cartDiv = document.createElement('div');
        cartDiv.classList.add('cartItem');
        const cartImage = document.createElement('img');
        cartImage.src = p.thumbnail;
        cartImage.alt = p.title;
        const cartTitle = document.createElement('h2');
        cartTitle.textContent = p.title;
        const cartPrice = document.createElement('p');
        cartPrice.textContent = "₹" + p.price;
        const cartRemoveButton = document.createElement('button');
        cartRemoveButton.textContent = "❎"
        cartRemoveButton.addEventListener('click',()=>removeCart(i))
        cartDiv.append(cartImage,cartTitle,cartPrice,cartRemoveButton)
        mainDiv.appendChild(cartDiv)
    })
}
displayData(cartItems)
const totalValue= document.getElementById('total')
function updatPrice (data)
{
   totalValue.textContent= "₹"+ data.reduce((prev,curr)=>prev+curr.price,0)
}
updatPrice(cartItems);
function removeCart (ind)
{
    cartItems.splice(ind, 1)
    displayData(cartItems);
    updatPrice(cartItems);
    let count = document.getElementById('headCount').textContent;
    count--;
    document.getElementById("headCount").textContent = count;
    localStorage.setItem('cartCount', count);
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}





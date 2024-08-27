let headCount = document.getElementById("headCount");
headCount.textContent = localStorage.getItem('cartCount') ?? 0
let cartArr = JSON.parse(localStorage.getItem("cartItems")) ?? []
function updateCount (item)
{
    let c = headCount.textContent;
    c++;
    headCount.textContent = c;
    localStorage.setItem('cartCount', c);
    cartArr.push(item);
    localStorage.setItem('cartItems',JSON.stringify(cartArr))
}
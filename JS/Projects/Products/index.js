const mainDiv = document.getElementById('main');
let products = [];
const fetchData = async () =>
{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    products = data;
    displayData(data)
}
fetchData();
const displayData = (data) =>
{
    mainDiv.textContent=''
    data.forEach((m) =>
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')
        const productImage = document.createElement('img');
        productImage.src = m.image;
        productImage.alt = m.title;
        const productTitle = document.createElement('h2');
        productTitle.textContent= m.title
        const productPrice = document.createElement('p');
        productPrice.textContent= "Price: "+m.price
        productDiv.append(productImage,productTitle,productPrice)
       mainDiv.appendChild(productDiv)
    })
}
const selection = document.getElementById("selector")
const filterData = () => {
    const newArray = products.filter((val) => val.category == selection.value);
    displayData(newArray)
}
	selection.addEventListener("input", filterData)

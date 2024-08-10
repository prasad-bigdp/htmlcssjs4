// const comics = ["Flash 101", "Secret Wars 1", "Secret Wars 2", " One Punch Man ", " One Piece 1", " One Piece 2"]
// const mainDiv= document.getElementById('main')
// comics.forEach(function (c,i)
// {
//     const para = document.createElement('p'); //<p></p>
//     para.textContent = `Comic Book: ${i + 1} : ${c}`
//     mainDiv.appendChild(para)
// })

const comicHeros = [
	{
		hero: "Spider-Man",
		name: "Peter Benjamin Parker",
		link: "http://marvel.com/characters/54/spider-man",
		img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg",
		size: 40000,
	},
	{
		hero: "CAPTAIN MARVEL",
		name: "Carol Danvers",
		link: "http://marvel.com/characters/9/captain_marvel",
		img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
		size: 40000,
	},
	{
		hero: "HULK",
		name: "Robert Bruce Banner",
		link: "http://marvel.com/characters/25/hulk",
		img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png",
		size: 40000,
	},
	
]
console.log(comicHeros)
const mainDiv= document.getElementById('main')
function displayData ()
{
    comicHeros.forEach(function (com)
    {
        const divv = document.createElement('div')//<div></div>
        divv.classList.add('comic')//<div class="Comic"></div>
        const image = document.createElement('img');//<img>
        image.src = com.img;//<img src="fvh">
        image.alt = com.hero//<img src="fvh" alt="ddhg">
        const title = document.createElement('h2')//<h2></h2>
        title.textContent= com.hero//<h2>hdfkhdf</h2>
        divv.append(image, title)
        mainDiv.appendChild(divv)
   })
}
displayData()







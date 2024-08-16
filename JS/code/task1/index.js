const persons = [
	{
		name: "RAJ",
		age: 50,
		Gender: "male",
	},
	{
		name: "shwetha",
		age: 90,
		Gender: "female",
	},
	{ name: "john doe", age: 25, Gender: "male" },
]
const mainDiv = document.getElementById('main')
persons.forEach(function (p)
{
    const personDiv = document.createElement('div');
    const para1 = document.createElement('p')
    para1.textContent="Name: "+p.name
    const para2 = document.createElement("p")
    para2.textContent= "Age: "+p.age
    const para3 = document.createElement("p")
    para3.textContent = "Gender: " + p.Gender;
    personDiv.append(para1, para2, para3);
    mainDiv.appendChild(personDiv)

})
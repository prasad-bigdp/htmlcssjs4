let arr = [5, 6, 7, 8, 9];
/* i have to all elements in the array */
/* using while print the above array elements */
let i = 0;
while (i < arr.length)
{
    console.log(arr[i]);
    i++;
}

/* using do while print the above array elements */
i = 0;
do
{
    console.log(arr[i]);
    i++;
} while (i < arr.length)
    
/* using for loop print the array elements */
for (i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
/* for--of is used to iterate array elements */
for (let x of arr)
{
    console.log(x)
}
/* for in is used to iterate through object keys */
for (let y in arr)
{
    console.log(y)
}
arr.forEach(function (ele,ind)
{
    console.log(ele,ind)
})
/* write a function that returns first and last letter of a given string in uppercase*/
/* fun("prasad")-->"PD"*/
function fun (str)
{
   return (str[0]+str[str.length-1]).toUpperCase()
}
let res= fun("prasad")
console.log(res)
/* "prasad"--->"pRaSaD" */
function test2 (str)
{
    let str1=''
    for (let i = 0; i < str.length; i++)
    {
        if (i % 2 == 0)
            str1 = str1 + str[i].toLowerCase()
        else
            str1 = str1 + str[i].toUpperCase();
    }
    return str1
}
let res2 = test2("prasad")
console.log(res2)
/* write a function that generate random password of 8 characters */
/* take a str= "ABCDEFGHIJKLMNOPQRSTUVWWXYZabcdefghijklmnopqrstuvwxyz012345679" */
function generatePassword ()
{
    let str =
        "ABCDEFGHIJKLMNOPQRSTUVWWXYZabcdefghijklmnopqrstuvwxyz012345679";
    console.log(str.length)
    let pass = '';
    for (let i = 1; i <= 8; i++)
    {
        let char = Math.floor(Math.random() * str.length )
        console.log(char)
        pass= pass+str[char]
    }
    return pass;
}
let randomPassword=generatePassword()
console.log(randomPassword)

/* Js is Very Easy ----> sJ si yreV ysaE */



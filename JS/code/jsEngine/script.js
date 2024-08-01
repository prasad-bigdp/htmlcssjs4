console.log("hi")
console.log(a)
console.log(b)
var a = 20;
console.log(a)
console.log(b)
var b = 10;
console.log(b); /* let and const variables hoist in temporal dead zone- you cannot access these values before declaration */
let c = 55;
/* Hoisting : hoisting is a behavior where variable and function declarations are moved to the top of their scope before code execution. */
function work ()
{
    console.log(k)
    var k = 25;
    console.log(k)
}
work()
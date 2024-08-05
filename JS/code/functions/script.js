(function ()
{
    console.log("I'm working........")
})(); //Immediate Invoke Function Expression

let dance2 = 25;
// simple function
function dance ()
{
    console.log("I'm dancing") //definition
}
console.log(dance)
let dance3 = function () // function expression
{
        console.log("I'm dancing")
}
console.log(dance3)

// functions can have parameters
function addition (a, b=10)
{
    console.log(`the addition of ${a} and ${b} is ${a+b}`)
} 
addition(5,20)

// function can return values
function sqaure (a)
{
    return a*a
}
let x = sqaure(4);
console.log(x)
 
// callback functions
/* We can declare one function inside another function parameters called callback function */
function what(hi,hello){
console.log(`hi,${hi}`);
hello();
}
function why(){
console.log("javascript is awesome")
}
what("i'm shruti",why)








function mad ()
{
    console.log("I'm your dad")
}
function bad (a)
{
    console.log(a+"if you are bad")
}
function combine (x, y) { y(5); x(); }
combine(mad,bad) // combine is higher order and mad,bad are callback functions

// closures
// nested functions means one function inside another function
// inner functions can remember outer function values even after outer function execution ended
// we use it real time techniques like memorization
function counter ()
{
     var count = 0
    function y ()
    {
        count++;
        console.log(count)
    }
    return y;
}
let z = counter();
console.log(z);
z()
z()
z()






















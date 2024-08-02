let dance2 = 25;
function dance ()
{
    console.log("I'm dancing")
}
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
addition(5)

// function can return values
function sqaure (a)
{
    return a*a
}
let x = sqaure(4);
console.log(x)
 
// callback functions
/* We can declare one function inside another function parameters called callback function */
function mad ()
{
    console.log("I'm Mad")
}
function bad ()
{
    console.log("i'm bad")
}
function combine (x, y) { x(); y(); }
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





















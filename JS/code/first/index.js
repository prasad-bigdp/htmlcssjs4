
var a = 25;
var a = 35; // you can redeclare var
a = 55; // you can reassaign var
let b = 10;
// let b = 20 // redeclare is not possible in let and const
b = 30; // reassign is okay with let
const x = 20;
//x = 30; // this will be error because re assign is not possible in const

function sum ()
{
    if (true)
    {
        let k = 55;
    }
    console.log(k)
}
sum()



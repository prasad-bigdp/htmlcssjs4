// cntrl statements are used to control the flow of document
//if
//switch
//simple-if
let a = 5;
if (a > 0)
{
    console.log("yes, a is greater than zero")
}
//if--else
if (a >= 5)
{
    console.log("yes, a is greater than or equal to five")
}
else
{
    console.log("condition failed")
}
//positive or negitive
if (a > 0)
{
    console.log("positive")
}
else if (a < 0)
{
    console.log("negitive")
}
else
{
    console.log("neigher negitive nor positive")
}
// let a=5,b=20,c=1;
let max = (a > b) ? (a > c) ? a : c : (b > c) ? b : c;
console.log(max)
// use switch to print the days of week by number in console
let num = 5;
switch (num) {
	case 0:
		console.log("sunday")
		break
	case 1:
		console.log("monday")
		break
	case 2:
		console.log("tuesday")
		break
	case 3:
		console.log("wednesday")
		break
	case 4:
		console.log("thursday")
		break
    case 5:
        console.log("friday")
        break;
    case 6: console.log("saturday");
        break;
    default: console.log("enter valid input");
}
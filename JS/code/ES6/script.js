function sum (a,...b)
{
    let s = 0;
    b.forEach((v) => s += v)
    console.log(s)
    let newArr = [4, 5, 6, 7, ...b]
    console.log(newArr)
}
sum(1, 2, 3, 4, 5)
// destructuring
let arr = [2, 5, 8, 7];
const [a, b, ...c] = arr;
console.log(a)

let emp = {
    name: "prasad",
    salary:"80000"
}
const {name,salary}= emp
console.log(salary)

class Car
{
    color; speed;
    constructor(c,s)
    {
        this.color = c;
        this.speed = s;
    }
}
let kia = new Car("red",200);
console.log(kia.color, kia.speed)
class Vehicle extends Car
{
    type;
    constructor(t,c,s)
    {
        super(c, s);
        this.type=t
    }
}
let obj = new Vehicle("4 wheeler","Black",300)
console.log()

/* create a class teacher with attributes tid,tname,tsalary
and create an object and assign values and print them*/
/* create a class principal and assign value for profit, create an object and access values */
/* OOP Principles
1. abstraction - abstract classes are not recommanded in JS 
2. encapsulation - combining data and methods together as a single unit. this is optional in JS
3. inheritance - JS supports inheritance using extends keyword */










let obj = {
    name: "prasad",
    mail: "xyz@abc.com",
    add: function ()
    {
        console.log(this.name)
    }
}
console.log(obj.name, obj['name']);
obj.add()
function display (a,b)
{
    console.log(this.name,a+b)
}
display.call(obj, 5, 6)
display.apply(obj, [5, 6])






let s = {
    username: "Priyaangel123456",
    mail: "abc@gmail.com",
    print: function() 
    {
        console.log(this.username,this.mail)
    }
}
function display2(a){
console.log(this.username, this.mail,a)
}
s.print()
display2.call(s,2)
display2.apply(s, [2])

let myBind = display2.bind(s);

myBind(2)



//Prototype Inheritance
// Every Object have one value called Prototype
// using this Prototype One object can inherit
// values of another object. it is called
// Prototype Inheritance

let obj1 = {
    x: 25,
    y:55
}
let obj2 = Object.create(obj1)
console.log(obj2)
console.log(obj2.__proto__.__proto__.__proto__)
console.log(obj2.x)

















let a = 25
console.log(a, typeof a)
let b = 26.3757
console.log(b.toFixed(3)) //26.376
console.log(b.toPrecision(3)) //26.4
console.log(a.toString(16)) // tostring convert decimal to other base systems
// Math Functions
console.log(Math.max(-2, -3)) //-2
console.log(Math.min(2, 3)) //2
console.log(Math.sqrt(16)) //4
console.log(Math.cbrt(27)) //3
console.log(Math.ceil(2.34)) //3
console.log(Math.floor(-3.84)) //-4
console.log(Math.pow(2, 3), 2 ** 3) //8 8
console.log(Math.round(2.54)) //3
console.log(Math.round(Math.random() * 10000)) // random value from 0.0 to 1.0
// random color generator 
console.log("#"+Math.round(Math.random()*10000000).toString(16))


let p = 'Javascript is so easy';
let s1 = "time is 5'o clock"
let quote = 'the kalam said "good night"'
let price = 25;
console.log(`the cost is "${price}"`)
console.log("the cost is "+price)
console.log(p, typeof p)
console.log(p[3] + p[6])
// string methods
let str = "I HATE Javasacript";
console.log(str.length)
console.log(str.toUpperCase())
console.log(str)
console.log(str.toLowerCase())
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))
console.log(str.charAt(2))
console.log(str.slice(2, 6)) //HATE
console.log(str.slice(7))
console.log(str.split(' '))
console.log(["xyz", "is", "good", "guy"].join(' ')) // array function
console.log("        prasad        ".trim())
console.log(str.replace('a', 'b'))
console.log(str.startsWith('I')) //true
console.log(str.endsWith("I")) //false










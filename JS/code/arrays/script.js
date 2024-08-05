let arr = [5, 6, 7, 2, 3, 1, 4]
console.log(typeof arr)
console.log(arr[0] + arr[2])
//Arrays have some default functions
console.log(arr.length) // no.of elements
console.log(arr.push(5, 8, 7, 12, 16, 15)) // used to add values at the end of array
console.log(arr.pop()) // removes the last element of the array
console.log(arr.unshift(1, 2, 3, 4)) // used to add elements at the start of array
console.log(arr.shift()) // removes first element of the array
console.log(arr)
console.log(arr.splice(6, 2))
console.log(arr)
console.log(arr.splice(6, 0, 12, 13))
console.log(arr)
let friends = ["monika", "ross", "chandler", "rachel", "joey"];
let arr1=[5,8,6,3,33]
// 1. delete joey and add "tillu" -- frirnds.pop(), friends.push("tillu")
// 2. delete monika and add "radhika" -- friends.shift(),friends.unshift("radhika")
// 3. delete chandler and  add "lilly" and "pheobe"
// friends.splice(2,1,"lilly","phobe")
// write a function to achieve the task
console.log(friends.indexOf('monika'), friends.lastIndexOf('monika'))
console.log(arr1.reverse())
console.log(arr1.sort())
console.log(["I", "HATE", "PYTHON"].join(' '))
// "PRASAD" ----> "DASARP"
console.log("PRASAD".split('').reverse().join(''))
console.log(arr1.concat([5, 6]))
console.log(['p', 'r', 'a', 's', 'a', 'd'].includes('k'))
console.log()
// for loop
// callback
/* forEach */
arr1 = [100, 200, 300, 400, 100, 500];

arr1.forEach(function (x,i) {
	console.log(x * 2,i)
})
let arr3 = ["RAJ", "PRIYA", "RANI", "JESSI", "RAVI"]
// print the first letter of every element in the array
let x=arr3.map(function (ele)
{
  return ele.charAt(0)
})
console.log(x)
// use map function to iterate through the array [2,8,5,4,1,3,9] and check whether each number is even or odd
// output : ["even","even","odd","even".......]
arr = [2, 8, 5, 4, 1, 3, 9]
let result = arr.map(function (ele)
{
    return ele % 2 == 0
})
console.log(result)
let result2 = arr.filter(function (ele) {
	return ele % 2 == 0
})
console.log(result2)
arr= ["Adah Sharma","Pooja Bedi","JAYA Sharma","ANil kulkarni"]

let x2= arr.filter(function (ele){
  return ele.endsWith("Sharma")
})
console.log(x2)
// reduce is used for accumulated logics
arr=[1,2,3,4,5,6]
let res = arr.reduce(function (prev, curr)
{
    return prev+curr
},10)
console.log(res)
let res1 = arr.every(function (ele)
{
    return ele%2==0
})
console.log(res1)



// objects
//objects are used to define properties in key-value pair
let obj = {
    name: "RAJ",
    age: 25,
    walk: function ()
    {
        console.log("walking")
    }
}
/* objects properties can be accessed by dot notation or index notation */
console.log(obj.name, obj['name'], Object.keys(obj), Object.values(obj))












let arr = [5, 6, 7, 2, 3, 1, 4]
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










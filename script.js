
let obj1={
    "name":"person1",
    "age":5
}

let obj2={
    "age":5,
    "name":"person1"
}

let Equation1=Object.entries(obj1).sort
let Equation2 =Object.entries(obj2).sort

console.log(Equation1===Equation2)
console.log("Hello, AlgoExpert!");

let num = 10;
console.log(num);

const num2 = 20;
console.log(num2);
//num2 = 30; // Error: Assignment to constant variable.

const person = {
    name: "John",
    age: 30,
    isMarried: false,
};

console.log( typeof JSON.parse(JSON.stringify(person)))

nums = [1,2,3,4,5,6,7,8,9,10];

console.log(typeof nums);

nums.push(11);

console.log(nums);

//map over nums
const newNums = nums.map(num => num * 2);
console.log(newNums);

newNums.map(num => console.log(num));


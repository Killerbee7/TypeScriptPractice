// Code goes here!

// comment is disabled in tsconfig
// console.log("Welcome to TS World Again!");


// const btn = document.querySelector("button")!;
// const num1 = document.getElementById("num1")! as HTMLInputElement;
// const num2 = document.getElementById("num2")! as HTMLInputElement;

const add=(num1:any, num2:any)=>{
    return num1+num2;
}

console.log(add(20,5))

const divide=(num1:number, num2:number)=>{
    return num1/num2;
}

console.log(divide(20,5))

const multiply=(num1:number, num2:number)=>{
    return num1*num2;
}

console.log(multiply(20,5))

const subs=(num1:number, num2:number)=>{
    return num1-num2;
}

console.log(subs(20,5))

const printOutput: (a:number | string)=> void = (output)=>
console.log(output);

printOutput(add("ram", 5));



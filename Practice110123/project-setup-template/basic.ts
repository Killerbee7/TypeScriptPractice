

function add (num1: number, num2: number, showResult: boolean, phrase: string){
    const result= num1 + num2;
    if(showResult){
        console.log(phrase +result);
    }
    else{
        return result;
    }

}

console.log(add(5, 9, false, "Result is:"));
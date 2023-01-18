// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';

// function combine(
//     input1: Combinable,
//     input2: Combinable,
//     resultConversion: ConversionDescriptor
// ) {
//     let result;
//     if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
//         result = +input1 + +input2;
//     }

// else {
//     result = input1.toString() + input2.toString();
// }
// return result;
// }

// const combineAges = combine('30', '25', 'as-number');
// console.log(combineAges)

// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum };
// const logDetails = (uid: string | number, item, string) => {
// //  console.log(`${item} has a uid of ${uid}`);
// // };
// // const logDetailsNew = (uid: StringOrNum, item, string) => {
// //  console.log(`${item} has a uid of ${uid}`);
// // };
// // const greet = (user: { name: string; uid: string | number }) => {
// //  return console.log(`${user.name} says hello`);
// // };
// const greetNew = (user: objWithName) => {
//  return (`${user.name} says hello`);
// };
// console.log(logDetails(1, 'test', 'James'));
// console.log(logDetailsNew(1, 'testNew', 'Tom'));
// console.log(greetNew({name:'Jamie', uid:5}));

// function add(n1: number, n2: number) {
//     return n1 + n2;
//    }
//    function printerResult(num: number): void {
//     console.log('Result: ' + num);
//    }
//    printerResult(add(5, 12));
//   // let combinedValues: (a: number, b: number) => number;
//    //let combinedValues;
//   let combinedValues = add;
//    console.log(combinedValues(8, 8));

// function sendRequest(data: string, cb:(response: any)=>void) {
//     // ... sending a request with "data"
//     return cb({data:'Hi there!'});}
//     sendRequest('Send this!', (response)=>{
//         console.log(response);
//         return true;});

// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = "Max";
// if (typeof userInput === "string") {
//   userName = userInput;
// }
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// generateError("An error occurred!", 800);

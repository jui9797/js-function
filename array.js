// function with array parameters
// function numberOfElementts(numbers){
//     const len =numbers.length;
//     return len;
// }
//  const lent =numberOfElementts([12,55,7,88,54,2,11133])
//  console.log(lent)


// function sumOfNumbers(numbers){
//     let sum =0;
//     for(const number of numbers){
//         sum =sum+number;
//     }
//     return sum;
// }
// const numbs =[55,66,33,212]
// const sum =sumOfNumbers(numbs);
// console.log('sum of numbers:', sum)


// create a function that will return only the even number 
// return the sum of even numbers.
// function evenOnly(numbers){
//     const even =[];
//   for(const num of numbers){
//     if(num%2 === 0){
//         console.log(num)
//         even.push(num);
//     }
//   }
//   return even
// }

//  const evens =evenOnly([12,5,76,99,77,34]);
//  console.log(evens);

// sum of even numbers
function sumEven(number){
    let sum =0
    for(const num of number){
        if(num%2 === 0){
            sum+=num
        }
    }
    return sum;
}
const sum =sumEven([12,5,76,99,77,34]);
console.log('sum of even numbers is:', sum)
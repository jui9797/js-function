// function with codition
// ex-1
// function isEven(number){
//     if(number%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(5));
// console.log(isEven(44));

// ex-2
// function isOddd(number){
//     if(number%2 === 1){
//         return true;
//     }
//     else{return false;}
// }
// console.log(isOddd(10));
// console.log(isOddd(25));

// ex-3
// function evenString(str){
//     const size =str.length;
//     console.log(str, size)
//     if(size%2 === 0){
//         console.log('even size')
//         return true;
//     }
//     else{
//         console.log('odd size')
//         return false;
//     }
// }
// evenString('bangladesh')
//  let bandorban =evenString('bandorban')

// function with boolean parameter operation

function doDubble(number, dubble){
    if(dubble === true){
        const result =number*2;
        return result;
    }
    else{
        const result =number*3;
        return result
    }
}
console.log(doDubble(44, true));
console.log(doDubble(51, false));

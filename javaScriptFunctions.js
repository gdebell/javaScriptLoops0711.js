// console.log("sanity check");
//
// /*Define a function called sum that takes two numbers as arguments and returns their sum.*/
// function sum(num1, num2) {
//   return num1 + num2;
// }
//
// var resultSum= sum(1,2);
//
// console.log(resultSum ===3);
// console.log(resultSum ===2);

/*Defines a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.*/

// function isEqual(arg1, arg2) {
//   if(arg1 === arg2) {
//     return true;
//   }else{
//     return false;
//   }
// }
//
// console.log(isEqual(1, 1)); //true
// console.log(isEqual(1, 2)); //true
// console.log(isEqual(1, '1')); //false


function discountPercentage (cost, discount) {
  if(discount > 0 && discount< 100) {
    return cost * (discount/100);
  } else {
    return "Warning";
  }
}

discountPercentage(100, 5);

//define function call discountPercentage
//arguments => orignial, discount (0-100)
//instructions=>
  //test to see if discount is less than 100 and greater than 0
    //if true
        //do math => calculate percentage and return
    //if false
        //return 'warning'
//returned =>total discount

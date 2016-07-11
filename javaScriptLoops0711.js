//example:
console.log("example problem:");
for (var i=0; i<=10; i++) {
  console.log(i);
}

//problem 1:
console.log("Problem: #1");
for (var j=0; j<=1000; j+=100) {
  console.log(j);
}

//problem 2:
console.log("Problem: #2");
for(var k=1; k<=128; k*=2 ) {
  console.log(k);
}

//problem 3:
console.log("Problem: #3");
for(var l=0; l<=10; l+=2) {
  console.log(l);
}

// //problem 4:
console.log("Problem: #4");
for(var m=3; m<=15; m+=3) {
  console.log(m);
}

//problem 5:
console.log("ProblemL #5");
for(var n=9; n>=0; n-=1) {
 console.log(n);
}

//problem 6:
console.log("Problem: #6");
for(var o =1; o<=4; o++) {
 console.log(o);
 console.log(o);
 console.log(o);
}

//problem 7:
console.log("Problem: #7");
for(var q= 0; q<=2; q++) {
  for (var p =0; p<=4; p++) {
    console.log(p);
  }
}

console.log("YAY!!!!!");

/*Write a program that prints numbers 1-25 and identifies if number is odd or even*/
console.log("Print 1-25 identifying if number is even or odd.");
for (var q=1; q<=25; q++) {
  if(q%2 === 0) {
    console.log(q + " is an even number.");
  }else{
    console.log(q + " is an odd number.");
  }
}

/*Write a problem that prints the numbers 1-50. For multiples of 3 it prints "fizz". For multiples of 5 it returns "buzz". For numbers that have multiple of both 3 and 5, it returns "fizzbuzz".*/
console.log("FizzBuzz Problem:");

for(var r =1; r<=50; r++) {
  if ((r%3 === 0) && (r%5 === 0)) {
    console.log(r + " FizzBuzz");
  } else if (r%3===0) {
    console.log(r + " Fizz");
  } else if (r%5===0) {
    console.log(r + " Buzz");
  }else{
    console.log(r + " Not a multiple of 3 or 5.");
  }
}
/*To sum the multiples of 3 and 5 under 1000.*/
console.log("Sum the multiples of 3 and 5 under 1000");

var sumTotal = 0;
for (var s =0; s<1000; s++) {
  if ((s%3===0) || (s%5===0)) {
    sumTotal += s;
  }
}
console.log("The sum of multiples 3 & 5 equals " + sumTotal + ".");

//Seven calls to console.log to make a triangle
console.log("Seven calls to console to make a triangle");
string ="";
for (var t =1; t<=7; t++) {
  string += "X";
  console.log(string);
}

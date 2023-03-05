//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
      const sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log( add(1,2) )     // What will this print?
console.log( add )          // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );	  // What will it print 	
console.log( cb(3,3,add) ); // What will it print
console.log( cb(4,3,sub) ); // What will it print
//console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log(cb(3,"hh",add));// What will it print

//Take another look at the function expression declared in cb, and the provided callbacks in 5+6. What we have in cb is a very generic function that can take any callback that can do something with two numbers and return a value.

//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function

const mul = function(n1,n2){
  return n1 * n2;
};

console.log(cb(10,10,mul));

//5) Call cb, this time with an anonymous function that divides the first argument with the second
console.log(cb(5,5,(n1,n2) => n1/n2))

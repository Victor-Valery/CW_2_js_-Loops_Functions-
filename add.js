// Loops

//*********************************************************** */

// The following loop statements are given by JavaScript to accomplish this:

// ● while statement
// ● for statement
// ● for…in statement
// ● for…of statement
// ● do..while statement
// ● break statement
// ● continue statement

//*********************************************************** */

// while statement

// while (condition) {
//     // statement
// }

//--------------------------

// var i = 0;
// var sum = 0;

// while (i < 6) {
//     var sum = sum + i;
//     i++;
// }
// console.log("The total is: " + sum);

//--------------------------

// var i = 0;
// var mult = 5;

// while (i < 3) {
//     var mult = mult * i;
//     i++;
// }
// console.log("The answer is:" + mult);

//*********************************************************** */

// do..while statement

// do {
//     statement
// } while (condition);

//--------------------------

// var i = 6;
// var sum = 0;

// do {
//     var sum = sum + i;
//     i++;
// }
// while (i < 6);

// console.log("the total is " + sum);

//*********************************************************** */

// for statement

// for (statement 1; statement 2; statement 3)
//   // code block

//--------------------------

// var sum=0;
// for (var i=0; i<6; i++){
//     sum+=i;
// }
// console.log("the total is " + sum);

//--------------------------

// var x=0;
// for (var i=5; i>3; i--){
//     x+=i;
// }

// console.log("The answer is " + x);

//--------------------------

// for (let i=0; i<=5; i++){
//     console.log("Hello World!", i);
// }

//--------------------------

// for (let i=0; i<=5; i++){
//     if (i % 2 !== 0) console.log(i);     
// }

//--------------------------

// var sum = 0;

// for (var i=3; i<7; i++){
//     sum +=i;
//     if (i===3 || sum > 10) {
//         continue;
//     }
//     console.log(i);
// }

//--------------------------

// var players = ["Messi", "Ronaldo", "Hazard", "Neymar", "Salah"];
// var text = "";
// var i;

// for(i=2; i<players.length; i++){
//     text += players[i];
// }
// document.write(text);

//--------------------------

// var i = 0;
// var sum = 0;

// while (i<3) {
//     var sum = sum + i;
//     i++;
// }
// console.log("The total is: " + sum);


//*********************************************************** */

// break statement

// var i=0;

// while(i<10){
//     if(i===3){
//         break;
//     }
//     console.log(i);
//     i=i+1;
// }
// console.log(i);

//--------------------------

// var i=0;

// while(i<10) {
//     if(i>5) {
//         break;
//     }
//     i=i+1;
// }
// console.log(i);

//*********************************************************** */

// continue statement

// for (var i=4; i<8; i++) {
//     if (i===5){
//         continue;
//     }
//     console.log(i);
// }

//--------------------------

// for (var i=2; i<5; i++) {
//     if (i===3){
//         continue;
//     }
//     console.log(i);
// }

//*********************************************************** */
//*********************************************************** */

// Functions

// function name(parameters){
//     statements
//   }

//--------------------------

// function square(number) {
//     return number * number;
// }

//--------------------------

// function square(number) {
//     return number * number;
//   }
  
//   var res = square(5);   //calling a function
  
//   console.log (res);  

//*********************************************************** */

// Function Expression and Function Constructor

// var square = function (number) {return number * number};
// var res = square(6); //calling a function

// console.log(res);

//--------------------------

// var area = function (num1, num2) {return num1 * num2};
// var res = area(5,6); //calling a function

// console.log(res);

//--------------------------

// const square = new Function ("number", "return number * number");
// console.log(square(3));

//--------------------------

// var num = function(a,b) {return a*b};
// console.log(num(5,7));

//*********************************************************** */

// Arrow Functions

// // ES5  Regular Function
// var x = function(x, y) {
//     return x * y;
//   }
  
//   // ES6  Arrow Function
//   const x = (x, y) => x * y;

//--------------------------

// const multi = (x,y) => x*y;
// console.log(multi(3,5));

//--------------------------

// var greeting = () => "Welcome"
// document.write(greeting());


//*********************************************************** */

// function greet(name, lastname) {
//     console.log("Hello " + name + ' ' + lastname);
// }

// greet("John", "Smith");
// greet("Victor", "Valery");

//--------------------------

// function test(x,y) {
//     if (x>y) {
//         document.write(x);
//     } else {
//         document.write(y);
//     }
// }
// test(7,3);

//--------------------------

// function num() {
//     return 5+7;
// }
// console.log(typeof(num));

//--------------------------


// var num = [7, 12, 143, 54, 37]
// num.sort(function(a,b) {return b-a})
// console.log(num);



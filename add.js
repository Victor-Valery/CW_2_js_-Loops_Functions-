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




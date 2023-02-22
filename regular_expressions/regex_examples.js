const regex = /[a-z]/;
// Prints the first lowercase letter in the string
const regex2 = /[a-z]+/;
// Prints all the lowercase in the string
const regex3 = /[a-z]*/;
// Prints
const regex4 = RegExp("[a-z]");
const regex5 = /[0-9]/;
let regex6 = /[a-z]{6,}/;
// Validates if the number of lowercase is 6
regex6 = /[a-zA-Z]{6,}/;
console.log(regex5.test("AdeBisi123"));
console.log(regex.exec("Abc"));
console.log(regex2.exec("AbcdefghiJK"));
console.log(regex3.test("AbcdefghiJK"));
// Validates if the string has lowercase letters
console.log(regex2.exec("Abc"));
console.log(regex6.test("Adebisi"));
console.log(regex6.test("AdeBisi"));
// var regex = /[A-Z](?<=\w{7})/;
// console.log(regex.test("sjskArtyusjikWW"));

const name = "HelloWorld";
console.log(name.match("hello"));
console.log(name.match("Hello"));
console.log(name.match(/hello/i));
console.log(name.replace(/hello/i, "Goodbye"));
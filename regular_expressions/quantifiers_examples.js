const regex = /^[A-z]/;
const regex2 = /^[A-z]|[0-9]$/;
const regex3 = RegExp("[a-z]");
const regex4 = /^[A-z]+([0-9])+$/;
const regex5 = /^[a-z]+[A-Z]+[0-9]+$/;
const regex6 = /^[a-z]+[A-Z]+[0-9]{2}$/;
const regex7 = /^[a-zA-Z0-9]{7}$/;
const regex8 = /^[A-Z][a-zA-Z0-9]{7}$/;
const regex9 = /[A-Z](?<=[a-zA-Z0-9]{7})/;
console.log(regex.test("AdeBisi1234fgh"));
console.log(regex2.test("AdeBisi1234fgh"));
console.log(regex3.test("ABC"));
console.log(regex4.test("Deji123"));
console.log(regex5.test("profK01"));
console.log(regex6.test("profK01"));
console.log(regex7.test("profK01"));
console.log(regex8.test("ProffK01"));
console.log(regex9.test("sjsk012ahsA"));
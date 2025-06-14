let a = 0;
console.log(Boolean(a));

let b = '0';
console.log(Boolean(b));

console.log(a === b);

console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);

console.log(null > 0); // false; null is converted to zero and 0 > zero is false;
console.log(null == 0) // false; null and undefined are equal in == and are not equal to anything else;

console.log(null >= 0) // true; here null is converted into number and zero greater than zero is true;

console.log(null >= ''); // should retrun true;

console.log(null == ""); // should return false;

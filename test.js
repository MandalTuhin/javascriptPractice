console.log(console.log(1) || 2 || console.log(3));

// here the first console.log(1) returns undefined, so or searches for a truthy value, so it moves forword and shortCircuits after finding 2;
//
console.log(console.log(1) && console.log(2) );

// here the first console.log(1) prints 1 and it is evaluated to undefined, && shortCircuits here and gives the value undefined
// which is the value of the console.log() statuemtn. and this is printed by the outer console.log(); statement;

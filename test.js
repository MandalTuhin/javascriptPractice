let firstName = "";
let lastName = "";
let name = "";

console.log(firstName || lastName || name || "Anonymous");

// this type of chain of or operators is only allowed in javascipt and not in other languages. 
// here, the first true value is returned and is shortCircuited from that point. Ie, no further calculation.
// but if there is no true value in the expression. then the expression results in the last value;
// eg:
//
console.log("" || null || undefined);

// as we can see this statement results in undefined;
// if we add somehthing like 0; it will print 0;
//
console.log("" || null || undefined || 0);

true || console.log("This statement will not be executed due to shortCircuit");

false || console.log("This statement will be executed as there is no condition for shortCircuit here");

// && behaves in a simillr way but it does the opposite. it returns the first falsy value in the chain and ignore 
// values following the firs falsy value;(shortCircuit), and if all values are true, it retuns the value of the last operand;
//eg:

console.log("0" && "hello" && 1 && undefined && null); // o/p: "";




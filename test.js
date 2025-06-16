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



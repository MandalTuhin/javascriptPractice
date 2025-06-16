console.log(console.log(1) || 2 || console.log(3));

// here the first console.log(1) returns undefined, so or searches for a truthy value, so it moves forword and shortCircuits after finding 2;

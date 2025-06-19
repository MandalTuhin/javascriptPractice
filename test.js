function pow(b, n){
  let res = 1;
  for(let i = 1; i <= n; i++){
    res *= b;
  }

  return res;
}

console.log(pow(3, 3)); // should return 27;

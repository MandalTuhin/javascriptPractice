let givenNum = prompt("Enter a number: ", '');

let times = prompt("Enter how many times you wan't to multiply this number: ", '');

function pow(b, n){
  let res = 1;
  for(let i = 1; i <= n; i++){
    res *= b;
  }

  return res;
}

alert(pow(givenNum, times));

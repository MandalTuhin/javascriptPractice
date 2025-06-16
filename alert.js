let name = prompt("Who's there?", '');

if(name === "Admin"){
 
  let passWord = prompt("Password?", '');
  
  if(passWord === "TheMaster"){
    alert("Welcome");

  } else if(passWord === null || passWord === ''){

    alert("Canceled");

  } else {
    alert("Wrong Password");
  }



} else if(name === null || name === ''){
  
  alert("Canceled");

} else {
  alert("I don't know you");
}


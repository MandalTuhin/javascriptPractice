let sayHi = function(){
  console.log("Hello");
};

copiedFunc = sayHi;
copied2Func = copiedFunc;
console.log(copied2Func);
sayHi();
copiedFunc();
copied2Func();


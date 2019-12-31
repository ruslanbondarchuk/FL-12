
function addOne(x) {
  return x + 1;
}
function pipe(){
  let x = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    x = addOne(x);
  }
  return x;
}
console.log(pipe(5, addOne, addOne, addOne, addOne));

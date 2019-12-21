alert('Building a triangle \n Please, input triangles sides length');
let prompta = prompt('please, input first side length');
let a = parseFloat(prompta);
let promptb = prompt('Please, input second side length');
let b = parseFloat(promptb);
let promptc = prompt('Please, input third side length');
let c = parseFloat(promptc);
if (isNaN(a)||isNaN(b)||isNaN(c)) {
  alert('input values should be ONLY numbers');
  console.log('Triangle doesn’t exist');
  } else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
  console.log('Triangle doesn’t exist');
  } else if(a>=b+c||b>=a+c||c>=a+b){
  alert('such triangle does not exist');
  console.log('Triangle doesn’t exist');
} else if(a===b===c){
  alert('triangle is ok, please check results in console');
  console.log('Equilateral triangle');
}else if(a===b||b===c){
  alert('triangle is ok, please check results in console');
  console.log('Esosceles triangle');
}else {
  alert('triangle is ok, please check results in console');
  console.log('Scalene triangle');
}

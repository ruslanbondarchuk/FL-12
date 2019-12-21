alert('solving a quadratic equation "ax2 + bx + c = 0" \n Please, input  numbers a, b and c');
let prompta = prompt('please, input a');
let a = parseFloat(prompta);
let promptb = prompt('Please, input b');
let b = parseFloat(promptb);
let promptc = prompt('Please, input c');
let c = parseFloat(promptc);
let dis = Math.pow(b, 2) - 4 * a * c ;
if (dis < 0) {
console.log('equation has no solution, \n Discriminant='+ dis);
alert('No soution, please check results in console');
}else if (isNaN(a)||isNaN(b)||isNaN(c)) {
    console.log('Invalid input data:' +'\n a = ' + a + ', b = ' + b + ', c = ' + c + ' \n a, b or c is not a number');
    alert('error, please check results in console');
  } else if (a === 0 && b === 0) {
    console.log('Invalid input data:' + '\n a = ' + a + ' b = ' + b + ' c = ' + c+ '\n a and b could not be 0 both');
    alert('error, please check results in console');
    } else if (a === 0) {
  console.log('Invalid input data:' + '\n it is not a quadratic equation, but x = '+ `${-c/b}`);
  alert('error, please check results in console');
} else {
    console.log('a = ' + a + ' b = ' + b + ' c= ' + c + ' Discriminant = ' + dis );
    let x1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
    let x2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
    console.log('x1 = ' + Math.round(x1) + ', x2 =' + Math.round(x2));
    alert('please check results in console');
}

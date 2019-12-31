function countNumbers(inputstring){
  let outobj ={
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
  }
  for (var i = 0; i < inputstring.length; i++) {
    switch (parseInt(inputstring[i])) {
      case 0:
          outobj[0] +=1;
          break;
      case 1:
          outobj[1] +=1;
          break;
      case 2:
          outobj[2] +=1;
          break;
      case 3:
          outobj[3] +=1;
          break;
      case 4:
          outobj[4] +=1;
          break;
      case 5:
          outobj[5] +=1;
          break;
      case 6:
          outobj[6] +=1;
          break;
      case 7:
          outobj[7] +=1;
          break;
      case 8:
          outobj[8] +=1;
          break;
      case 9:
          outobj[9] +=1;
         break;
      default:
         break;
    }
  }
  for (var key in outobj) {
    if (outobj[key] === 0) {
      delete outobj[key];
    }
  }
  console.log(outobj);
  return outobj;
}
countNumbers('f345t45ythuj67ju8i87kii98ko98ok9')

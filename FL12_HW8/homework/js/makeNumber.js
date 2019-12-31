function makeNumber(inputstring){
  let outstr ='';
  for (var i = 0; i < inputstring.length; i++) {
    if(parseInt(inputstring[i])){
      outstr+= inputstring[i];
    }
  }
  return outstr;
}
alert(makeNumber('awefawefawefawefawef234'));

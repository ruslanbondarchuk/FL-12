const a = '1';
const b = 2;
const c = 3;
const d = '4';
let input= [a, b, c, d];
let outputArray = [];



function convertArray(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === 'string') {
      outputArray[i] = parseInt(inputArray[i]);
    } else {
      outputArray[i] = inputArray[i].toString();
    }
  }
  return outputArray;
}
console.log(convertArray(input))



function baseInputFunction(el) {
  console.log(el*b);
  return el*b;
}

function executeForEach(inputArray, inputFunction){
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    outputArray[i] = inputFunction(inputArray[i]);
  }
  return outputArray;
}
executeForEach(input, baseInputFunction);



function mapArray(inputArray, inputFunction) {
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === 'string' && parseInt(inputArray[i])) {
      inputArray[i] = parseInt(inputArray[i]);
    }
  }
  inputArray = executeForEach(inputArray, inputFunction);
  return inputArray;
}

function plus3(el) {
  return el + c;
}
console.log(mapArray(input, plus3));



function returnEven(el) {
  if (el % b === 0 ) {
    return el ;
  }
}

function filterArray(inputArray, inputFunction) {
  let filteredArray = [];
  outputArray = executeForEach(inputArray, inputFunction);
  for (let i = 0; i < outputArray.length; i++) {
    if (outputArray[i]) {
      filteredArray.push(outputArray[i]);
    }
  }
  return filteredArray;
}
console.log(filterArray(input, returnEven));



let heyworld = 'hey world';

function flipover(inputstring) {
  let outstring = '';
  for (let i = inputstring.length-1; i >=0; i--) {
  outstring += inputstring[i];
  }
  return outstring;
}
console.log(flipover(heyworld));



const startnumber = 2;
const stopnumber = -2;
let inputRange = [startnumber, stopnumber];

function makeListFromRange(inputRange) {
  let startnum = inputRange[0];
  let stopnum = inputRange[1];
  let outArr = [];

  if (stopnum > startnum) {
    for (let i = 0; i <= stopnum-startnum; i++) {
      outArr[i] = startnum +i;
    }
  } else if (stopnum < startnum) {
    for (let i = 0; i <= startnum-stopnum; i++) {
      outArr.push(startnum - i);
    }
  } else if (startnum === stopnum) {
    outArr[0] = startnum;
  }
  return outArr;
  }
console.log(makeListFromRange(inputRange));



const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(inputData, filterKey) {
  let filteredList = [];
  for (let obj of inputData) {
    filteredList.push(obj[filterKey]);
  }
  return filteredList;
}
console.log(getArrayOfKeys(actors, 'name'));



const const58 = 58;
const const14 = 14;
const const48 = 48;
const const31 = 31;
const const29 = 29;
input = [const58, const14, const48, b, const31, const29];

function replace30(el) {
  const filterconst = 30;
  if (el < filterconst) {
    el = '*';
  }
  return el;
}

function substitute(inputArray) {
  return executeForEach(inputArray, replace30);
}
console.log(substitute(input));



const const2019 = 2019;
const date = new Date(const2019, 0, b);

function getPastDay(inputDate, pastDays) {
  let outputDate = new Date(inputDate);
   outputDate.setDate(inputDate.getDate() - pastDays);
  return outputDate.getDate();
}
console.log(getPastDay(date, const58));

const const9 = 9;

function formatDate(inputDate) {
  let HH = inputDate.getHours() > const9 ? inputDate.getHours() : '0' + inputDate.getHours();
  let mm = inputDate.getMinutes() > const9 ? inputDate.getMinutes() : '0' + inputDate.getMinutes();
  return `${inputDate.getFullYear()}/${inputDate.getMonth() + 1}/${inputDate.getDate()} ${HH}:${mm}`;
}

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));

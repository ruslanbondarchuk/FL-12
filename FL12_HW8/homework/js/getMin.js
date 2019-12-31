function getMin(){
  var minarg = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (minarg > arguments[i]) {
      minarg = arguments[i];
    }
  }
  return minarg;
}
alert(getMin(0,23452345,-23452345,-9,'', 'wedqwed'));

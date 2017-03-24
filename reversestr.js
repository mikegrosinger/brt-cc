function reverseString(str) {
    var newString = "";
  var i = str.length -1;
    for (i; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

reverseString("hello");

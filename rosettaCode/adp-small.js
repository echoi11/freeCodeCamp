//getDPA(20000);

function getDPA(num) {
  // Good luck!
  //alert(getDPA(20000));

  num = 100;
  var res = [0, 0, 0];
  //var i = 1;
  //alert(num);
  for (var i = 1; i <= num; i++) {
    //alert('i='+i);
    var sum = sumDivisors(i);
    if (sum === i) {
      alert("perfect=" + i);
      res[1] = res[1] + 1;
    } else if (sum < i) {
      res[0] = res[0] + 1;
    } else {
      res[2] = res[2] + 1;
    }
    //alert('next i');
  }
  //  alert(num);
  alert(res);
  return res;
}


function sumDivisors(num) {
  //alert('getDiv=' + num);
  if (num === 1) {
    return 0;
  }

  var divisorSum = 1; // 1 is always a divisor.

  var i = 2;
  // determine first divisorSum up to sq rooot
  for (; i <= Math.floor(Math.sqrt(num)); i++) {
    //alert('i=' + i + 'mc=' + Math.ceil(num / 2));
    if (num % i === 0 && num !== i) {
      divisorSum += i; // add the small divisor
      if (i * i !== num) {
        divisorSum += (num / i); // this adds the large divisors.
      }
    }
  }

  return divisorSum;

}

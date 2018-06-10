//getDPA(20000);

function getDPA(num) {
  // Good luck!


  //num = 4;
  var res = [0, 0, 0];
  //var i = 1;
//alert(num);
  for (var i = 1; i <= num; i++) {
    //alert('i='+i);
    var sum = sumDivisors(getDivisors(i));
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


function sumDivisors(divisors) {
  var sum = 0;
  for (var i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }
  //alert('sum=' + sum);
  return sum;
}

function getDivisors(num) {
  //alert('getDiv=' + num);
  if(num===1) {
    return [];
  }

  var divisors = [1]; // 1 is always a divisor.
  
  var i= 2;
  // determine first divisors up to sq rooot
  for (; i <= Math.floor(Math.sqrt(num)); i++) {
    //alert('i=' + i + 'mc=' + Math.ceil(num / 2));
    if (num % i === 0 && num !== i) {
      divisors.push(i);
      if(i < num/i) {
        divisors.push(num/i); // this takes care of the big divisors.
      }
    }
  }

  if (num === 20000) {
    //alert(num);
    alert('d=' + divisors);
  }
  return divisors;

}

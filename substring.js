function substr(string, start, length) {
  var i;
  var substring = '';

  if (start < 0) {
    start += string.length
  }

  i = start;

  for (; i < (start + length) && i < string.length; i++) {
    substring += string[i];
  }

  return substring;
}

function substring(string, start, end) {
  var nums = [start, end];
  var fixed_nums = [];
  var i;
  var newString = '';
  
  nums.forEach(function(num) {
    if (num === undefined) {
      return;
    } else if (num >= string.length) {
      num = string.length;
    } else if (num < 0 || isNaN(num)) {
      num = 0;
    }
    
    if (fixed_nums[0] && num < fixed_nums[0]) {
      fixed_nums.unshift(num);
    } else {
      fixed_nums.push(num);
    }
  });
  var i = fixed_nums[0];

  if (fixed_nums[0] === undefined) {
    fixed_nums[0] = 0;
  }

  if (fixed_nums[1] === undefined) {
    fixed_nums[1] = string.length;
  }

  while (i < fixed_nums[1]) {
    newString += string[i];
    i++;
  }

  return newString;
}

exports.a = substr;
exports.b = substring;
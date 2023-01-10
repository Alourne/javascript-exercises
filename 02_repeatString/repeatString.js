const repeatString = function(string, times) {
    var word = '';
    while (times > 0) {
      word += string;
     times --;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;

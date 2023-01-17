const sumAll = function(y, x) {
    let error = 'ERORR';
    let final = 0

    let x = Math.max(num1, num2);
    let y = Math.min (num1, num2);

    if ((num1 < 0 ) && (num2 < 0)) {
        return error;
    }

    if (y > x) {
        const temp = y;
        x = y;
        y = temp;
    }
    
    for (let i = y; i < x + 1; i++) {
        final = final + i;
    }
    return final;
};

// Do not edit below this line
module.exports = sumAll;

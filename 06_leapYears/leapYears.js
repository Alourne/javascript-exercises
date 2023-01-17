const leapYears = function(x) {
    let years;
    if ((( x % 4 === 0) && (x % 100 !==0) || (x % 400 === 0 ))) {
        years = true;
    }
    else {
        years = false;
    }
return years;



    // my solution
    // let leap = (x);
    // let yes = "true";
    // let no = "false";

    // if ((leap / 4) && (leap / 400)) {
    //     return yes;
    // }
    // else {
    //     no
    // }
};

// Do not edit below this line
module.exports = leapYears;

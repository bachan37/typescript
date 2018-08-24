var someFunction = function (val) {
    var x;
    if (val == 0) {
        x = 1;
    }
    else {
        x = 2;
    }
    return x;
};
console.log(someFunction(0));
console.log(someFunction(100));

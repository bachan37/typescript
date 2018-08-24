var someFunctionWithVar = function () {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
};
var someFunctionWithVarIife = function () {
    for (var i = 0; i < 3; i++) {
        setTimeout((function (ii) {
            return function () {
                console.log(ii);
            };
        }(i)), 1000);
    }
};
var someFunctionWithLet = function () {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    };
    for (var i = 0; i < 3; i += 1) {
        _loop_1(i);
    }
};
someFunctionWithLet();

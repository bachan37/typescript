var someFunction = function () {
    var a;
    (function (a) {
        a.x = 1;
    })(a || (a = {}));
};
y = 2;
;
a.x = 4;
a.y = 3;
console.log(a.x);
console.log(a.y);
;

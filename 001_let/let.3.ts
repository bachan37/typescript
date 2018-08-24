var someFunctionWithVar = function(){
    for(var i=0; i<3; i++){
        setTimeout(function(){
            console.log(i)
        }, 1000);
    }
};


var someFunctionWithVarIife = function(){
    for(var i=0; i<3; i++){
        setTimeout((function (ii) {
            return function () {
                console.log(ii);
            };
        }(i)), 1000);
    }
};

var someFunctionWithLet = function(){
    for(let i=0; i < 3; i += 1){
        setTimeout(function(){
            console.log(i);
        }, 1000)
    }
};

// someFunctionWithVar();
// someFunctionWithVarIife();
someFunctionWithLet();

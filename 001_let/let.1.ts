var someFunction = function(val:number){
    let x;

    if(val == 0){
        let x = 1;
    } else{
        let x = 2;
    }
    return x;
};

console.log(someFunction(0))
/**
output should be undefined
**/



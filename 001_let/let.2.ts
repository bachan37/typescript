var someFunction = function(val:number){
    let x;

    if(val == 0){
        x = 1;
    } else{
        x = 2;
    }
    return x;
};

console.log(someFunction(0)) // 1
console.log(someFunction(100)) // 2


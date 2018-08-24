const let2 = function(val:number){
    let x;

    if(val == 0){
        x = 1;
    } else{
        x = 2;
    }
    return x;
};

console.log(let2(0)) // 1
console.log(let2(100)) // 2


console.log("Inside Lib1");

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

console.log(add(20,30));
console.log(sub(20,30));

module.exports={
    add:add,
    sub:sub
}
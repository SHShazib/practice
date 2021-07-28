var name = "============With For loop============";
console.log(name);

var factorial = 1;
for (i=1; i<=10; i++){
    factorial = factorial*i;
    console.log(i,factorial);
}



var name = "============With While loop============";
console.log(name);

var i=1;
var factorial=1;
while (i<=10){
    factorial= factorial * i;
    console.log(i,factorial);
    i++;
}

var name = "============while in single value============";
console.log(name);

var i=1;
var factorial=1;
while (i<=8){
    factorial= factorial * i;
    // console.log(i,factorial);
    i++;
}
console.log(i,factorial);
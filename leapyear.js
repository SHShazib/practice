

var name = "============With Function============";
console.log(name);


function year(y){

    if(y%400==0){
        console.log("This year is a Leap Year.")
    }
    else if ((y%100!=0)&&(y%4==0)){
        console.log("This year is a Leap Year.")
    }
    else {
        console.log("This year is not Leap year.")
    }
    return year;
}

year(2000);
year(2002);
year(2008);
year(1700);



var name = "============Normally============";
console.log(name);
const y= 1600;
if (y%400==0){
    console.log('Leap Year.')
}
else if ((y%100!=0)&&(y%4==0)){
    console.log("Leap Year.")
}
else {
    console.log("Not Leap Year.")
}
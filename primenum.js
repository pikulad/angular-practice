//1
function weekdays() {
    console.log("\n1.");
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (var i = 0; i < weekDays.length; i++) {
        console.log(weekDays[i]);
    }
}
weekdays();
//2
function prime(no) {
    console.log("\n2.");
    var b = 1;
    for (var x = 2; x < no; x++) {
        if (no % x === 0) {
            b = 0;
        }
    }
    if (b == 0) {
        console.log('number is not prime');
    }
    else {
        console.log('number is prime');
    }
}
console.log(prime(34));
//3 
function arm() {
    console.log("\n3.");
    var a, temp;
    var m = 0;
    var num = 12;
    temp = num;
    while (temp > 0) {
        a = temp % 10;
        temp = temp / 10;
        m = m + (a * a * a);
    }
    if (m == num) {
        console.log("num is armstrong");
    }
    else {
        console.log("num is not arm");
    }
}
arm();
//4
function arr() {
    console.log("\n4.");
    var numbers = [1, 4, 9];
    var element = numbers.pop();
    console.log("element is : " + element);
    numbers.push(10);
    var element = numbers.pop();
    console.log("element is : " + element);
}
arr();
//5
function str_ops() {
    console.log("\n5.");
    var strA = "priyank";
    var strB = strA.toUpperCase();
    console.log(strB);
    console.log(strB.toLowerCase());
}
str_ops();
//6

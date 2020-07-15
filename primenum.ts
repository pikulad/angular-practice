/*
1) program to display weekdays
2) program to check number is prime or not
3) program to check number is amstrong or not
4) using array impliment opretions of arrays like push pop etc
5) implement string operation toupper tolower
6) create an interface which stores the property of the address
7) display the values of these properties using a function
8) create a class named as polygons create drive classes named as a triangle and square display the area of triangle and square
*/



//1
function weekdays()
{
    console.log("\n1.");
    let weekDays:string[] = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    for(let i=0; i<weekDays.length; i++){
        console.log(weekDays[i]);
    }

}
weekdays();

//2
function prime(no)
{
    console.log("\n2.");
 let b=1;
    for(var x = 2; x < no; x++)
    {
      if(no % x === 0)
      {
      b=0;
      }
    }
    if(b==0){
        console.log('number is not prime');
    }
    else{
        console.log('number is prime');
    }
}
console.log(prime(34));

//3 

function arm(){
    console.log("\n3.");
    let a,temp;
    let m=0;
    let num=12;
    temp=num;
    while(temp>0){
        a=temp%10;
        temp=temp/10;
        m=m+(a*a*a);
    }

    if(m==num){
        console.log("num is armstrong");
    }
    else{
        console.log("num is not arm");
    }
}
arm();

//4
function arr(){
    console.log("\n4.");
var numbers = [1, 4, 9]; 
          
var element = numbers.pop(); 
console.log("element is : " + element );  
numbers.push(10);
          
var element = numbers.pop(); 
console.log("element is : " + element );

}

arr();

//5

function str_ops(){
    console.log("\n5.");
    var strA:string = "priyank";
    var strB=strA.toUpperCase();
    console.log(strB);
    
    console.log(strB.toLowerCase());

}
str_ops();

//6
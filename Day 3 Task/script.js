//  //qn :1
// // To compare two jSON objects without order:
 let obj1={name:"person 1" , age:5};
 let obj2={age:5,name:"person 1"};
let json1=JSON.stringify(obj1);
 let json2=JSON.stringify(obj2);
if(json1===json2){
        console.log("Both are equal")
 }
 else{
    console.log("both are not equal")
 }

//qn :2
//print the countries flag:
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data= request.response;
    var result=JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }
}
//qn3 :
// printing the countries names, regions, sub regions and populations:
var request1= new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload=function(){
    var data1= request1.response;
    var result1=JSON.parse(data1);
    console.log(result1);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[1].population)
    }
}

//qn 4:
//1.Declare four variables without assigning values and print them in console>:
var a;
var b;
var c;
var d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//2.How to get value of the variable myvar as output:
const myVar = 100;
console.log(myVar);

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines
const Firstname="Hrithik";
const  Lastname="Saravanan";
const ismarried= false;
const Country="India";
let age ="23";
console.log(Firstname,Lastname,ismarried,Country,age);

//4.Declare variables to store your first name, last name, marital status, country and age in a single line
const Firstname1="hrithik",Lastname1="saravanan",ismarrieds=false,Country1="india",age1="24";
console.log(Firstname1,Lastname1,ismarrieds,Country1,age1);

//6:Convert the string to integer:
//parseInt()

//7.1.square of  a number:
let v= 5;
console.log(v*v);
//7.2.Swapping 2 numbers:
 let value1=2;
 let value2=4;
 let temp;
 temp=value1;
 value1=value2;
 value2=temp;
 console.log(value1);
console.log(value2);


//7.3Addition of 3 numbers
   var one=1;
   var two=2;
   var three=3;
   console.log(one+two+three);
   

   //7.4celcius to farinet:
let cel= 50;
let f= 0;
f=(cel*(9/5))+32;
console. log(f);

//7.5meter to miles:
const kilometers=20;
const factor=0.62137;
const miles=kilometers*factor;
console.log(miles)

//7.6pounds to kgs:
var pounds=40;
var kgs=pounds*0.453592;
console.log(kgs)

//7.7.calculate batting average:
var Dhoni = {
    firstName: 'Dhoni',
    hits: 10,
    atBats: 30,
    calcAVG: function() {
        this.avg = this.hits / this.atBats;
        return this.avg;
    }
}
 
Dhoni.calcAVG();
console.log(Dhoni.firstName + ' has a batting average of ' + Dhoni.avg);

//power of any number x^y:

	function isPower(n)
	{
		for (x = 2; x <= Math.sqrt(n); x++) {
			var y = 2;

			var p = Math.pow(x, y);

			while (p <= n && p > 0) {
				if (p == n)
					return true;
				y++;
				p = Math.pow(x, y);
			}
		}
		return false;
	}

	
		for (i = 2; i < 100; i++)
			if (isPower(i))
				console.log(i + " ");

//7.10 //calculate simple intrest:
                
var p = 1000; 
var r = 0.05; 
var t = 2;  
var interest = (p * r * t) / 100;
console.log("Simple Interest: " + interest);

//7.11 area of equilateral triangle


a1= 20.1;
area = 1;
for(i=1;i<=a;i++)
{
 
    area = (1.73*a1*a1)/4
    
}
console.log(Math.round(area*100)/100)


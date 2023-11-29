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
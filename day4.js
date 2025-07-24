/*Array is a special variable in Javascript that can hold multiple values in a single variables,
in js the array is alos know as hetrogenenous

Real-Life Use Case
1.Student database
2.Employee managment system
3.E-commerce product list
4.Quiz question with option
5.Movie list with rating and genre
*/
/*
1.array 
let number=[1,2,"three",true];

let names=new Array("john","james");

console.log(number[2]);
console.log(names.length);
*/
/*filter()-it filtered thr result arguments
let result=number.filter(result => number[1]);
console.log(result);
*/
/*
2.slice - delete the element based on index value
splice-change the original array by
adding/removing items at a specific index.

let number=[1,2,3,4,5];
let r=number.splice(1,3,"haii")
console.log(number)
*/
/*
3.object 
let marks={
    name:"arvindh",
    totalmark:"total mark is :301",
    subject:{
        dsa:100,
        java:99,
        python:90
    },
    avg:function(){
        let sum=this.subject.dsa+this.subject.java+this.subject.python;
        return sum;
    }
}
console.log(marks["name"]);// method one
console.log(marks.totalmark)//method two

console.log(marks.subject.dsa);
console.log(marks.subject.java);
console.log(marks.subject.python);
console.log(marks.avg());
*/
/*
4.object desturcturing
const person ={
    names:"Asha",
    age:21,
    city:"Chennai"
};
//destructuring
const{names,age,city}=person;

console.log(names);//Asha
console.log(age);//21
console.log(city);//Chennai
*/
/*
5.Array destructuring*/
const person=["john",22,"softwaredeveloper"];
const[name,age,desiginiation]=person;
console.log(name+" "+age+" "+desiginiation);

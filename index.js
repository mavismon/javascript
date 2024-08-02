// OPERATORS

// arithemetic

// let z=3+"b"; //string+num=string
// console.log(z);

// let z= 5-2;
// console.log(z);

// functions

// function shopping()
// {
//     console.log("go to shop");
//     console.log("go to shop");
//     console.log("go to shop");
//     console.log("go to shop");

// }
// shopping();
// shopping();
// shopping();shopping();

// function add (num1,num2)
// {
//     //console.log(num1+num2);
//     return num1+num2;
// }
// let result=add(1,2);
// console.log(result+1);

// function sayName(name,age)
// {
//    // console.log(name,age);
//    return "hi";
// }

// let test=sayName("mavis",22);
// console.log(test);

// function sayName(name)
// {
//     //some work
//     //return "hi"
// }
// sayName('hsu');

// function calculateage(birthyear)
// {
//     let age=2024-birthyear;
//     console.log(age)
// }
// calculateage(2002)

// //default parameter
// function add(a,b)
// {
//     console.log(a+b);
// }
// add(2,3);

// rest parameter
// function test(a,b,...c)
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test(1,2,3,4,5);

// function statment
// function myname()
// {
//     console.log("mavis")
// }
// myname();

// function expression
// let sayhi=function(word)
// {
//     console.log("hi there")
// }
// sayhi("hello");

// callback function
// function sayname(name,fun)
// {
//     let result = fun(name)
//     console.log(result);
// }
// sayname("mavismon",function(name){return name;});

// callback function p-2
// function twice(num)
// {
//     let result = num *2;
//     console.log(result);
// }
// twice(8);

// function twice(num, modifier)
// {
//     let result = modifier(num)*2;
//      console.log(result);
// }
// twice(5,function(number){
//     return number +6;
// });

// arrow function
// why->functioon htl ka code ka 1 line so u can delete {} , no error
// code 2 lines so ma ya pr
// let sayhi=()=>

// {
//     console.log('hi');
// }
// sayhi();

// let sayhi=()=> console.log('hi');
// sayhi();

// if code is 1 line and that 1 line has return u dont need to write return agian, js automatic return the code
// let sayhi=()=>
// {
//     return "hello world";
// }
// console.log(sayhi);

// let sayhi=()=>"hello world"
// console.log(sayhi);

// if parameter is only one, you also dont need to put ()
// let sayhi=(word)=>"word blha blah";
// console.log(sayhi("hello"));

// let sayhi=word=>"word blha blah";
// console.log(sayhi("hello"));

// let twice=num=>num+2;
// console.log(twice(3));

// array
// let mixture=['iron','orange','apple','bottle'];

// console.log(mixture[0]);

// nested array
// let arr=[
//     ['a','v'],
//     [1,2,3]
// ];
// arr[0][2]="d";
// console.log();

// spread operator
// let data1=[1,2,3]
// let data2=[4,5,6]

// let result=[...data1,...data2]; //... means [] pyote
// console.log(result);

// function add(a,b)
// {
//     console.log(a+b)
// }

// let number=[1,2];
// add(...number);

// destructuring
//  let datas=['hsu','20','ttc'];
// // let name=datas[0];
// // let age=datas[1];
// // let sch=datas[2];

// let [name,age,school]=datas;
// console.log(name,age,sch);

// array methods
// push method

// let animals =['dog','cat','fish'];

// //animals[3]='goat';
// //animals.push('bird');
// // animals.pop();
// // animals.shift();
// //animals.unshift('goat');
// //let index=animals.indexOf('cat');
// //let string=animals.join('-); //dog,cat,fish
// //animals.splice(0,2);
// console.log(animals);

// let nums=[1,2,3,4,5]
// nums = nums.map((num)=>{
//    return num+100;

// });
//  console.log(nums);

// let names=['john','david','hoe'];
// names= names.map(name=>
// {
//     return "Mr."+name;
// }
// )
// console.log(names);

// array filter method

// let nums=[1,2,3,4,5,6];
// let filtered=nums.filter((num)=>
// {
// return num%2===0;
// })
// console.log(filtered)

// array reduce method
// let nums=[1,2,3,4,5,6];
// let reducednum=nums.reduce((prev,current)=>
// {
//     return prev+current;
// })
// console.log(reducednum)

// array  methods
// let nums=[1,2,3,4,5,6];

// let newarr=nums.map(num=>num+100);
// console.log(newarr)

// let filtered=nums.filter(num=> num%2===0);
// console.log(filtered)

// let reducednum=nums.reduce((prev,current)=>prev+current);
// console.log(reducednum)

// object

// let person={
//     name:'mavis',
//     age:22,
//     sch:'uk'

// }
// //dot notion
// console.log(person.name);

// //bracket notation[]
// let propName='age';
// console.log(person[propName]);

// this -method's object
// regular function=window obj
// arrow function=parent's this (lexical scoping)
// let person={
//     name:'mavis',
//     age:22,
//     eat:function()
//     {
//         console.log(this.name+' is eating')

//     }
// }

// person.drink=function()
// {
//     console.log('person is drinking')
// }
// person.eat();
// person.drink();

// window obj
// let person={
//     name:'mavis',
//     eat()
//     {
//         setTimeout(function()
//         {
//             console.log(this);
//         },3000);
//     }
// }
// person.eat();

// parent's obj
// let person={
//     name:'mavis',
//     eat()
//     {
//         console.log(this);
//         setTimeout(() => {
//             console.log(this);
//         }, 3000);
//     }
// }
// person.eat();

// obj  spread and obj destructring and property shorthand

// obj spread

// let obj1={
//     name: 'vee',
//     age: 21
// }

// let obj2={
//     hair:'red'
// }

// let obj3={...obj1,...obj2};
// console.log(obj3);

// obj destructring

// let {name,age}={
//     name:'mavis' ,
//     age:20
// }

// console.log(name);
// console.log(age);

// property shorthand
// let name='mavis'
// let age=22

// let person=
// {
//     name,age
// }
// console.log(person)

// js data structure
// let person=
// [
//     {name:'mavis',age:22,gender:female},
//     {name:'vee',age:22,gender:female},
//     {name:'ck',age:22,gender:male}
// ]
// let names=people.map(person=>
// {
//     return person.name;
// }
// );

// console.log(names);

// let filterarr = people.filter(person=>{
//     return person.gender ==='male'
// })
// console.log(filterarr)

// json = string 1 line
// use from one programing lang to another program lang
// data types = string, number, boolean , array , obj , null
// let person = '{ "name" : "hsu yee mon"}'
// // console.log(person);
// let obj=(JSON.parse(person))
// console.log(obj.name)

// let person={
//     name:'mavis',
//     age:22
// }
// console.log(JSON.stringify(person))

// condition if else
// let tired=prompt('are you tired? "yes/no" :')
// if (tired==='yes')
//     console.log('rest well')
// else
// console.log('go back to work')

// let productprices = [100, 800, 200, 300, 400, 500, 700];

// let updatedPrices = productprices.map(price => {
//     if (price === 100) {
//          price -= 30;
//     }
//     return price;
// });

// console.log(updatedPrices);

// let people=[
//     {name:'john', age:22},
//     {name:'vee', age:22, gender:female},
//     {name:'david', age:21,gender:male},
// ]
//  people=people.map(person=>{
//     if (person.gender==='male')
//         person.gender='males'
//     else if(person.gender==='female')
//         person.gender='women'
//     else
//     person.gender="unknown"

//     return person
//  })
//  console.log(people)

// if else expression (ternary operator)
// let age=20;
// let permission;

// if(age>18)
// {
//     permission ='authorised';
// }
// else {permission='unauthorised'};
// console.log(permission);

// let age=20;
// let permission=age>18? "authorised" : "unauthorised";
// console.log(permission);

// switch statement
// let people = [
//     { name:'mavis',age:23,gender:'f'} ,
//     { name:'vee',age:26,gender:'f'} ,
//     { name:'john',age:23,gender:'m'} ,
// ]

//  people=people.map(person=>{
//     switch(person.gender)
//     {
//         case "m":
//         person.gender="male"
//         break;

//         case "f":
//             person.gender="female"
//             break;

//         default:
//             person.gender="unknown"
//     }
//     return person;
// })
// console.log(people);

// while loop -condition check first then work
// let x=0
// while (x<10)
// {
//     console.log('hi' + x);
//     x++
// }

// let people=['vee','k2','mavis','ck','yu','knm']

// let x=0;
// while(x<people.length)
// {
//     console.log(people[x])
//     x++
// }

// do while loop
// do{
//     console.log('work')
// }while(false)

// let x=5
// do{
//     console.log('work')
//     x++
// }
// while(x<5)

// for loop
// for(let x=0;x<4;x++)
// {
//     console.log('hello')
// }

// let people=['vee','k2','mavis','ck','yu','knm']

// for (let x=0; x<people.length; x++)
// {
//     console.log(people[x])
// }

// for of loop
// let people=['vee','k2','mavis','ck','yu','knm']
// for (person of people)
// {
//     console.log(person)
// }

// for in loop
// let people = {
//     name: 'mavis',
//     age: 22
// };

// // console.log(people)
// for ( key in people) {
//     console.log(`${key} is ${people[key]}`);
// }

// let people=['vee','k2','mavis','ck','yu','knm']
// for (key in people)
// {
//     console.log(`${key}`)
// }

// //scoping
// let x=0; //global variable
// console.log(x);
// {
//     let y=0; //local variable
//     console.log(y);
// }
// //local is only used in local and cannot be used in global

// function test()
// {

// }

// oop object oriented programming
// class car{
//     wheels=4
//     color='blue'

//     drive()
//     {
//          console.log('car is driving')
//     }
// }

// let car=new car
// console.log(car.wheels)

// let car2=new car
// car2.color='black'
// console.log(car2.color)

//oop example
// class cal{
//   static  PI=3.14
//     plus(n1,n2)
//     {
//         return n1+n2
//     }
//     minus(n1,n2)
//     {
//         return n1-n2
//     }
//     multiply(n1,n2)
//     {
//         return n1*n2
//     }
//     devide(n1,n2)
//     {
//         return n1/n2

// }
// remainder(n1,num2)
//     {
//         return n1%n2

// }
// }

// let calcu =new cal
// // console.log(calcu.plus(3,2))
// console.log(calcu.PI)

//static property
// class Calculator
// {
//     static PI=3.14
//     static area(r)
//     {
//         return 3.14*r**2
//     }
// }
// console.log(Calculator.area(2))

//this do no work in static method

// class Calculator
// {
//      PI=3.14
//      name='casio'
//      area(r)
//     {
//         // return 3.14*r**2
//         return this.PI*r**2
//     }
//     volume(r,h){
//         // return this.PI*r**2*h
//         return this.area(r)*h
//     }

//     static info()
//     {
//         let calculator= new Calculator
//         console.log('i am '+calculator.name+' calculator')
//     }
// }
// // let calculator= new Calculator
// // console.log(calculator.volume(2,4))
// Calculator.info()

//constructor and access modifier(oop)

// class car{
//     Name=''
//     wheels=4;
//     constructor(name,wheels){
//         this.Name=name
//         this.wheels=wheels;
//         this.drive()
//     }
//     drive()
//     {
//         console.log(this.Name+' is driving')
//     }
//     getwheel(){
//         console.log(this.Name+'has '+this.wheels+' wheels')
//     }
// }
// new car('bmw')
// let toyota=new car('toyota',10)
// toyota.getwheel()

//accerss modifier
//static public private
// class car{
//         name='bmw'
//         #hp=300
//         gethorsepowder()
//         {
//             console.log('horse power is' + this.#hp)
//         }
// }
// let Car=new car
// Car.gethorsepowder()

//oop inheritance
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     run() {
//         console.log(`${this.name} is running`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(this.name + ' woof woof');
//     }
// }

// let dog = new Dog("aung nat");
// dog.bark();

//asynchronous javascript

//asyn way
// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log(3)
// }, 3000);
// console.log(4) //1243 event loop

//promise
// function synchronous() {
//     return new Promise((resolve, reject) => {
//         let result = 0;
//         for (let i = 0; i < 1000000; i++) { // smaller loop count
//             result += 1;
//         }
//         if (result) {
//             resolve(result);
//         } else {
//             reject('some error');
//         }
//     });
// }

// console.log('work');
// synchronous()
//     .then((result) => {
//         console.log(result);
//         console.log('after syn test');
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// console.log('more important');

//fetch api
// fetch ('https://jsonplaceholder.typicode.com/todos')
// .then((response)=>{
//     response.json().then((data)=>
//     {
// console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })

// fetch ('https://jsonplaceholder.typicode.com/todos')
// .then((response)=>{
//     response.json().then((data)=>
//     {
// console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })

//coding styles
//allcap
// HELLO_WORLD

// //snake case
// hello_world

// //camel case
// helloWorld // method /StylePropertyMap

// //capital case
// helloWorld //class name

// array
// let array=[
//     "mavis",
//     "vee",
//     "ck",  //, trading coma
//     "yu"
// ]

// if (condition) console.log('statement')
// else console.log('statement')

// const { add, minus, PI } = require("./math");
// console.log(add(3, 2));
// console.log(PI);

javascript fundamental concepts:

VARAIABLE DECLATION: 

 var name = "rashni";
 console.log(name);
----------------------------------------------------
DATA TYPES:

We have 4 different data types number, string, boolean, undefined.
number: var num = 4;
        console.log(num);
output: 4

String: var name = "ras";
        console.log(name);
output: ras

To know the data type of data we can use typeof method.
 var name = "ras";
        console.log(typeof(name);
output: string
----------------------------------------------
ARRAYS AND OBJECTS
array: If you want to store more than 1 value we can use arrays.
 var value = [1,2,3,4,5];
  console.log(value);
output: [1,2,3,4,5]
---------------------------------------------------
OBJECTS: 
 var person = {name: "Rashni",
                age: 4};
  console.log(person.name);
output: [Rashni]
-----------------------------------------------
FUNCTIONS:
function user(num1){
console.log(num1)
}
user(10);

Output: 10

--------
Functions with return

function add(a,b){
  var c = a + b
  return c;

}
var output = add(10,5);
console.log(output)

Note: When we are adding any thing and returning that particular value will be assigned to add. So to use the assigned value
we need to declare that to variable.
-------------------------------------------------
CONDITIONAL STATEMENTS:
we have 3 type if, if else, if esle if else.
NOTE: we write condition if and no condition is on else.
if:
var score = 85;
if (score>80){
console.log('grade A')
}
Output: grade A

if else
var score = 85;
if (score>80){
console.log('grade A')
}else 
{
console.log('grade b')
}

Output: grade A

if else if else

var score = 85;
if (score>80){
console.log('grade A')
}else if (score <60)
{
console.log('grade b')
}else 
{
console.log('grade c')
}

Output: grade A
-------------------------------------------
LOOPING CONCEPTS: If you want to repeat a action multiple times then we do looping.
For loop: If you know what to assign to variable and how much to increament we can use for loop.
for var(i=0; i<5; i++){
console.log(i);
}

output: 1,2,3,4

For while: In while loop wecan assign value to variable inside the whileloop. 
var output = 10;
while (output<=10){
output++;
}
----------------------------------
methods introduced in ES5:
Array features: isArray(), map(),filter(), forEach(), every(), some(), indexOf(), lastIndexOf()
Json features: stringify()
date features: valueOf()

isArray():
var data =1;
console.log(Array.isArray(data));

output: false (as it is not a array value)

map(): We use it to iterate the array of values and to modify any of value in that particular array.
var list = [1,2,3,4];
list.map(
function(element){
console.log(element)
}
)

output: 1,2,3,4

var list = [1,2,3,4];
var increment=list.map(
function(element){
return element+1
}
)

output: 2,3,4,5

---------------------------------
filter: If you want to add any condition then based on that condition it will filter the value and provide the result
var employees = [1,2,3,4];
var output = employees.filter(function(data){
  
return data>2;

})
console.log(output)

output: [2,3,4];
-------------------------------
forEach: It is same like map function but it wont give an array as output
var employees = [1,2,3,4];
employees.forEach(function(data){
  
console.log(data)

})

output:
1
2
3
4
-----------------------------
every: It will check wheater all the values are satisfying the condition or not. Itsatisfies it will give true if not then false.
var employees = [1,2,3,4];
var output = employees.every(function(data){
  
return data>4;

})

console.log(output)

output: false.
----------------------
some: if atleast one condition satifies it willreturn true.
var employees = [1,2,3,4];
var output = employees.some(function(data){
  
return data>3;

})

console.log(output)

output: true
--------------------------
indexOf: If you want tofind the index  of value then we can use this.

var employees = [1,2,3,4];
console.log(employees.indexOf(4))
----------------------
lastIndexOf: If you have multiple dublicate values and what to find the last dublicate value index then we can use this
var employees = [1,2,3,4,6,4];
console.log(employees.lastIndexOf(4))

output: 5
----------------------------------------------------------
------------------------------------------------------------
stringify: It will convert the object into JSON. In the object keys wont be in double quotes.
var employees = {
  name: "rashni",
  age: 4
}
var output = JSON.stringify(employees);
console.log(output)

output: {"name":"rashni","age":4}
-------------------------------------------
valueOf:to get the present date we needto use the date method and toconvert that date into milli seconds we can use valueOf.
var date = new Date();
console.log(date.valueOf());

output: 123
var date = new Date();
console.log(date.valueOf());

1707598395691
-----------------------------------------------------
--------------------------------------------------
Methods introduced in ES6 - let and const, arrow, classes, for-of, default parameter, rest operator, spread operator,destricting.
let and const:
var: if we declare the value is var we can access that globally.
let: if we declare the value is let we can access that locally.
const: if we declare the value is const we cannot reassign other value for same data.
---------------------------------
arrow function:its the short way of writing the function.
const user = () =>{console.log("hello")};
user();

example2:
const user = (a) =>
{return a+5};
 var value = user(10);
 console.log(value)

output: 15
----------------------------------------
-------------------------------------------------------
-----------------------------------------
Classes:
In the es6 classes got introduced. Inside the classes we can create the multiple methods. If you want to use that inside methods in a class
we need to create a new object.

class User{
  admin(){
    console.log("admin")
  }
}
 let obj = new User
 obj.admin();

output: admin

Constructor:
When you want to send any value to the classes then we can use constructor. when we create a class constructor() method gets exected 
first. It will take all the arugemt values we are sending buy using this keyword. this refers current object. 

class User{
  constructor(msg){
this.msg = msg;
console.log(this.msg)
  }
  admin(){
    console.log(this.msg)
  }
}
 let obj = new User ("hi");
 obj.admin();
-----------------------------------------------------------------------
for-of:
const array = [1,2,3,4,5];
for(const a of array){
  console.log(a)
}

output: 1
2
3
4
5
--------------------------
Default parameter: When you want to send multiple values which out assigning that in parameter then we can use defalut parametr
function person(name, age=  15){
  console.log(name + age)
}

person("john", 20)

Output: John 20

Note: From the above example I can send the age or skop the age. If I send the age it will give me the latest age if not it will 
give the parameter age.

-----------------------------------
rest operators:  If I want to send multiple arrguments with out assign in the parameter then I can give ... with some name. 
function person(name,...remaining){
  console.log(name + " "+ remaining)
}

person("john", 20, "ravi")

Output: John 20, ravi
---------------------------------
spread operators: If you want to spread values of 1 array to another array then we can use spread operators.
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3= [...array1,...array2];
console.log(array3)

output: [1,2,3,4,5,6]
-----------------------------------------
Destructoring:

let employee = {
  name : "rashni",
  age : 25
}

const 
{name,age} = employee ;
console.log(name);

Note: Insead of using employee.name we can directly use name. 

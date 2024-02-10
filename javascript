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

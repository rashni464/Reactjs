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
LOOPING CONCEPTS: 
For loop:
for var(i=0; i<5; i++){
console.log(i);
}

output: 1,2,3,4

For while:
var output = 10;
while (output<=10){
output++;
}

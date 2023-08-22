//  1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function Insert(arr:number[],index:number,value:number) {
    arr=arr.splice(index,0,value);
    return arr;
}
var arr:number[]=[2,3,4,5,6,7],index:number=3,value:number=23;
console.log("Before calling function : ",arr);
Insert(arr,index,value);
console.log("After calling function : ",arr);

// 2 - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
function AddItem(cart:string[]) {
    cart=cart.splice(cart.length-2,0,"Apple")
    return cart;
}
function RemoveItem(cart:string[]) {
    cart=cart.splice(cart.length-1,1)
    return cart;
}
function UpdateItem(cart:string[]) {
    cart=cart.splice(cart.length-3,1,"Peach")
    return cart;
}
var cart:string[]=["Mango","Banana","Burger","Pizza"]
console.log("*** Before additem function ***");
console.log("Cart : ",cart);
console.log("*** After additem function ***");
AddItem(cart);
console.log("Cart : ",cart);
console.log("*** Before removeitem function ***");
console.log("Cart : ",cart);
RemoveItem(cart);
console.log("*** After removeitem function ***");
console.log("Cart : ",cart);
console.log("*** Before updateitem function ***");
console.log("Cart : ",cart);
UpdateItem(cart);
console.log("*** After updateitem function ***");
console.log("Cart : ",cart);

//  3- Write a program that uses a while loop to print the first 25 integers.
var num:number=1
while (num<=25) {
    console.log(num," ");
    num++;
}

//  4- Write a program that uses a while loop to print the first 10 even numbers.
var num1:number=1
while (num1<=10) {
    if(num1%2==0)
    console.log(num1," ");
    num1++;
}

//  5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num2:number) {
    var fact=1;
    while (num2!=0) {
        fact=fact*num2;
        num2--; 
    }
    return fact; 
}
var fct:number=3;
let x=factorial(fct);
console.log("Factorial of ",fct," is ",x);

// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let arr1=[2,-4,3,-6,3,5,2,9,-1];
console.log("with negative values : ",arr1);

function check(arr1:number[]) {
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]<0){
            arr1.splice(i,1);
        }
    }
}
check(arr1);
console.log("without negative values : ",arr1);

// 7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

let arr3=[2,4,3,6,3,5,2,9,1];
console.log("values of array : ",arr3);

function sum(arr1:number[]) {
    let i=0,sum=0;
    while(i<arr3.length){
        sum=sum+arr3[i];
        i++;
    }
    return sum;
}
console.log("sum of all numbers : ",sum(arr3));


// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature
let temperature = [25, 15, 35, 27, 5, -4];
console.log("With Celsius temperature : ", temperature);
var Fahrenheit: number[] = [];
function Converter(temperature: number[], Fahrenheit: number[]) {
    let i = 0;
    while (i < temperature.length) {
        Fahrenheit[i] = (temperature[i] * 9 / 5) + 32;
        i++;
    }
}
Converter(temperature,Fahrenheit);
console.log("With Fahrenheit temperature : ",Fahrenheit);

//  4- Write a program that uses a while loop to print the first 100 even numbers.
var num1:number=1
while (num1<=200) {
    if(num1%2==0)
    console.log(num1," ");
    num1++;
}


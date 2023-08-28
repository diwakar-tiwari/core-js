 //singleton - when we declare using literals then don't form singleton and when we made using constructor then it's constructor
//object.create --> singleton


 //object literals
 
 const mySymbol = Symbol("key1")
 const jsUSer = {
    //behind the scene all keys are stored in the form of string, like "name" , "email"
    name: "Diwakar",
    "full name":"Diwakar Tiwari",
    [mySymbol]:"mykey1", ////to access the symbol keep it in sq bracket
    age: 20,
    location: "Chd",
    email: "diwakar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Sat"]
 }

//  console.log(jsUSer.email)
//  console.log(jsUSer["email"])
//  console.log(jsUSer["full name"])
//  console.log(jsUSer[mySymbol]) //to access the symbol keep it in sq bracket

//change the value of object
jsUSer.email = "diwakar@google.com"
//freeze or lock the object so that it can't get override or changed
// Object.freeze(jsUSer)
jsUSer.email = "diwakar@google123.com"
// console.log(jsUSer);

jsUSer.greetings = function(){
   console.log("Hello JS User");
}

jsUSer.greetingsTwo = function(){
   console.log(`Hello JS User, ${this["full name"]}`);
}

jsUSer.greetings();
jsUSer.greetingsTwo();

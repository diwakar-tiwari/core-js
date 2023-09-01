const user = {
    username: "Diwakar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this); // this, reffering to the current context 
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); //here it is reffering to empty object because we are running inside node environment

// function one(){
//     let username = "Diwakar"
//     console.log(this.username);
//     //this.username is attempted to be logged, but this refers to the global object, and there's no global variable named username.
//     //so it will print undefined
// }
// one()

// const one = function(){
//     let username = "Diwakar"
//     console.log(this.username);
// }
// one()

// const one = () =>{
//     let username = "Diwakar"
//     console.log(this.username);
// }
// one()

//Basic arrow function
// const addTwo = (num1,num2) =>{
//     return num1+num2
// }



//arrow function - implicit return
// const addTwo = (num1,num2) => num1+num2

const addTwo = (num1,num2) => (num1+num2)


console.log(addTwo(4,5))
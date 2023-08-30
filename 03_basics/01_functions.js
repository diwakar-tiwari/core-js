function loginUser(username= "sam"){
    if(username===undefined){
        console.log("Enter value");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser()); // if i will pass any value then above param will get override else it will print that default value

 //rest operator -> ... (same as spread operator but names are different on use cases)
 function calculateCartPrice(val1, val2, ...num1){ //first 2 values will be in val1 and val2 
    return num1;
 }

//  console.log(calculateCartPrice(200,300,500));
const user = {
    username: "Diwakar",
    price:999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//Pass Objects
// handleObject(user) // passing by created above
//pass directly
handleObject({
    username:"sam",
    price:866
})

//Pass Array
const myArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray));

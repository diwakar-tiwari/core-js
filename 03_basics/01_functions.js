function loginUser(username= "sam"){
    if(username===undefined){
        console.log("Enter value");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser()); // if i will pass any value then above param will get override else it will print that default value
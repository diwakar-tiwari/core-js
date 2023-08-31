function one(){
    const username = "Diwakar"

    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website);

    two()
}
one()


//example
//--hoisting
console.log(addOne(5)); 
function addOne(num){
    return num+1;
}


 
addTwo(5)
const addTwo = function(num){
    return num+2;
}
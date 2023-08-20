//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["abc","def"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add at the starting
// myArr.shift() //remove from starting 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // convert array into string

// console.log(myArr);
// console.log(newArr);

 //SLICE AND SPLICE

 console.log("A", myArr);

 const myn1 = myArr.slice(1,3)//slice dont change the original array
 console.log(myn1);

 console.log("B", myArr);

 const myn2 = myArr.splice(1,3); //splice made the changes in original array
 console.log("C", myArr);
 console.log(myn2);
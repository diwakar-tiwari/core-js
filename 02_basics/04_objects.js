// const tinderUser = new Object(); //singleton object

const tinderUser = {} //non singleton user

tinderUser.id = "123d"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"abcd@gmail.com",
    fullname: {
        userFullName:{
            firstName:"Diwakar",
            lastName: "Tiwari"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//merge the both object 1 and 2
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1,obj2);  
// assign(target,source) ^|
//if we not use {} as target then all the value will be mergen in the first parameter that is obj1 in this case, it's okay but if there are lots of object to merge then it will not be a good habbit, so always use {} empty object as a target

//Instead of assign we can use spread method also and it will be easy to implement
const obj3 = {...obj1, ...obj2} //spread operator

// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //array of keys and values in it

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check if property exists or not and return boolean 

//----------------------------OBJECT DESTRUCTURING--------------

const course = {
    courseName:"JavaScript",
    price:999,
    courseInstructor: "Diwakar"
}

// console.log(course.courseInstructor) --> It will be difficult if i have to access many values from the objects, so in this case we will use the concept of object destructuring 

// const {courseInstructor} = course

const {courseInstructor: instructor , price} = course //in destructuring we can give any name and can access through the same

// console.log(courseInstructor);
console.log(instructor, price);
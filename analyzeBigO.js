// in this function we get know how big o natation work in Object function.
// here i create a simple object function.
//iletarate the function with Bio O natation 


const myObject = {
    Channel: "Sayed's homies",
    Instructor: "Md Abu Sayed",
    Videos: [4, 5, 6, 7]
}
console.log(myObject.hasOwnProperty("Channel"))
console.log(Object.values(myObject))
console.log(Object.keys(myObject))
console.log(Object.entries(myObject))
//Object.keys()= Big O(N)
//Object.values()= Big O(N)
//Object.entries()= Big O(N)
//Object.hasOwnProperty()= Big O(1)
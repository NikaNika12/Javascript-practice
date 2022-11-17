const myNumber = 42

// localStorage.removeItem("number") //delete one item
// console.log(localStorage.getItem("number"))
// localStorage.setItem("number"), myNumber.toString())
// console.log(localStorage.getItem("number"))
// localStorage.clear() //clean everything

const object = {
    name: "Max",
    age: 20
}

//localStorage.setItem("person", JSON.stringify(object)) //string to local storage only

const raw = localStorage.getItem("person")
const person = JSON.parse(raw) //to object to change it
person.name = "Veronika"
console.log(person)

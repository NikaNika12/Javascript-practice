function calcValue(a,b) {
    return [
        a + b,
        a - b,
        a * b,
        a/b
    ]
}

const [sum, sub = "no value", mult, ...other] = calcValue(42,10)
console.log(sum, sub, mult, other)

//objects
const person = {
    name: "Max",
    age: 20,
    address: {
        country: "Ukraine",
        city: "Kiev"
    }
}

//const name = person.name
//const{name: firstName = "No name", age, car = "No car", adress: {country, city: Hometown}} = person

const{name, ...info} = person
console.log(name, info)

function logPerson({name: firstName,age}) { //person; чтобы избежать дублирования пишем в фигурных скобках как примере выше 
    console.log(firstName + " " + age)      //person.age
}
logPerson(person)
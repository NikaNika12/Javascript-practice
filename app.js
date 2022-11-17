// // // const { Writable } = require("stream")

// const { hasJSDocParameterTags } = require("typescript")



// // // const heading = document.getElementById('hello')
// // // // const heading2 = document.getElementsByTagName('h2')[0]
// // // // const heading2 = document.getElementsByClassName('h2-class')[0]
// // // // const heading2 = document.querySelector('.h2-class')
// // // // const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
// // // const heading2 = document.querySelector('h2')


// // // // const heading3 = heading2.nextElementSibling
// // // const h2List = document.querySelectorAll('h2')
// // // const heading3 = h2List[h2List.length - 1]


// // // setTimeout(() => {
// // //   addStylesTo(heading, 'JavaScript')
// // // }, 1500)

// // // const link = heading3.querySelector('a')

// // // link.addEventListener('click', (event) => {
// // //   event.preventDefault()
// // //   console.log('Click on link', event.target.getAttribute('href'))
// // //   const url = event.target.getAttribute('href')

// // //   window.location = url
// // // })


// // // setTimeout(() => {
// // //   addStylesTo(link, 'Практикуйся', 'blue')
// // // }, 3000)

// // // setTimeout(() => {
// // //   addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
// // // }, 4500)

// // // function addStylesTo(node, text, color = 'red', fontSize) {
// // //   node.textContent = text
// // //   node.style.color = color
// // //   node.style.textAlign = 'center'
// // //   node.style.backgroundColor = 'black'
// // //   node.style.padding = '2rem'
// // //   node.style.display = 'block'
// // //   node.style.width = '100%'

// // //   // falsy: '', undefined, null, 0, false
// // //   if (fontSize) {
// // //     node.style.fontSize = fontSize
// // //   }
// // // }

// // // heading.onclick = () => {
// // //   if (heading.style.color === 'red') {
// // //     heading.style.color = '#000'
// // //     heading.style.backgroundColor = '#fff'
// // //   } else {
// // //     heading.style.color = 'red'
// // //     heading.style.backgroundColor = '#000'
// // //   }
// // // }


// // // heading2.addEventListener('dblclick', () => {
// // //   if (heading2.style.color === 'yellow') {
// // //     heading2.style.color = '#000'
// // //     heading2.style.backgroundColor = '#fff'
// // //   } else {
// // //     heading2.style.color = 'yellow'
// // //     heading2.style.backgroundColor = '#000'
// // //   }
// // // })

// // // // const person = new Object({
// // // //   name: "Veronika",
// // // //   age: 23,
// // // //   greet: function () {
// // // //       console.dir("Greet!")
// // // //   }
// // // // })

// // // // Object.prototype.sayHello = function () {
// // // //   console.dir("Hello!")
// // // // }

// // // // const lena = Object.create(person)
// // // // lena.name = "Elena"

// // // function hello() {
// // //   console.log("Hello", this)
// // // }

// // // const person = {
// // //   name: "Vladilen",
// // //   sayHello: hello,
// // //   sayHelloWindow: hello.bind(this),
// // //   logInfo: function(job, phone){
// // //     console.group(`${this.name} info:`)
// // //     console.log(`Name is ${this.name}`)
// // //     console.log(`Age is ${this.age}`)
// // //     console.log(`Phone is ${phone}`)
// // //     console.log(`Job is ${job}`)
// // //     console.groupEnd()
// // //   }
// // // }

// // // const lena = {
// // //   name: "Elena",
// // //   age: 23
// // // }

// // // //person.logInfo.bind(lena,"frontend","44444")()
// // // //person.logInfo.call(lena,"frontend","44444") вызывает функцию сразу
// // // //person.logInfo.apply(lena, ["frontend","44444"])

// // // // const lenaInf = person.logInfo.bind(lena,"frontend","44444")
// // // // lenaInf()


// // // const array = [1,2,3,4,5]
// // // // function multiBy (arr,n){
// // // //   return arr.map(function(i){
// // // //     return i * n
// // // //   })
// // // // }

// // // // Array.prototype.multiBy = function(n) {
// // // //   return this.map(function(i){
// // // //     return i * n
// // // //   })
// // // // }

// // // // console.log(array.multiBy(2))

// // // //замыкание

// // // // function createCallFunction(n) {
// // // //   return function (){
// // // //     console.log(1000 * n)
// // // //   }
// // // // }

// // // // const calc = createCallFunction(42)
// // // // calc()

// // // // function createIncrementor (n) {
// // // //   return function (num) {
// // // //     return n+num
// // // //   }
// // // // }

// // // // const addFour = createIncrementor(4)

// // // // console.log(addFour(10))

// // // // function generateUrl(domain){
// // // //   return function (url) {
// // // //     return `https://${url}.${domain}`
// // // //   }
// // // // }

// // // // const comDomain = generateUrl("com")
// // // // console.log(comDomain("google"))

// // // // function logPerson () {
// // // //   console.log(`Person  ${this.name} ${this.age} ${this.job}`)
// // // // }

// // // // const person1 = {name: "Lena", age: 22, job: "kinesiologist"}
// // // // const person2 = {name: "Maksim", age: 30, job: "programmer"}

// // // // function bind(context, fn){
// // // //   return function(...args){
// // // //     fn.apply(context, args)
// // // //   }
// // // // }

// // // // bind(person1, logPerson)()

// // // // fetch("https://")
// // // //   .then(response => response.json())
// // // //   .then(data => console.log(data))
// // // //   .catch
// // // //   .finally

// // // // const p = new Promise(function(resolve, reject){
// // // //   setTimeout(() => {
// // // //     console.log("Prep data")
// // // //     const backendData = {
// // // //       server: "aws",
// // // //       port: 2000,
// // // //       status: "working"
// // // //     }
// // // //     resolve(backendData)
// // // //   }, 2000)
// // // // })

// // // // p.then(data => {
// // // //   console.log("Promise resolved", data)
// // // // })

// // // // p.then(data =>{
// // // //   return new Promise(function(resolve, reject){
// // // //     setTimeout(() => {
// // // //       data.modified = true
// // // //       //resolve(data)
// // // //       reject(data)
// // // //     }, 2000)
// // // // })
// // // // })

// // // // .then(clientData =>{
// // // //   clientData.fromPromise = true
// // // //   return clientData
// // // // })

// // // // .then(data => {
// // // //   console.log("Modified", data)
// // // // })

// // // // .catch(err => console.error("Error: ", err))
// // // // .finally(() => console.log("Finally"))

// // // // //обьект р можно передавать куда угодно с помощью молудей, меньше кода, поэтапное и хорошо видимое изменение кода

// // const sleep = ms => {
// //   return new Promise(resolve => {
// //     setTimeout(()=> resolve(),ms)
// //   })
// // }

// // // // sleep(2000).then(() => console.log("After 2 sec"))
// // // // sleep(3000).then(() => console.log("After 3 sec"))

// // // // Promise.all([sleep(2000), sleep(3000)]).then(() => {
// // // //   console.log("All promises")
// // // // })

// // // //вернет последний результат, дождется пока поэтапно выполнятся один за другим


// // // // Promise.race([sleep(2000), sleep(3000)]).then(() => {
// // // //   console.log("Race promises")
// // // // })

// // // //вернет первый выполнившийся промис

// // //с помощью колбеков
// // // function fetchTodos () {
// // //   return sleep(2000).then(() => fetch(url))
// // //   .then(response => response.json())
// // // }

// // // fetchTodos()
// // //   .then(data => {
// // //   console.log("Data: ", data)
// // //   })
// // //   .catch(e => console.error(e))
// // //через асинк евейт
// // // async function fetchToods(){ //обрабатывает и эжет завершение промиса, в родительскую функцию ставим асинк, а перед промисом евейт
// // //   try{
// // //     await sleep(2000)
// // //     const response = await fetch(url)
// // //     const data = await response.json()
// // //     console.log("Data: ", data)

// // //   } catch (e) {
// // //     console.error(e)
// // //   } finally {

// // //   }
// // // }
// // // fetchTodos()


// // // //Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters

// // // const pers = Object.create(
// // //   {calculateAge(){
// // //     console.log("Age", new Date().getFullYear() - this.birthday)
// // //   }}/*prototype*/,
// // //   {
// // //     name: {
// // //       value: "Veronika",
// // //       enumerable: true, //iteration possible
// // //       writable: true, //possible to change
// // //       configurable: true //possible to delete
// // //     },
// // //     birthday: {
// // //       value: "1993",
// // //       enumerable: false, //iteration impossible
// // //       writable: false, //impossible to change
// // //       configurable: false //impossible to delete
// // //     },
// // //     age: {
// // //       get(){
// // //         return new Date().getFullYear - this.birthday
// // //       },
// // //       set(value){
// // //         document.body.style.background = "red"
// // //         console.log("Set age", value) //person.age = "new", Set age new
// // //       }
// // //     }
// // //   })

// // //   person.name = "Maksim"

// // //   for(let key in person){
// // //     if(person.hasOwnProperty(key)) { //iteration only without prototype
// // //     console.log("Key", key, person[key])
// // //   }}

// // class Animal {
// //   static type = "ANIMAL"

// //   constructor(options) {
// //     this.name = options.name
// //     this.age = options.age
// //     }
// //   voice(){
// //     console.log("I am animal")
// //   }
// // }

// // // const animal = new Animal({
// // //   name: "Vasya",
// // //   age: 5
// // // })

// // // class Cat extends Animal{
// // //   static type = "CAT"

// // //   constructor(options){
// // //     super(options)
// // //     this.color= options.color
// // //   }
// // //   voice(){
// // //     super.voice()//вызывает родительский метод
// // //     console.log("I am cat")
// // //   }

// // //   get ageInfo(){ //поле а не функция
// // //     return this.age * 7
// // //   }

// // //   set ageInfo(newAge){   //cat.ageInfo = 10 cat.ageInfo 70
// // //     this.age = newAge
// // //   }

// // // }

// // // const cat = new Cat({
// // //   name: "Petya",
// // //   age: 10,
// // //   color: "green"
// // // })

// // class Component {
// //   constructor(selector){
// //     this.$el = document.querySelector(selector)
// //   }
// //   hide(){
// //     this.$el.style.display = "none" 
// //   }

// //   show(){
// //     this.$el.style.display = "block" 
// //   }
// // }

// // class Box extends Component {
// //   constructor(options){
// //     super(options.selector)

// //     this.$el.style.width = this.$el.style.height = options.size + "px"
// //     this.$el.style.background = options.color
// //   }
// // }

// // const box1 = new Box({
// //   selector:"#box1",
// //   size: 100,
// //   color: "red"
// // })

// // const box2 = new Box({
// //   selector:"#box2",
// //   size: 200,
// //   color: "blue"
// // })

// // class Circle extends Box {
// //   constructor(options){
// //     super(options)
// //     this.$el.style.borderRadius = "50%"
// //   }
// // }

// // const c = new Circle({
// //   selector:"#circle",
// //   size: 50,
// //   color: "green"
// // })


// //proxy objects
// const person = {
//   name: "Vladilen",
//   age: 25,
//   job: "Fullstack"
// }

// const op = new Proxy(person, {
//   get(target, prop){    //op.age poluchaem target, prop age, 25
//     console.log(`Getting prop ${prop}`)
//     if(!(prop in target)){ //op.name_age_job --> Vladilen 25 Fullstack
//       return prop
//       .split("_")
//       .map(p => target[p])
//       .join(" ")
//     }
//     return target[prop]
//   },
//   set(target, prop, value){
//     if(prop in target) {
//       target[prop] = value //op.age = 26 perezapis vozrasta
//     } else {
//       throw new Error (`No ${prop} field in target`)
//     }
//   },
//   has(target,prop){
//     return ["age","name", "job"].includes(prop) //"name" in op true
//   },
//   deleteProperty(target, prop) {     //delete op.age   Deleting... age false 
//     console.log("Deleting...", prop)
//     delete target[prop]
//     return true
//   }
// })
//   //functions
//   const log = text =>`Log: ${text}`  //fp("market") --> "LOG: MARKET"

//   const fp = new Proxy(log, {
//     apply(target, thisArg, args) { //исходная функция, контекст если есть методами bind, call,  параметры *текст здесь
//       console.log("Calling in...")
//       return target.apply(thisArg, args).toUpperCase()
//     }
//   })
//   //classes
//   class Person {
//     constructor(name, age){
//       this.name = name
//       this.age = age
//     }
//   }


//   const PersonProxy = new Proxy(Person, {
//     constuct (target, args) {
//       console.log("Construct ...")

//       return new Proxy (new target(...args), {
//         get(t, prop) {
//           console.log(`Getting prop "${prop}`)
//           return t[prop]
//         }
//       })
//     }
//   })

//   const p = new PersonProxy("Maxim", 30) //p --> Proxy {}; p.name --> Getting prop "name"  "Maxim"

//создаем обьект с значениями которые не входят указываем значение по умолчанию 0 //position.me 0
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ?obj[prop]:defaultValue)
    })
}

const position = withDefaultValue(
  {
    x: 24,
    y:42
  },
  0
)

console.log(position) //Proxy {x: 24, y: 42}

//создать обьект который будет прятать свойства которые мы укажем

const withHiddenProps = (target, prefix = "_") => {
  return new Proxy(target, {
    has:(obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
    //Reflect.ownKeys(position) --> "x", "y"
    get:(obj, prop,receiver) => (prop in receiver ? obj[prop] : void 0)
  })
}

const data = withHiddenProps({ //"_uid" in data --> false; data._uid --> false
  name: "Veronika",             //Object.keys(data)
  age: 25,
  _uid: "1232"
})

//optimization


//userData.find(user => user.id === 3)

// const index = {}
// userData.forEach(i => (index[i.id] = i)) //index[11] --> соответствующая строка

// const IndexedArray = new Proxy(Array, {
//   construct (target, [args]) {
//     const index = {}
//     args.forEach(item => (index [item.id] = item)) //user[0] --> first line
//     //return new target(...args)  //users --> array users

//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case 'push':
//             return item => {
//               index[item.id] = item
//               arr[prop].call(arr, item) //users.push({id: 55, name: "Sergey"}) users[4] --> {id: 55, name: "Sergey"}
//             }
//           case 'findById':
//             return id => index[id] //users.findById(11)
//           default:
//             return arr[prop]
//         }
//       }
//     })
//   }
// })
// const users = new IndexedArray [
//   { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
//   { id: 22, name: 'Elena', job: 'Student', age: 22 },
//   { id: 33, name: 'Victor', job: 'Backend', age: 23 },
//   { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
// ]

//generators
// function* strGenerator(){
//   yield "H"
//   yield "E"
//   yield "L"
//   yield "L"
//   yield "O"
// }

// const str = strGenerator()
// //str.next()

// function* iter(n=10) {
//   for (let i=0; i<n; i++)
//   yield i
// }

// for(let k of iter(6)){
//   console.log(k)
// }

const people= [ 
  { name: 'Vladilen', budget: 40000, age: 13 },
  { name: 'Elena', budget: 3400, age: 22 },
  { name: 'Victor', budget: 50000, age: 17 },
  { name: 'Vasilisa', budget: 2500, age: 24 }
]

// for(let i=0; i < people.length; i++){
//   console.log(people[i])
// }

// for(let person of people) {
//   console.log(person)
// }

//people.forEach(person => console.log(person))

//const newPeople = people.map(person => /*{return person}*/ /*person.name*/ /*`${person.name} (${person.age})`*/ person.age + 3)
//console.log(newPeople)

// const less18 = []
// for(let i=0; i < people.length; i++){
//   if(people[i].age <= 18){
//     less18.push(people[i])
//   }
// }

// console.log(less18)

// const adults = people.filter(person => person.age <= 18/*{
//   if(person.age <= 18){
//     return true
//   }
// }*/)

// console.log(adults)

//Reduce
// for(let i=0; i < people.length; i++){
//   amount += people[i].budget
// }

// const amount = people.reduce((total, person) => total += person.budget/*{
//   return total += people[i].budget
// }*/, 0)

// console.log(amount)

// const victor = people.find(person => person.name === "Victor")
// console.log(victor)

//const victorIndex = people.findIndex(person => person.name === "Victor")
//console.log(victorIndex)

// const amount = people
//   .filter(person => person.budget > 3000)
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: Math.sqrt(person.budget)
//     }
//   })
//   .reduce((total, person) => total += person.budget, 0)

// console.log(amount)

//map
const obj = {
  name: "Vlad",
  age: 26,
  job: "Fullstack"
}

const entries = [
  ["name", "Vlad"],
  ["age", 26],
  ["job", "Fullstack"]
]

//console.log(Object.entries(obj)) //to massive
//console.log(Object.fromEntries(entries)) //to object

const map = new Map(entries)
//console.log(map)// { 'name' => 'Vlad', 'age' => 26, 'job' => 'Fullstack' }
// console.log(map.get("job")) //Fullstack
// map.set("newField", 42)
// console.log(map)

// map.delete("job")
// console.log(map.has("job"))
// console.log(map.size) //размер карты
// map.clear() //очистить карту

// for(let entry of map.entries()){
//   console.log(entry)
// }
// [ 'name', 'Vlad' ]
// [ 'age', 26 ]
// [ 'job', 'Fullstack' ]

// for(let [key, value] of map){ //можно отдельно ключи или значения
//   console.log(key,value)
// }

// map.forEach((value, key) => console.log(value,key))
//name Vlad
// age 26
// job Fullstack

// const array = [...map]
// const array = Array.from(map)
// console.log(array)
// const mapToObj = Object.fromEntries(map.entries())
// console.log(mapToObj)

const users = [
  {name: "Elena"},
  {name: "Alex"},
  {name: "Irina"},
]

// const visits = new Map()

// visits  
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))

// function lastVisit(user){
//   return visits.get(user)
// }

// console.log(lastVisit(users[1]))

//set уникальные значения без повторений

//const set = new Set([1,2,3,3,4,5,5,6])
// console.log(set) //Set(6) { 1, 2, 3, 4, 5, 6 }
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.clear())
// console.log(set.values())//значения и ключи совпадаюь
// console.log(set.entries()) 
// for(let key of set){
//   console.log(set)
// }

// function uniqValues(array){
//   //return Array.from(new Set(array))
//   return [...new Set(array)]
// }

// console.log(uniqValues([11,2,11,3,3,3,4,4,4,5,6,6,7,8]))
//WeakMap()
// const cache = new WeakMap()

// function cacheUser(user){
//   if(!cache.has(user)){
//     cache.set(user, Date.now())
//   }
//   return cache.get(user)
// }
// const lena = {name: "Elena"}
// const alex = {name: "Alex"}
// cacheUser("Elena")
// cacheUser("Alex")

// lena = null

// console.log(cache.has(lena)) //false очистка кеша

//weakSet
// const visits = new WeakSet()
// visits.add(users[0]).add(users[1])
// users.splice(1,1)
// console.log(visits.has(users[0])) //есть ли данный обьект

//XMLHttpRequest
const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
  })
}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))

const body = {
  name: 'Vladilen',
  age: 26
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))
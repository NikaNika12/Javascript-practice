//null, number, string, boolean, underfined, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript') // "", '', ``
// console.log(typeof undefined) - 
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null)
// console.log(typeof function() {})
// console.log(typeof NaN)

// Приведение типов
// let language = 'JavaScript'
// if (language) {
//   console.log('The best language is: ', language)
// }

// '', 0, null, undefined, NaN, false
// console.log(Boolean('')) //false
// console.log(Boolean('Hello'))
// console.log(Boolean(' '))
// console.log(Boolean('0'))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean([])) //true
// console.log(Boolean({}))
// console.log(Boolean(function(){}))

// Строки и числа
// console.log(1 + '2') // string 12
// console.log('' + 1 + 0) //10
// console.log('' - 1 + 0) //-1 number
// console.log('3' * '8') // 24 number
// console.log(4 + 10 + 'px') 14px string
// console.log('px' + 5 + 10) // px510 string
// console.log('42' - 40) //2 number no minus for numbers
// console.log('42px' - 2) NAN
// console.log(null + 2) 2 null --> 0
// console.log(undefined + 42) NaN

// == vs ===
// console.log(2 == '2') true
// console.log(2 === '2') false
// console.log(undefined == null) true
// console.log(undefined === null) false
// console.log('0' == false) t
// console.log('0' == 0) t
// console.log(0 == 0) t

// =====
// console.log(false == '') t
// console.log(false == []) t
// console.log(false == {}) f
// console.log('' == 0) t
// console.log('' == []) t
// console.log('' == {}) f
// console.log(0 == []) t
// console.log(0 == {}) f
// console.log(0 == null) f

// let a = 42
// let b = a
// b++
// console.log('a', a)
// console.log('b', b)

// let a = [1, 2, 3]
// let b = a.concat() //create copy
// b.push(4)

// let c = [1, 2, 3, 4]

// console.log('a', a)
// console.log('b', b)

// console.log(a === b) //t
// console.log(a === c) //f

// function funcA() { //вышеобьявленная переменная является доступной для нижестоящей ыйнкции
//     let a = 1
  
//     function funcB() {
//       let b = 2
  
//       function funcC() {
//         let c = 3
  
//         console.log('funcC:',a, b, c)
//       }
  
//       funcC()
//       console.log('funcB:', a, b)
//     }
  
//     funcB()
//     console.log('funcA:', a)
//   }
  
//   funcA()

//hosting
// console.log(sum(1, 41)) //вызываем функцию перед тем как она обьявлена
//
// function sum(a, b) {
//   return a + b
// }

// var i
// console.log(i)
// i = 42
// console.log(i)

// console.log(num) //let and const не подвержены хостингу
// let num = 42
// console.log(num)

// Function Expression & Function Declaration


// function square(num) { //declaration, можем вызывать до фцнкции
//   return num ** 2
// }

var square = function(num) { //expression, можем вызывать только после функции
    return num ** 2
  }
  
  console.log(square(25))

// Let //можно изменять 
// let a = 'Variable a'
// let b = 'Variable b'
// {
//   a = 'New Variable A' //изменяем значение
//   let b = 'Local Variable B' //достпуно только внутри блочного scope
//   console.log('Scope A', a)
//   console.log('Scope B', b)
//   // console.log('Scope C', c)
//   // let c = 'Something'
// }
// console.log('A:', a) //'New Variable A'
// console.log('B:', b) // 'Variable b'

// Const
// const PORT = 8080 //не можем изменять только примитивы
// const array = ['Javascript', 'is', 'Awesome'] //можзем изменять обьекты и массивы внутри

// array.push('!')
// array[0] = 'JS'
// console.log(array)

// const obj = {}
// obj.name = 'Vladilen'
// obj.age = 26

// console.log(obj)

// delete obj.name

// console.log(obj)

//CLOSERS ЗАМЫКАНИЯ - момент, когда функция имеет доступ до переменных из вышестоящего скоупа, функция внутри функции, функция замыкает в себе значения из вышестоящего скоупа
// function sayHelloTo(name) {
//   const message = 'Hello ' + name
//
//   return function() {
//     console.log(message)
//   }
// }
//
// const helloToElena = sayHelloTo('Elena')
// const helloToIgor = sayHelloTo('Igor')
// console.log(helloToElena)
// helloToElena()
// helloToIgor()

function createFrameworkManager() {
    const fw = ['Angular', 'React'] //не доступно из внеб взаимодействие только через манагер
  
    return {
      print: function() {
        console.log(fw.join(' '))
      },
      add: function(framework) {
        fw.push(framework)
      }
    }
  }
  
  // const manager = createFrameworkManager()
  // // console.log(manager)
  // manager.print()
  // manager.add('VueJS')
  //
  // manager.print()
  
  // setTimeout
  
//   const fib = [1, 2, 3, 5, 8, 13]

//   for (var i = 0; i < fib.length; i++) { //var --> let
//       setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`)
//       }, 1500)
//   }
  
//   for (var i = 0; i < fib.length; i++) {
//     (function(j) {                   //создали свой свопе и замкнули значение
//       setTimeout(function () {
//         console.log(`fib[${j}] = ${fib[j]}`)
//       }, 1500)
//     })(i) //j from i
//   }

// Immediate Invoked Function Expression //моментально выполняемый, окрудены круглыми скобками и вызываются моментально
let result = []
// for (var i = 0; i < 5; i++) {
//   result.push( function() {
//     console.log(i)
//   } )
// }
//
// result[2]() //5
// result[4]() //5

// for (var i = 0; i < 5; i++) {
//   (function() {
//     var j = i
//     result.push( function() { console.log(j) } )
//   })()
// }

// result[2]() //2
// result[4]() //4

//context //показывает как функция была вызвана и указывает на this

// const person = {
//     surname: 'Старк',
//     knows: function (what, name) {
//       console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
//   }
  //
  // const john = { surname: 'Сноу' }
  //
  // person.knows('все', 'Бран')
  // person.knows.call(john, 'ничего не', 'Джон') //контекст и аргументы
  // person.knows.apply(john, ['ничего не', 'Джон']) //второй параметр всегда массив
  // person.knows.call(john, ...['ничего не', 'Джон']) //аналогия
  // 1) const bound = person.knows.bind(john, 'ничего не', 'Джон') //отличие возврашает не функцию, а новую функцию
  // bound()
  // 2) person.knows.bind(john, 'ничего не', 'Джон') ()
  
  // ========
  
  // function Person(name, age) {
  //   this.name = name
  //   this.age = age
  //
  //   console.log(this)
  // }
  //
  // const elena = new Person('Elena', 20) //elena = this Person {name: "Elena", age: 20}
  
  // ======== Явный
  // function logThis() {
  //   console.log(this)
  // }
  //
  // const obj = {num: 42}
  // logThis.apply(obj)
  // logThis.call(obj)
  // logThis.bind(obj)()
  //
  // // ===== Неявный
  // const animal = {
  //   legs: 4,
  //   logThis: function() {
  //     console.log(this)
  //   }
  // }
  //
  //
  // animal.logThis() //{legs: 4, logThis: [Function: logThis]}
  
//   function Cat(color) {
//     this.color = color
//     console.log('This', this)
//     ;( () => console.log('Arrow this', this) )() //стрелочная функция не создает свой контекст
//   }
  
//   new Cat('red') //This Cat {color: "red"}

//classes
// function Cat(color, name) {
//     this.color = color
//     this.name = name
//   }
  
// const caty = new Cat('black', 'KOT')
// console.log(caty) //Cat { color: 'black', name: 'KOT' }
  
//   function myNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
//   } //Cat { color: 'black', name: 'KOT' }
  //
  // const cat = myNew(Cat, 'black', 'KOT')
  // console.log(cat)
  
//   const cat = new Cat()
//   console.log(cat)

//проттотип создается от родительского элемента от которого был создан данный обьект
// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name
    this.color = color
  }
  
  Cat.prototype.voice = function() { //расширение прототипа родительского класса
    console.log(`Cat ${this.name} says myay`)
  }
  
  const cat = new Cat('Kot', 'white') //инстанс
  
  //console.log(Cat.prototype) //{ voice: [Function (anonymous)] }
  // console.log(cat)
  // console.log(cat.__proto__ === Cat.prototype)
  // console.log(cat.constructor) //[Function: Cat]
  // cat.voice()
  
  // ============
  function Person() {}
  Person.prototype.legs = 2
  Person.prototype.skin = 'white'
  
  const person = new Person()
  person.name = 'Vladilen'
  
  // console.log('skin' in person) //true
  // console.log(person.legs)// 2
  // console.log(person.name)// Vladilen
  
  // console.log(person.hasOwnProperty('name'))
  // console.log(person.hasOwnProperty('skin'))
  
  // Object.create()
  var proto = {year: 2019}
  const myYear = Object.create(proto)
  
  console.log(myYear.year)
  
  // proto.year = 2200
  //
  // console.log(myYear.year)
  
  proto = {year: 999}
  
  console.log(myYear.year)
  
  // console.log(myYear.hasOwnProperty('year'))
  // console.log(myYear.__proto__ === proto)
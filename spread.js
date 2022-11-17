const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2
}

// Spread
console.log(...citiesRussia) //массив в строки
console.log(...citiesEurope)

const allCities = [...citiesEurope, "Washington", ...citiesRussia] //клонирование и обьединение в один массив
// const allCities = citiesEurope.concat(citiesRussia)
console.log(allCities)

console.log({...citiesRussiaWithPopulation})//обьект в новый обьект по сути клонирование
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation}) //если встречаются одинаковые ключи, то записывается значение послднего обьекта

/// Practice
const numbers = [5, 37, 42, 17]
console.log(Math.max(5, 37, 42, 17))
console.log(Math.max(...numbers))
console.log(Math.max.apply(null, numbers))

const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(divs, Array.isArray(divs)) //проверка является ли массивом
console.log(nodes, Array.isArray(nodes))

/// Rest
function sum(a, b, ...rest) { //rest это 3, 4, 5, 6, 7, 8
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(sum(...nums))

// const a = nums[0]
// const b = nums[1]

const [a, b, ...other] = nums
console.log(a, b, other)

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
}

const {name, age, ...address} = person

console.log(name, age, address)

//Module

const names = require('./name')
const sayHi = require('./util')
const data = require('./alternative_flavor')
require('./mind-grenade') //when require you will invoke the module
// console.log(data)
console.log(names)

// sayHi(john)
sayHi(names.john)

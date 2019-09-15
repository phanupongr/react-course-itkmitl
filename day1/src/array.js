// const number = [1, 2, 3, 4]
// const double = number.map(a => a * 2)
// console.log(double)

// const oddOrEvenFunc = (num, index) => {
//   if (num % 2 === 0) {
//     return 'Even'
//   }
//   return 'Odd'
// }
// const oddOrEven = number.map(oddOrEvenFunc)
// console.log(oddOrEven)

const number = [1, 5, 9, 22, 33]
const result = number.map((num) => {
  if (num % 3 == 0 || num % 10 === 3) {
    return 'Pong'
  }
  return num
})

console.log(result)
const users = [
  { name: 'Admin', isAdmin: true, location: 'TH' },
  { name: 'Sale 1', isAdmin: false, location: 'TH' },
  { name: 'Sale 2', isAdmin: false, location: 'USA' },
  { name: 'Sale 3', isAdmin: false, location: 'USA' },
  { name: 'Customer 1', isAdmin: false, location: 'TH' },
  { name: 'Customer 2', isAdmin: false, location: 'USA' },
]

const arrayOfName = users.map(info => info.name)
const checkIsAdmin = user => user.isAdmin
const admin = users.filter(checkIsAdmin)
const checkIsThai = user => user.location === 'TH'
const thai = users.filter(checkIsThai)
// console.log(thai)
// console.log(arrayOfName)
// console.log(admin)
users.forEach(user => console.log(user.name))
number.indexOf(5)
users.findIndex(user => user.isAdmin)

const key = 'a'
const user = {
  username: 'test',
  email: 'earth@earth.com',
  age: 30,
  isAdmin: false,
  posts: [],
  'ABC Def': 1,
  '#': 1,
  [key]: 1,
}

console.log(user)
console.log(Object.keys(user))
console.log(user.username)
console.log(user.username)
console.log(user['#'])
